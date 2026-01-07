/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly userImage = 'assets/Images/user-2.JPG';
  readonly personalInfo = RESUME_DATA.personal;
  
  get subtitleParts(): string[] {
    const subtitle = this.languageService.getTranslation('about.subtitle');
    return subtitle.split(' | ').filter(part => part.trim().length > 0);
  }

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    public readonly languageService: LanguageService,
    private readonly cdr: ChangeDetectorRef,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  ngOnInit(): void {
    this.updateSEOMetaTags();
    if (isPlatformBrowser(this.platformId)) {
      this.injectStructuredData();
    }
    this.subscribeToLanguageChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ============================================================================
  // Public Methods - Performance
  // ============================================================================
  trackByIndex(index: number): number {
    return index;
  }
  
  // ============================================================================
  // Public Methods - Image Handling
  // ============================================================================
  onImageError(event: Event): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const img = event.target as HTMLImageElement;
    if (img && this.renderer) {
      this.renderer.setAttribute(img, 'src', 'assets/Images/User.png');
    }
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
    const titleText = this.languageService.getTranslation('about.title');
    const description = this.languageService.getTranslation('about.description');
    const name = this.languageService.getTranslation('home.name');
    
    this.title.setTitle(`${titleText} - ${name} | Digital Resume`);
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: `${titleText} - ${name}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: `${titleText} - ${name}` });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private injectStructuredData(): void {
    const existingScript = document.querySelector('script[type="application/ld+json"][data-about-section]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.languageService.getTranslation('home.name'),
      jobTitle: this.languageService.getTranslation('home.title'),
      description: this.languageService.getTranslation('about.description'),
      image: this.personalInfo.avatar,
      knowsAbout: [
        'Full Stack Development',
        'Angular',
        'Spring Boot',
        'Leadership',
        'Problem Solving'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-about-section', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
