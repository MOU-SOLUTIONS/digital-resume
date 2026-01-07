/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSectionComponent implements OnInit {
  
  // ============================================================================
  // Properties
  // ============================================================================
  readonly personalInfo = RESUME_DATA.personal;

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    public readonly languageService: LanguageService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef,
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
  }

  // ============================================================================
  // SEO Methods
  // ============================================================================
  private updateSEOMetaTags(): void {
    const name = this.languageService.getTranslation('home.name');
    const title = this.languageService.getTranslation('home.title');
    const description = this.languageService.getTranslation('home.description');
    
    this.title.setTitle(`${name} - ${title} | Digital Resume`);
    
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: name });
    this.meta.updateTag({ property: 'og:title', content: `${name} - ${title}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: this.personalInfo.avatar });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: `${name} - ${title}` });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: this.personalInfo.avatar });
  }

  private injectStructuredData(): void {
    const name = this.languageService.getTranslation('home.name');
    const title = this.languageService.getTranslation('home.title');
    const description = this.languageService.getTranslation('home.description');
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: name,
      jobTitle: title,
      description: description,
      image: this.personalInfo.avatar,
      url: window.location.href,
      sameAs: [
        this.personalInfo.contact.linkedin,
        this.personalInfo.contact.github,
        this.personalInfo.contact.twitter
      ].filter(Boolean)
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  // ============================================================================
  // Navigation Methods
  // ============================================================================
  scrollToSection(section: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ============================================================================
  // Action Methods
  // ============================================================================
  downloadResume(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  }

  // ============================================================================
  // Image Handling Methods
  // ============================================================================
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img || !img.parentElement) return;
    
    this.renderer.setStyle(img, 'display', 'none');
    const placeholder = img.parentElement;
    const existingFallback = placeholder.querySelector('.avatar-text');
    
    if (!existingFallback) {
      const fallback = this.renderer.createElement('span');
      this.renderer.addClass(fallback, 'avatar-text');
      const name = this.languageService.getTranslation('home.name');
      this.renderer.setProperty(fallback, 'textContent', name.charAt(0));
      this.renderer.appendChild(placeholder, fallback);
    }
  }
}
