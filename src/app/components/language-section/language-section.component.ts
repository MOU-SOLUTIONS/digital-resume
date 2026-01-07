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

// ============================================================================
// Interfaces
// ============================================================================
interface LanguageItem {
  readonly id: number;
  readonly nameKey: string;
  readonly code: string;
  readonly proficiency: string;
  readonly level: number;
  readonly icon: string;
  readonly flag?: string;
}

interface StructuredDataItem {
  readonly '@type': string;
  readonly position: number;
  readonly item: {
    readonly '@type': string;
    readonly name: string;
    readonly alternateName: string;
    readonly proficiencyLevel: string;
    readonly skillLevel: number;
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

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-language-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-section.component.html',
  styleUrl: './language-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly languages: readonly LanguageItem[] = this.getLanguages();

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
  // Public Methods - Performance & Display
  // ============================================================================
  trackByLanguage(_index: number, item: LanguageItem): number {
    return item.id;
  }

  getLanguageName(language: LanguageItem): string {
    return this.languageService.getTranslation(language.nameKey);
  }

  getLanguageAriaLabel(language: LanguageItem): string {
    return `${this.getLanguageName(language)} - ${this.languageService.getTranslation(`languages.proficiency.${language.proficiency}`)}`;
  }

  getFlagAlt(language: LanguageItem): string {
    return `${this.getLanguageName(language)} flag`;
  }

  // ============================================================================
  // Public Methods - Image Handling
  // ============================================================================
  onFlagError(event: Event, language: LanguageItem): void {
    if (!isPlatformBrowser(this.platformId) || typeof document === 'undefined') {
      return;
    }
    const img = event.target as HTMLImageElement;
    if (!img) {
      return;
    }
    this.renderer.setStyle(img, 'display', 'none');
    const iconContainer = img.closest('.language-icon') as HTMLElement;
    if (iconContainer) {
      const fallback = this.renderer.createElement('span');
      this.renderer.setStyle(fallback, 'display', 'flex');
      this.renderer.setStyle(fallback, 'align-items', 'center');
      this.renderer.setStyle(fallback, 'justify-content', 'center');
      this.renderer.setStyle(fallback, 'font-size', '2rem');
      this.renderer.setProperty(fallback, 'textContent', language.icon);
      this.renderer.setAttribute(fallback, 'class', 'language-emoji');
      this.renderer.setAttribute(fallback, 'aria-hidden', 'true');
      this.renderer.appendChild(iconContainer, fallback);
    }
  }

  // ============================================================================
  // Private Methods - Data Initialization
  // ============================================================================
  private getLanguages(): readonly LanguageItem[] {
    return [
      {
        id: 1,
        nameKey: 'languages.name.tunisian',
        code: 'tn',
        proficiency: 'native',
        level: 100,
        icon: '🇹🇳',
        flag: 'assets/flags/tunisia-flag.png'
      },
      {
        id: 2,
        nameKey: 'languages.name.arabic',
        code: 'ar',
        proficiency: 'native',
        level: 100,
        icon: '🇹🇳',
        flag: 'assets/flags/arabic-flag.png'
      },
      {
        id: 3,
        nameKey: 'languages.name.english',
        code: 'en',
        proficiency: 'fluent',
        level: 80,
        icon: '🇬🇧',
        flag: 'assets/flags/english-flag.png'
      },
      {
        id: 4,
        nameKey: 'languages.name.french',
        code: 'fr',
        proficiency: 'intermediate',
        level: 70,
        icon: '🇫🇷',
        flag: 'assets/flags/france-flag.png'
      },
      {
        id: 5,
        nameKey: 'languages.name.spanish',
        code: 'es',
        proficiency: 'beginner',
        level: 30,
        icon: '🇪🇸',
        flag: 'assets/flags/spanish-flag.png'
      }
    ] as const;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('languages.title'));
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('languages.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    return `${titleText} - ${name}. ${this.sanitizeText(this.languageService.getTranslation('languages.subtitle'))}`;
  }

  private generateKeywords(): string {
    const keywords = [
      this.sanitizeText(this.languageService.getTranslation('languages.title')),
      ...this.languages.map(lang => this.sanitizeText(this.languageService.getTranslation(lang.nameKey)))
    ].filter(s => s.length > 0);
    return keywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    if (!isPlatformBrowser(this.platformId) || typeof window === 'undefined' || !window.location || typeof document === 'undefined') {
      return;
    }

    const currentUrl = window.location.href;

    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.sanitizeText(this.languageService.getTranslation('languages.title')),
      description: this.generateDescription(),
      numberOfItems: this.languages.length,
      url: currentUrl,
      itemListElement: this.languages.map((lang, index): StructuredDataItem => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Language',
          name: this.sanitizeText(this.languageService.getTranslation(lang.nameKey)),
          alternateName: lang.code,
          proficiencyLevel: this.sanitizeText(this.languageService.getTranslation(`languages.proficiency.${lang.proficiency}`)),
          skillLevel: lang.level
        }
      }))
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-language-section', 'true');
    this.renderer.setAttribute(script, 'id', 'language-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId) || typeof document === 'undefined') {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-language-section]');
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
}
