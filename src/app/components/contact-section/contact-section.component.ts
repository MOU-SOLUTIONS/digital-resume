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
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';

// ============================================================================
// Interfaces
// ============================================================================
interface LocationParts {
  readonly city: string;
  readonly region: string;
  readonly country: string;
}

interface StructuredDataAddress {
  readonly '@type': string;
  readonly addressLocality: string;
  readonly addressRegion: string;
  readonly addressCountry: string;
}

interface StructuredDataMainEntity {
  readonly '@type': string;
  readonly name: string;
  readonly email: string;
  readonly telephone: string;
  readonly address: StructuredDataAddress;
}

interface StructuredDataContactPoint {
  readonly '@type': string;
  readonly contactType: string;
  readonly email: string;
  readonly telephone: string;
  readonly areaServed: StructuredDataAddress;
}

interface StructuredData {
  readonly '@context': string;
  readonly '@type': string;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly mainEntity: StructuredDataMainEntity;
  readonly contactPoint: StructuredDataContactPoint;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly contactInfo = RESUME_DATA.personal.contact;

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
  // Public Methods - Accessibility
  // ============================================================================
  getEmailAriaLabel(): string {
    return `${this.languageService.getTranslation('contact.email')}: ${this.contactInfo.email}`;
  }

  getPhoneAriaLabel(): string {
    return `${this.languageService.getTranslation('contact.phone')}: ${this.contactInfo.phone}`;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('contact.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const safeTitle = `${titleText} - ${name} | Digital Resume`;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('contact.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const description = this.sanitizeText(this.languageService.getTranslation('contact.description'));
    return `${titleText} - ${name}. ${description}`;
  }

  private generateKeywords(): string {
    const keywords = [
      this.sanitizeText(this.languageService.getTranslation('contact.title')),
      this.sanitizeText(this.languageService.getTranslation('contact.email')),
      this.sanitizeText(this.languageService.getTranslation('contact.phone')),
      this.sanitizeText(this.languageService.getTranslation('contact.location')),
      this.contactInfo.email,
      this.contactInfo.phone,
      this.contactInfo.location
    ].filter(s => s.length > 0);
    return keywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined' || !window.location || typeof document === 'undefined') {
      return;
    }

    const currentUrl = window.location.href;
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const locationParts = this.parseLocation(this.contactInfo.location);
    const address: StructuredDataAddress = {
      '@type': 'PostalAddress',
      addressLocality: locationParts.city || this.contactInfo.location,
      addressRegion: locationParts.region || '',
      addressCountry: locationParts.country || 'USA'
    };

    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: this.sanitizeText(this.languageService.getTranslation('contact.title')),
      description: this.generateDescription(),
      url: currentUrl,
      mainEntity: {
        '@type': 'Person',
        name: name,
        email: this.contactInfo.email,
        telephone: this.contactInfo.phone,
        address: address
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional',
        email: this.contactInfo.email,
        telephone: this.contactInfo.phone,
        areaServed: {
          '@type': 'City',
          addressLocality: locationParts.city || this.contactInfo.location,
          addressRegion: locationParts.region || '',
          addressCountry: locationParts.country || 'USA'
        }
      }
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-contact-section', 'true');
    this.renderer.setAttribute(script, 'id', 'contact-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId) || typeof document === 'undefined') {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-contact-section]');
    if (existingScript?.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  // ============================================================================
  // Private Methods - Helpers
  // ============================================================================
  private parseLocation(location: string): LocationParts {
    if (!location || typeof location !== 'string') {
      return { city: '', region: '', country: '' };
    }
    const parts = location.split(',').map(p => p.trim());
    if (parts.length >= 3) {
      return {
        city: parts[0] || '',
        region: parts[1] || '',
        country: parts[2] || ''
      };
    } else if (parts.length === 2) {
      return {
        city: parts[0] || '',
        region: parts[1] || '',
        country: 'USA'
      };
    }
    return {
      city: location,
      region: '',
      country: 'USA'
    };
  }

  private sanitizeText(text: string): string {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.replace(/[<>]/g, '').trim() || '';
  }
}
