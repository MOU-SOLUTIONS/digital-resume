/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';
import { Experience } from '../../models/resume-data';

// ============================================================================
// Interfaces
// ============================================================================
interface StructuredDataItem {
  '@type': string;
  roleName: string;
  worksFor: {
    '@type': string;
    name: string;
  };
  startDate: string;
  endDate?: string;
  jobLocation?: {
    '@type': string;
    name: string;
  };
  skills?: string[];
}

interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  numberOfItems?: number;
  itemListElement: Array<{
    '@type': string;
    position: number;
    item: StructuredDataItem;
  }>;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly experience: readonly Experience[] = RESUME_DATA.experience;
  readonly personalInfo = RESUME_DATA.personal;
  currentLanguage = 'en';
  expandedCards = new Set<number>();

  private readonly companyWebsites: ReadonlyMap<string, string> = new Map([
    ['Centre Sectoriel de Formation et Techniques Appliquées en Cuir', 'http://www.atfp.tn/'],
    ['ADDIXO Group', 'https://www.addixo.com/'],
    ['Poly-Tel Ltd', 'https://poly-tel.com/']
  ]);

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
  // Public Methods - Performance
  // ============================================================================
  trackByIndex(index: number): number {
    return index;
  }

  // ============================================================================
  // Public Methods - Card Expansion
  // ============================================================================
  toggleCard(index: number): void {
    if (this.expandedCards.has(index)) {
      this.expandedCards.delete(index);
    } else {
      this.expandedCards.add(index);
    }
    this.cdr.markForCheck();
  }

  isExpanded(index: number): boolean {
    return this.expandedCards.has(index);
  }

  // ============================================================================
  // Public Methods - Image Error Handling
  // ============================================================================
  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }

  // ============================================================================
  // Public Methods - Date Formatting
  // ============================================================================
  formatDate(dateString: string): string {
    if (!dateString || typeof dateString !== 'string') {
      return '';
    }

    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);

      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return dateString;
      }

      const date = new Date(year, month, day);
      const locale = this.getDateLocale();
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }

    if (parts.length === 2) {
      const date = new Date(dateString + '-01');
      if (isNaN(date.getTime())) {
        return dateString;
      }
      const locale = this.getDateLocale();
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short'
      });
    }

    return dateString;
  }

  // ============================================================================
  // Public Methods - Company Website
  // ============================================================================
  getCompanyWebsite(company: string): string | null {
    return this.companyWebsites.get(company) || null;
  }

  hasCompanyWebsite(company: string): boolean {
    return this.companyWebsites.has(company);
  }

  getVisitWebsiteText(): string {
    return this.languageService.getTranslation('experience.visitWebsite');
  }

  getDateSeparator(): string {
    return this.languageService.getTranslation('experience.dateSeparator');
  }

  getColon(): string {
    return this.languageService.getTranslation('experience.colon');
  }

  getCommaSeparator(): string {
    return this.languageService.getTranslation('experience.commaSeparator');
  }

  getTranslatedPosition(position: string): string {
    if (position.includes('Full-Stack Developer')) {
      return this.languageService.getTranslation('experience.position.fullStackDeveloper');
    } else if (position.includes('Web Developer')) {
      return this.languageService.getTranslation('experience.position.webDeveloper');
    } else if (position.includes('Software Engineering Intern')) {
      return this.languageService.getTranslation('experience.position.softwareEngineeringIntern');
    } else if (position.includes('Software Development Intern')) {
      return this.languageService.getTranslation('experience.position.softwareDevelopmentIntern');
    }
    return position;
  }

  getTranslatedCompany(company: string): string {
    if (company.includes('AuraX Solutions')) {
      return this.languageService.getTranslation('experience.company.auraxSolutions');
    } else if (company.includes('Poly-Tel Ltd')) {
      return this.languageService.getTranslation('experience.company.polyTelLtd');
    } else if (company.includes('ADDIXO Group')) {
      return this.languageService.getTranslation('experience.company.addixoGroup');
    } else if (company.includes('Centre Sectoriel')) {
      return this.languageService.getTranslation('experience.company.centreSectoriel');
    }
    return company;
  }

  getTranslatedLocation(location: string): string {
    if (location === 'USA') {
      return this.languageService.getTranslation('experience.location.usa');
    } else if (location === 'UK') {
      return this.languageService.getTranslation('experience.location.uk');
    } else if (location === 'France') {
      return this.languageService.getTranslation('experience.location.france');
    } else if (location === 'Tunisia') {
      return this.languageService.getTranslation('experience.location.tunisia');
    }
    return location;
  }

  getTranslatedDescription(description: string, company: string): string {
    if (company.includes('AuraX')) {
      if (description.includes('Working as a Full-Stack Developer delivering solutions')) {
        return this.languageService.getTranslation('experience.description.aurax.1');
      } else if (description.includes('Designing, developing, and maintaining web applications')) {
        return this.languageService.getTranslation('experience.description.aurax.2');
      } else if (description.includes('Contributing across the full stack')) {
        return this.languageService.getTranslation('experience.description.aurax.3');
      } else if (description.includes('Actively involved in troubleshooting')) {
        return this.languageService.getTranslation('experience.description.aurax.4');
      } else if (description.includes('Operating in a fast-paced environment')) {
        return this.languageService.getTranslation('experience.description.aurax.5');
      }
    } else if (company.includes('Poly-Tel')) {
      if (description.includes('Contributed to the development and enhancement of Smart Roaster')) {
        return this.languageService.getTranslation('experience.description.polytel.1');
      } else if (description.includes('Worked on features related to site access control')) {
        return this.languageService.getTranslation('experience.description.polytel.2');
      } else if (description.includes('Implemented new functionalities and improved existing modules')) {
        return this.languageService.getTranslation('experience.description.polytel.3');
      } else if (description.includes('Collaborated on a production system handling real-world')) {
        return this.languageService.getTranslation('experience.description.polytel.4');
      } else if (description.includes('Participated in maintaining and evolving a platform')) {
        return this.languageService.getTranslation('experience.description.polytel.5');
      }
    } else if (company.includes('ADDIXO')) {
      if (description.includes('Contributed to ADDIXO Smart Factory')) {
        return this.languageService.getTranslation('experience.description.addixo.1');
      } else if (description.includes('Worked on systems that aggregate real-time shop floor data')) {
        return this.languageService.getTranslation('experience.description.addixo.2');
      } else if (description.includes('Designed and implemented a new E-Kanban module')) {
        return this.languageService.getTranslation('experience.description.addixo.3');
      } else if (description.includes('Helped integrate production stakeholders')) {
        return this.languageService.getTranslation('experience.description.addixo.4');
      } else if (description.includes('Gained hands-on experience with industrial-scale')) {
        return this.languageService.getTranslation('experience.description.addixo.5');
      }
    } else if (company.includes('Centre Sectoriel')) {
      if (description.includes('Designed and developed a desktop-based management application')) {
        return this.languageService.getTranslation('experience.description.atfp.1');
      } else if (description.includes('Centralized intern records')) {
        return this.languageService.getTranslation('experience.description.atfp.2');
      } else if (description.includes('Implemented the application using HTML, CSS, JavaScript')) {
        return this.languageService.getTranslation('experience.description.atfp.3');
      } else if (description.includes('Delivered an end-to-end solution used internally')) {
        return this.languageService.getTranslation('experience.description.atfp.4');
      }
    }
    return description;
  }

  getTranslatedTechnology(tech: string): string {
    const techMap: Record<string, string> = {
      'Full-Stack Development': 'experience.technology.fullStackDevelopment',
      'System Fixes': 'experience.technology.systemFixes',
      'Performance Optimization': 'experience.technology.performanceOptimization',
      'Client Solutions': 'experience.technology.clientSolutions',
      'Site Monitoring Systems': 'experience.technology.siteMonitoringSystems',
      'Access Control': 'experience.technology.accessControl',
      'CCTV': 'experience.technology.cctv',
      'Workforce Management': 'experience.technology.workforceManagement',
      'MES/MOM': 'experience.technology.mesMom',
      'Smart Factory': 'experience.technology.smartFactory',
      'Lean Manufacturing': 'experience.technology.leanManufacturing',
      'Angular': 'experience.technology.angular',
      'Spring Boot': 'experience.technology.springBoot',
      'HTML': 'experience.technology.html',
      'CSS': 'experience.technology.css',
      'JavaScript': 'experience.technology.javascript',
      'PHP': 'experience.technology.php'
    };

    const translationKey = techMap[tech];
    if (translationKey) {
      return this.languageService.getTranslation(translationKey);
    }
    return tech;
  }

  // ============================================================================
  // Private Methods - Subscriptions
  // ============================================================================
  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lang => {
        this.currentLanguage = lang;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('experience.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const digitalResume = this.sanitizeText(this.languageService.getTranslation('experience.digitalResume'));
    const titleSep = this.languageService.getTranslation('experience.titleSeparator');
    const pipeSep = this.languageService.getTranslation('experience.pipeSeparator');
    const safeTitle = `${titleText}${titleSep}${name}${pipeSep}${digitalResume}`;
    const safeDescription = this.generateDescription();

    this.title.setTitle(safeTitle);
    this.meta.updateTag({ name: 'description', content: safeDescription });
    this.meta.updateTag({ name: 'keywords', content: this.generateKeywords() });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
    this.meta.updateTag({ property: 'og:title', content: safeTitle });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:description', content: safeDescription });
    if (this.personalInfo.avatar) {
      this.meta.updateTag({ property: 'og:image', content: this.personalInfo.avatar });
    }
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: safeTitle });
    this.meta.updateTag({ name: 'twitter:description', content: safeDescription });
    if (this.personalInfo.avatar) {
      this.meta.updateTag({ name: 'twitter:image', content: this.personalInfo.avatar });
    }
  }

  private generateDescription(): string {
    const titleText = this.sanitizeText(this.languageService.getTranslation('experience.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const experienceCount = this.experience.length;
    const companies = Array.from(new Set(this.experience.map(exp => exp.company)));
    
    if (experienceCount > 0) {
      const positionText = experienceCount === 1 
        ? this.languageService.getTranslation('experience.position')
        : this.languageService.getTranslation('experience.positions');
      const companyText = companies.length === 1 
        ? this.languageService.getTranslation('experience.company')
        : this.languageService.getTranslation('experience.companies');
      const commaSep = this.getCommaSeparator();
      const companyList = companies.slice(0, 3).join(commaSep);
      const moreText = companies.length > 3 
        ? this.languageService.getTranslation('experience.andMore')
        : '';
      const professionalExp = this.languageService.getTranslation('experience.professionalExperience');
      const colon = this.getColon();
      const titleSep = this.languageService.getTranslation('experience.titleSeparator');
      return `${titleText}${titleSep}${name}. ${professionalExp} ${experienceCount} ${positionText} ${this.getAtText()} ${companies.length} ${companyText}${colon}${companyList}${moreText}.`;
    }
    const titleSep = this.languageService.getTranslation('experience.titleSeparator');
    return `${titleText}${titleSep}${name}`;
  }

  private getAtText(): string {
    const lang = this.currentLanguage;
    if (lang === 'fr') return 'à';
    if (lang === 'es') return 'en';
    if (lang === 'ar') return 'في';
    return 'at';
  }

  private getDateLocale(): string {
    switch (this.currentLanguage) {
      case 'fr': return 'fr-FR';
      case 'es': return 'es-ES';
      case 'ar': return 'ar-SA';
      default: return 'en-US';
    }
  }

  private generateKeywords(): string {
    const keywords: string[] = [];
    
    keywords.push(this.sanitizeText(this.languageService.getTranslation('experience.title')));
    
    this.experience.forEach(exp => {
      keywords.push(this.sanitizeText(this.getTranslatedPosition(exp.position)));
      keywords.push(this.sanitizeText(this.getTranslatedCompany(exp.company)));
      if (exp.location) {
        keywords.push(this.sanitizeText(this.getTranslatedLocation(exp.location)));
      }
      if (exp.technologies) {
        exp.technologies.forEach(tech => {
          keywords.push(this.sanitizeText(this.getTranslatedTechnology(tech)));
        });
      }
    });
    
    const uniqueKeywords = Array.from(new Set(keywords))
      .filter(k => k.length > 0)
      .slice(0, 30);
    
    const commaSep = this.getCommaSeparator();
    return uniqueKeywords.join(commaSep);
  }

  private sanitizeText(text: string): string {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.replace(/[<>]/g, '').trim() || '';
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    const titleText = this.sanitizeText(this.languageService.getTranslation('experience.title'));
    const description = this.generateDescription();

    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: titleText,
      description: description,
      numberOfItems: this.experience.length,
      itemListElement: this.experience.map((exp, index) => {
        const item: StructuredDataItem = {
          '@type': 'OrganizationRole',
          roleName: this.sanitizeText(this.getTranslatedPosition(exp.position)),
          worksFor: {
            '@type': 'Organization',
            name: this.sanitizeText(this.getTranslatedCompany(exp.company))
          },
          startDate: exp.startDate
        };

        if (!exp.isPresent && exp.endDate) {
          item.endDate = exp.endDate;
        }

        if (exp.location) {
          item.jobLocation = {
            '@type': 'Place',
            name: this.sanitizeText(this.getTranslatedLocation(exp.location))
          };
        }

        if (exp.technologies && exp.technologies.length > 0) {
          item.skills = exp.technologies.map(tech => this.sanitizeText(this.getTranslatedTechnology(tech)));
        }

        return {
          '@type': 'ListItem',
          position: index + 1,
          item: item
        };
      })
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-experience-section', 'true');
    this.renderer.setAttribute(script, 'id', 'experience-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-experience-section]');
    if (existingScript && existingScript.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }
}
