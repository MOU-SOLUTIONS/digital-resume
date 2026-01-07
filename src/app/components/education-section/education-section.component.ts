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
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';
import { IconComponent } from '../../shared/components/icon/icon.component';

// ============================================================================
// Interfaces
// ============================================================================
interface EducationItem {
  readonly id: number;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isPresent: boolean;
  readonly description?: string;
  readonly gpa?: string;
  readonly relevantCourses?: readonly string[];
  formattedStartDate: string;
  formattedEndDate: string;
  flipped: boolean;
}

interface StructuredDataItem {
  readonly '@type': string;
  readonly credentialCategory?: string;
  readonly educationalLevel?: string;
  readonly name: string;
  readonly description: string;
  readonly recognizedBy?: {
    readonly '@type': string;
    readonly name: string;
    readonly address?: {
      readonly '@type': string;
      readonly addressLocality: string;
    };
  };
  readonly dateCreated: string;
  readonly dateModified?: string;
  readonly about?: readonly {
    readonly '@type': string;
    readonly name: string;
  }[];
}

interface StructuredData {
  readonly '@context': string;
  readonly '@type': string;
  readonly name: string;
  readonly description: string;
  readonly numberOfItems: number;
  readonly url: string;
  readonly itemListElement: readonly {
    readonly '@type': string;
    readonly position: number;
    readonly item: StructuredDataItem;
  }[];
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  education: EducationItem[] = [];
  currentLanguage = 'en';
  private readonly destroy$ = new Subject<void>();

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    private readonly languageService: LanguageService,
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
    this.initializeEducationData();
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
  // Public Methods - Translation
  // ============================================================================
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  getTranslatedDegree(degree: string): string {
    if (degree.includes('Bachelor')) {
      return this.getTranslation('education.bachelorDegree');
    } else if (degree.includes('Master')) {
      return this.getTranslation('education.masterDegree');
    }
    return degree;
  }

  getTranslatedInstitution(institution: string): string {
    if (institution.includes('Atlantis')) {
      return this.getTranslation('education.atlantisUniversity');
    } else if (institution.includes('Higher Institute')) {
      return this.getTranslation('education.istic');
    }
    return institution;
  }

  getTranslatedLocation(location: string): string {
    if (location.includes('Miami')) {
      return this.getTranslation('education.miami');
    } else if (location.includes('Tunis')) {
      return this.getTranslation('education.tunis');
    }
    return location;
  }

  getTranslatedDescription(description: string): string {
    if (description.includes('architecting safe, scalable cloud')) {
      return this.getTranslation('education.description.master');
    } else if (description.includes('hands-on experience delivering end-to-end')) {
      return this.getTranslation('education.description.bachelor');
    }
    return description;
  }

  getTranslatedCourse(course: string): string {
    if (course.includes('Network Architecture')) {
      return this.getTranslation('education.course.networkArchitecture');
    } else if (course.includes('Cloud Infrastructure')) {
      return this.getTranslation('education.course.cloudInfrastructure');
    } else if (course.includes('Security Engineering')) {
      return this.getTranslation('education.course.securityEngineering');
    } else if (course.includes('System Architecture')) {
      return this.getTranslation('education.course.systemArchitecture');
    } else if (course.includes('Virtualization')) {
      return this.getTranslation('education.course.virtualization');
    } else if (course.includes('Emerging Technologies')) {
      return this.getTranslation('education.course.emergingTechnologies');
    } else if (course.includes('Data Structures')) {
      return this.getTranslation('education.course.dataStructures');
    } else if (course.includes('Advanced Web Development')) {
      return this.getTranslation('education.course.webDevelopment');
    } else if (course.includes('Software Quality Assurance')) {
      return this.getTranslation('education.course.softwareQuality');
    } else if (course.includes('Cloud Computing Fundamentals')) {
      return this.getTranslation('education.course.cloudComputing');
    } else if (course.includes('DevOps & CI/CD')) {
      return this.getTranslation('education.course.devops');
    }
    return course;
  }

  // ============================================================================
  // Public Methods - UI Interaction
  // ============================================================================
  toggleCardFlip(index: number): void {
    if (index >= 0 && index < this.education.length) {
      this.education[index].flipped = !this.education[index].flipped;
      this.cdr.markForCheck();
    }
  }

  getAriaExpanded(index: number): string {
    if (index >= 0 && index < this.education.length) {
      return this.education[index].flipped ? 'true' : 'false';
    }
    return 'false';
  }

  getAriaLabel(index: number): string {
    if (index >= 0 && index < this.education.length) {
      const item = this.education[index];
      return `${this.getTranslatedDegree(item.degree)} at ${this.getTranslatedInstitution(item.institution)} - ${this.getTranslation('education.title')}`;
    }
    return '';
  }

  // ============================================================================
  // Public Methods - Performance
  // ============================================================================
  trackByEducation(_index: number, item: EducationItem): number {
    return item.id;
  }

  trackByCourse(_index: number, course: string): string {
    return course;
  }

  // ============================================================================
  // Private Methods - Data Initialization
  // ============================================================================
  private initializeEducationData(): void {
    this.education = RESUME_DATA.education.map(edu => ({
      ...edu,
      formattedStartDate: this.formatDate(edu.startDate),
      formattedEndDate: edu.isPresent ? '' : this.formatDate(edu.endDate),
      flipped: false
    }));
  }

  // ============================================================================
  // Private Methods - Language Management
  // ============================================================================
  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lang => {
        this.currentLanguage = lang;
        this.updateFormattedDates();
        this.updateSEOMetaTags();
        if (isPlatformBrowser(this.platformId)) {
          this.injectStructuredData();
        }
        this.cdr.markForCheck();
      });
  }

  // ============================================================================
  // Private Methods - Date Formatting
  // ============================================================================
  private updateFormattedDates(): void {
    this.education = this.education.map(edu => ({
      ...edu,
      formattedStartDate: this.formatDate(edu.startDate),
      formattedEndDate: edu.isPresent ? '' : this.formatDate(edu.endDate)
    }));
  }

  private formatDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '';
    }
    const locale = this.getDateLocale();
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short'
    });
  }

  private getDateLocale(): string {
    switch (this.currentLanguage) {
      case 'fr':
        return 'fr-FR';
      case 'ar':
        return 'ar-SA';
      case 'es':
        return 'es-ES';
      default:
        return 'en-US';
    }
  }

  // ============================================================================
  // Private Methods - SEO
  // ============================================================================
  private updateSEOMetaTags(): void {
    const titleText = this.sanitizeText(this.languageService.getTranslation('education.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const safeTitle = `${titleText} - ${name} | Digital Resume`;
    const description = this.generateDescription();
    const safeDescription = description || `${titleText} - ${name}`;

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
    const degrees = this.education.map(edu => this.getTranslatedDegree(edu.degree)).join(', ');
    const institutions = this.education.map(edu => this.getTranslatedInstitution(edu.institution)).join(', ');
    return `${this.sanitizeText(this.languageService.getTranslation('education.title'))}: ${degrees} from ${institutions}`;
  }

  private generateKeywords(): string {
    const degrees = this.education.map(edu => this.sanitizeText(this.getTranslatedDegree(edu.degree)));
    const institutions = this.education.map(edu => this.sanitizeText(this.getTranslatedInstitution(edu.institution)));
    const courses = this.education.flatMap(edu =>
      (edu.relevantCourses || []).map(course => this.sanitizeText(this.getTranslatedCourse(course)))
    );
    const allKeywords = [
      this.sanitizeText(this.languageService.getTranslation('education.title')),
      ...degrees,
      ...institutions,
      ...courses
    ].filter(s => s.length > 0);
    return allKeywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const titleText = this.sanitizeText(this.languageService.getTranslation('education.title'));
    const currentUrl = window.location.href;

    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: titleText,
      description: this.generateDescription(),
      numberOfItems: this.education.length,
      url: currentUrl,
      itemListElement: this.education.map((edu, index) => {
        const item: StructuredDataItem = {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          educationalLevel: this.getDegreeLevel(edu.degree),
          name: this.sanitizeText(this.getTranslatedDegree(edu.degree)),
          description: this.sanitizeText(this.getTranslatedDescription(edu.description || '')),
          recognizedBy: {
            '@type': 'EducationalOrganization',
            name: this.sanitizeText(this.getTranslatedInstitution(edu.institution)),
            address: {
              '@type': 'PostalAddress',
              addressLocality: this.sanitizeText(this.getTranslatedLocation(edu.location))
            }
          },
          dateCreated: edu.startDate
        };

        if (!edu.isPresent && edu.endDate) {
          (item as StructuredDataItem & { dateModified: string }).dateModified = edu.endDate;
        }

        if (edu.relevantCourses && edu.relevantCourses.length > 0) {
          (item as StructuredDataItem & {
            about: readonly { readonly '@type': string; readonly name: string }[];
          }).about = edu.relevantCourses.map(course => ({
            '@type': 'Thing',
            name: this.sanitizeText(this.getTranslatedCourse(course))
          }));
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
    this.renderer.setAttribute(script, 'data-education-section', 'true');
    this.renderer.setAttribute(script, 'id', 'education-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-education-section]');
    if (existingScript && existingScript.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  private sanitizeText(text: string): string {
    if (!text) {
      return '';
    }
    return text.replace(/[<>]/g, '').trim() || '';
  }

  private getDegreeLevel(degree: string): string {
    if (degree.includes('Master')) {
      return 'Graduate';
    } else if (degree.includes('Bachelor')) {
      return 'Undergraduate';
    }
    return 'Professional';
  }
}
