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
interface SkillCategory {
  readonly name: string;
  readonly icon: string;
  readonly skillKeys: readonly string[];
  readonly highlight?: boolean;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-hard-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hard-skills-section.html',
  styleUrl: './hard-skills-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HardSkillsSectionComponent implements OnInit, OnDestroy {
  
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly skills: readonly SkillCategory[] = this.getHardSkills();

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
  // Public Methods - Skills Processing
  // ============================================================================
  getSkillsForCategory(category: SkillCategory): readonly string[] {
    return this.getTranslatedSkills(category);
  }

  // ============================================================================
  // Private Methods - Skills Processing
  // ============================================================================
  private getHardSkills(): readonly SkillCategory[] {
    return [
      {
        name: 'frontend',
        icon: '🎨',
        highlight: true,
        skillKeys: [
          'skills.frontend.standalone',
          'skills.frontend.guards',
          'skills.frontend.forms',
          'skills.frontend.rxjs',
          'skills.frontend.detection',
          'skills.frontend.lazy',
          'skills.frontend.i18n',
          'skills.frontend.accessibility'
        ]
      },
      {
        name: 'backend',
        icon: '⚙️',
        highlight: true,
        skillKeys: [
          'skills.backend.controllers',
          'skills.backend.jpa',
          'skills.backend.exception',
          'skills.backend.dto',
          'skills.backend.security',
          'skills.backend.config'
        ]
      },
      {
        name: 'databases',
        icon: '🗄️',
        skillKeys: [
          'skills.databases.mysql',
          'skills.databases.indexing',
          'skills.databases.optimization',
          'skills.databases.migrations'
        ]
      },
      {
        name: 'architecture',
        icon: '🏗️',
        skillKeys: [
          'skills.architecture.mvc',
          'skills.architecture.client',
          'skills.architecture.rest',
          'skills.architecture.modular',
          'skills.architecture.separation'
        ]
      },
      {
        name: 'devops',
        icon: '🚀',
        skillKeys: [
          'skills.devops.linux',
          'skills.devops.config',
          'skills.devops.pipelines',
          'skills.devops.debugging'
        ]
      },
      {
        name: 'security',
        icon: '🔒',
        highlight: true,
        skillKeys: [
          'skills.security.cors',
          'skills.security.csrf',
          'skills.security.auth',
          'skills.security.hashing',
          'skills.security.owasp'
        ]
      },
      {
        name: 'testing',
        icon: '🧪',
        skillKeys: [
          'skills.testing.unit',
          'skills.testing.integration',
          'skills.testing.debugging',
          'skills.testing.reviews'
        ]
      },
      {
        name: 'product',
        icon: '✨',
        skillKeys: [
          'skills.product.ux',
          'skills.product.performance',
          'skills.product.workflow'
        ]
      },
      {
        name: 'professional',
        icon: '💼',
        skillKeys: [
          'skills.professional.documentation',
          'skills.professional.codebases',
          'skills.professional.refactoring',
          'skills.professional.production'
        ]
      },
      {
        name: 'creative',
        icon: '🎬',
        skillKeys: [
          'skills.creative.illustrator',
          'skills.creative.image',
          'skills.creative.video',
          'skills.creative.animation'
        ]
      }
    ] as const;
  }

  private getTranslatedSkills(category: SkillCategory): readonly string[] {
    return category.skillKeys.map(key => this.languageService.getTranslation(key));
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('skills.title'));
    const subtitleText = this.sanitizeText(this.languageService.getTranslation('skills.subtitle'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const safeTitle = `${titleText} - ${name} | Digital Resume`;
    const safeDescription = subtitleText || `${titleText} - ${name}`;

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

  private generateKeywords(): string {
    const categories = this.skills.map(cat => this.languageService.getTranslation(`skills.${cat.name.toLowerCase()}`));
    const skills = this.skills.flatMap(cat => this.getTranslatedSkills(cat));
    const allKeywords = [...categories, ...skills].map(s => this.sanitizeText(s)).filter(s => s.length > 0);
    return allKeywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.sanitizeText(this.languageService.getTranslation('skills.title')),
      description: this.sanitizeText(this.languageService.getTranslation('skills.subtitle')),
      numberOfItems: this.skills.reduce((total, cat) => total + cat.skillKeys.length, 0),
      itemListElement: this.skills.flatMap((category, categoryIndex) =>
        this.getTranslatedSkills(category).map((skillName, skillIndex) => ({
          '@type': 'ListItem',
          position: categoryIndex * 100 + skillIndex + 1,
          item: {
            '@type': 'Thing',
            '@id': `#skill-${category.name}-${skillIndex}`,
            name: this.sanitizeText(skillName),
            category: this.sanitizeText(this.languageService.getTranslation(`skills.${category.name.toLowerCase()}`)),
            additionalType: 'https://schema.org/Skill'
          }
        }))
      )
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-hard-skills-section', 'true');
    this.renderer.setAttribute(script, 'id', 'hard-skills-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-hard-skills-section]');
    if (existingScript && existingScript.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  private sanitizeText(text: string): string {
    return text.replace(/[<>]/g, '').trim() || '';
  }
}
