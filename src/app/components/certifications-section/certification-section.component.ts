/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService, Language } from '../../services/language.service';

// ============================================================================
// Interfaces
// ============================================================================
interface Certification {
  readonly nameKey: string;
  readonly issuerKey: string;
  readonly date: string;
  readonly descriptionKey?: string;
  readonly url?: string;
  readonly logo?: string;
}

interface CertificationCategory {
  readonly titleKey: string;
  readonly certifications: readonly Certification[];
}

interface StructuredDataItem {
  readonly '@type': string;
  readonly position: number;
  readonly item: {
    readonly '@type': string;
    readonly credentialCategory: string;
    readonly name: string;
    readonly description: string;
    readonly recognizedBy: {
      readonly '@type': string;
      readonly name: string;
    };
    readonly dateCreated: string;
  };
}

interface StructuredData {
  readonly '@context': string;
  readonly '@type': string;
  readonly name: string;
  readonly description: string;
  readonly numberOfItems: number;
  readonly url: string;
  readonly itemListElement: readonly StructuredDataItem[];
}

type LocaleMap = Record<Language, string>;

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-certification-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification-section.component.html',
  styleUrl: './certification-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  certificationCategories: readonly CertificationCategory[] = [];
  private readonly destroy$ = new Subject<void>();
  private readonly localeMap: LocaleMap = {
    'en': 'en-US',
    'fr': 'fr-FR',
    'es': 'es-ES',
    'ar': 'ar-SA'
  };

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    public readonly languageService: LanguageService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly renderer: Renderer2
  ) {}

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  ngOnInit(): void {
    this.initializeCertifications();
    this.subscribeToLanguageChanges();
    this.updateSEOMetaTags();
    if (isPlatformBrowser(this.platformId)) {
      this.injectStructuredData();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (isPlatformBrowser(this.platformId)) {
      this.removeStructuredData();
    }
  }

  // ============================================================================
  // Public Methods - Formatting & Display
  // ============================================================================
  formatDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return '';
      }
      const currentLang = this.languageService.getCurrentLanguage();
      const locale = this.localeMap[currentLang] || 'en-US';
      return date.toLocaleDateString(locale, { year: 'numeric', month: 'short' });
    } catch {
      return '';
    }
  }

  trackByCategory(_index: number, category: CertificationCategory): string {
    return category.titleKey;
  }

  trackByCert(_index: number, cert: Certification): string {
    return `${cert.nameKey}-${cert.issuerKey}-${cert.date}`;
  }

  getCategoryTitle(category: CertificationCategory): string {
    return this.languageService.getTranslation(category.titleKey);
  }

  getCertName(cert: Certification): string {
    return this.languageService.getTranslation(cert.nameKey);
  }

  getCertIssuer(cert: Certification): string {
    return this.languageService.getTranslation(cert.issuerKey);
  }

  getCertDescription(cert: Certification): string {
    return cert.descriptionKey ? this.languageService.getTranslation(cert.descriptionKey) : '';
  }

  getAriaLabel(cert: Certification): string {
    return `${this.getCertName(cert)} from ${this.getCertIssuer(cert)}`;
  }

  getLogoAlt(cert: Certification): string {
    return `${this.getCertIssuer(cert)} logo`;
  }

  // ============================================================================
  // Private Methods - Subscriptions
  // ============================================================================
  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateSEOMetaTags();
        if (isPlatformBrowser(this.platformId)) {
          this.injectStructuredData();
        }
        this.cdr.markForCheck();
      });
  }

  // ============================================================================
  // Private Methods - SEO
  // ============================================================================
  private updateSEOMetaTags(): void {
    const titleText = this.sanitizeText(this.languageService.getTranslation('certifications.title'));
    const professionalTraining = this.sanitizeText(this.languageService.getTranslation('certifications.professionalTraining'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const safeTitle = `${titleText} & ${professionalTraining} - ${name} | Digital Resume`;
    const safeDescription = this.generateDescription();

    this.title.setTitle(safeTitle);
    this.meta.updateTag({ name: 'description', content: safeDescription });
    this.meta.updateTag({ property: 'og:title', content: safeTitle });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:description', content: safeDescription });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: safeTitle });
    this.meta.updateTag({ name: 'twitter:description', content: safeDescription });
    this.meta.updateTag({ name: 'keywords', content: this.generateKeywords() });
  }

  private generateDescription(): string {
    const titleText = this.sanitizeText(this.languageService.getTranslation('certifications.title'));
    const professionalTraining = this.sanitizeText(this.languageService.getTranslation('certifications.professionalTraining'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const totalCerts = this.certificationCategories.reduce((sum, cat) => sum + cat.certifications.length, 0);
    const categories = this.certificationCategories
      .map(cat => this.sanitizeText(this.languageService.getTranslation(cat.titleKey)))
      .join(', ');
    return `${titleText} & ${professionalTraining} - ${name}. ${totalCerts} professional certifications across ${this.certificationCategories.length} categories: ${categories}.`;
  }

  private generateKeywords(): string {
    const keywords = [
      this.sanitizeText(this.languageService.getTranslation('certifications.title')),
      this.sanitizeText(this.languageService.getTranslation('certifications.professionalTraining')),
      ...this.certificationCategories.map(cat => this.sanitizeText(this.languageService.getTranslation(cat.titleKey))),
      ...this.certificationCategories.flatMap(cat => cat.certifications.map(cert => this.sanitizeText(this.languageService.getTranslation(cert.nameKey)))),
      ...this.certificationCategories.flatMap(cat => cat.certifications.map(cert => this.sanitizeText(this.languageService.getTranslation(cert.issuerKey))))
    ].filter(s => s.length > 0);
    return keywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined' || !window.location) {
      return;
    }

    const currentUrl = window.location.href;
    const allCertifications = this.certificationCategories.flatMap(cat => cat.certifications);
    
    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${this.sanitizeText(this.languageService.getTranslation('certifications.title'))} & ${this.sanitizeText(this.languageService.getTranslation('certifications.professionalTraining'))}`,
      description: this.generateDescription(),
      numberOfItems: allCertifications.length,
      url: currentUrl,
      itemListElement: allCertifications.map((cert, index): StructuredDataItem => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: this.sanitizeText(this.languageService.getTranslation(cert.nameKey)),
          description: cert.descriptionKey 
            ? this.sanitizeText(this.languageService.getTranslation(cert.descriptionKey)) 
            : `${this.sanitizeText(this.languageService.getTranslation(cert.nameKey))} certification from ${this.sanitizeText(this.languageService.getTranslation(cert.issuerKey))}`,
          recognizedBy: {
            '@type': 'Organization',
            name: this.sanitizeText(this.languageService.getTranslation(cert.issuerKey))
          },
          dateCreated: this.formatDateForSchema(cert.date)
        }
      }))
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-certification-section', 'true');
    this.renderer.setAttribute(script, 'id', 'certification-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId) || typeof document === 'undefined') {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-certification-section]');
    if (existingScript?.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  private sanitizeText(text: string): string {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.replace(/[<>]/g, '').trim() || '';
  }

  private formatDateForSchema(dateString: string): string {
    if (!dateString || typeof dateString !== 'string') {
      return '';
    }
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      return `${dateString}-01`;
    }
    return dateString;
  }

  // ============================================================================
  // Private Methods - Data Initialization
  // ============================================================================
  private initializeCertifications(): void {
    this.certificationCategories = [
      {
        titleKey: 'certifications.category.projectManagement',
        certifications: [
          {
            nameKey: 'certifications.name.projectManagement',
            issuerKey: 'certifications.issuer.pmi',
            date: '2025-03',
            descriptionKey: 'certifications.description.projectManagement',
            logo: 'assets/logos/pmi.png'
          },
          {
            nameKey: 'certifications.name.agileFoundations',
            issuerKey: 'certifications.issuer.pmi',
            date: '2024-11',
            descriptionKey: 'certifications.description.agileFoundations',
            logo: 'assets/logos/pmi.png'
          },
          {
            nameKey: 'certifications.name.agileSoftwareDevelopment',
            issuerKey: 'certifications.issuer.pmi',
            date: '2024-12',
            logo: 'assets/logos/pmi.png'
          },
          {
            nameKey: 'certifications.name.designThinking',
            issuerKey: 'certifications.issuer.pmi',
            date: '2024-12',
            descriptionKey: 'certifications.description.designThinking',
            logo: 'assets/logos/pmi.png'
          }
        ]
      },
      {
        titleKey: 'certifications.category.softwareEngineering',
        certifications: [
          {
            nameKey: 'certifications.name.softwareDesign',
            issuerKey: 'certifications.issuer.qaa',
            date: '2024-12',
            logo: 'assets/logos/qaa.jpg'
          },
          {
            nameKey: 'certifications.name.pythonOOP',
            issuerKey: 'certifications.issuer.linkedin',
            date: '2024-10',
            logo: 'assets/logos/linkedin.png'
          },
          {
            nameKey: 'certifications.name.advancedSQL',
            issuerKey: 'certifications.issuer.linkedin',
            date: '2024-08',
            logo: 'assets/logos/linkedin.png'
          },
          {
            nameKey: 'certifications.name.sqlProgramming',
            issuerKey: 'certifications.issuer.qaa',
            date: '2024-08',
            logo: 'assets/logos/qaa.jpg'
          }
        ]
      },
      {
        titleKey: 'certifications.category.cloudSecurity',
        certifications: [
          {
            nameKey: 'certifications.name.cloudComputing',
            issuerKey: 'certifications.issuer.comptia',
            date: '2024-12',
            descriptionKey: 'certifications.description.cloudComputing',
            logo: 'assets/logos/comptia.png'
          },
          {
            nameKey: 'certifications.name.cybersecurityFoundations',
            issuerKey: 'certifications.issuer.pmi',
            date: '2024-12',
            logo: 'assets/logos/pmi.png'
          },
          {
            nameKey: 'certifications.name.securityTesting',
            issuerKey: 'certifications.issuer.linkedin',
            date: '2024-09',
            logo: 'assets/logos/linkedin.png'
          },
          {
            nameKey: 'certifications.name.itRiskManagement',
            issuerKey: 'certifications.issuer.iiba',
            date: '2024-10',
            descriptionKey: 'certifications.description.itRiskManagement',
            logo: 'assets/logos/iiba.png'
          }
        ]
      },
      {
        titleKey: 'certifications.category.strategy',
        certifications: [
          {
            nameKey: 'certifications.name.itStrategy',
            issuerKey: 'certifications.issuer.qaa',
            date: '2024-12',
            descriptionKey: 'certifications.description.itStrategy',
            logo: 'assets/logos/qaa.jpg'
          }
        ]
      },
      {
        titleKey: 'certifications.category.leadership',
        certifications: [
          {
            nameKey: 'certifications.name.leadershipCertificate',
            issuerKey: 'certifications.issuer.scouts',
            date: '2021-06',
            logo: 'assets/logos/scout.png'
          },
          {
            nameKey: 'certifications.name.firstAid',
            issuerKey: 'certifications.issuer.redCrescent',
            date: '2021-01',
            logo: 'assets/logos/crt.jpg'
          },
          {
            nameKey: 'certifications.name.familyLinks',
            issuerKey: 'certifications.issuer.icrc',
            date: '2020-12',
            descriptionKey: 'certifications.description.familyLinks',
            logo: 'assets/logos/cicr.JPG'
          }
        ]
      }
    ] as const;
  }
}
