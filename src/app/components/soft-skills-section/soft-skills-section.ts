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
interface SoftSkillCategory {
  readonly name: string;
  readonly icon: string;
  readonly skillKeys: readonly string[];
  readonly highlight?: boolean;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-soft-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soft-skills-section.html',
  styleUrl: './soft-skills-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftSkillsSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  readonly skills: readonly SoftSkillCategory[] = this.getSoftSkills();
  readonly personalInfo = RESUME_DATA.personal;

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
  trackByCategoryName(_index: number, category: SoftSkillCategory): string {
    return category.name;
  }

  trackBySkillIndex(_index: number): number {
    return _index;
  }

  // ============================================================================
  // Public Methods - Skills Processing
  // ============================================================================
  getSkillsForCategory(category: SoftSkillCategory): readonly string[] {
    return this.getTranslatedSkills(category);
  }

  getCategoryTranslationKey(category: SoftSkillCategory): string {
    return `softSkills.${category.name.toLowerCase()}`;
  }

  // ============================================================================
  // Private Methods - Skills Processing
  // ============================================================================
  private getSoftSkills(): readonly SoftSkillCategory[] {
    return [
      {
        name: 'leadership',
        icon: '👥',
        highlight: true,
        skillKeys: [
          'softSkills.leadership.teamLeadership',
          'softSkills.leadership.decisionMaking',
          'softSkills.leadership.diverseTeams'
        ]
      },
      {
        name: 'communication',
        icon: '💬',
        highlight: true,
        skillKeys: [
          'softSkills.communication.clearCommunication',
          'softSkills.communication.technicalTranslation',
          'softSkills.communication.crossCultural'
        ]
      },
      {
        name: 'dialogue',
        icon: '🤝',
        skillKeys: [
          'softSkills.dialogue.facilitation',
          'softSkills.dialogue.conflictResolution',
          'softSkills.dialogue.activeListening'
        ]
      },
      {
        name: 'crisis',
        icon: '⚡',
        highlight: true,
        skillKeys: [
          'softSkills.crisis.management',
          'softSkills.crisis.firstAid',
          'softSkills.crisis.stressManagement'
        ]
      },
      {
        name: 'execution',
        icon: '⚙️',
        skillKeys: [
          'softSkills.execution.timeManagement',
          'softSkills.execution.adaptability',
          'softSkills.execution.productionConstraints'
        ]
      },
      {
        name: 'ethics',
        icon: '🌟',
        skillKeys: [
          'softSkills.ethics.professionalEthics',
          'softSkills.ethics.humanitarian',
          'softSkills.ethics.youthLeadership'
        ]
      }
    ] as const;
  }

  private getTranslatedSkills(category: SoftSkillCategory): readonly string[] {
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('softSkills.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const digitalResume = this.sanitizeText(this.languageService.getTranslation('experience.digitalResume'));
    const safeTitle = `${titleText} - ${name} | ${digitalResume}`;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('softSkills.title'));
    const subtitleText = this.sanitizeText(this.languageService.getTranslation('softSkills.subtitle'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const skillCount = this.skills.length;
    const totalSkills = this.skills.reduce((total, cat) => total + cat.skillKeys.length, 0);
    
    if (skillCount > 0) {
      const categoryText = skillCount === 1 
        ? this.languageService.getTranslation('softSkills.category')
        : this.languageService.getTranslation('softSkills.categories');
      const competencyText = totalSkills === 1
        ? this.languageService.getTranslation('softSkills.competency')
        : this.languageService.getTranslation('softSkills.competencies');
      const withText = this.languageService.getTranslation('softSkills.with');
      const colon = this.languageService.getTranslation('softSkills.colon');
      
      const categories = this.skills.map(cat => 
        this.sanitizeText(this.languageService.getTranslation(`softSkills.${cat.name.toLowerCase()}`))
      ).slice(0, 4).join(this.languageService.getTranslation('softSkills.commaSeparator'));
      
      return `${titleText} - ${name}. ${subtitleText} ${skillCount} ${categoryText} ${withText} ${totalSkills} ${competencyText}${colon} ${categories}.`;
    }
    return `${titleText} - ${name}. ${subtitleText}`;
  }

  private generateKeywords(): string {
    const categories = this.skills.map(cat => this.languageService.getTranslation(`softSkills.${cat.name.toLowerCase()}`));
    const skills = this.skills.flatMap(cat => this.getTranslatedSkills(cat));
    const allKeywords = [...categories, ...skills].map(s => this.sanitizeText(s)).filter(s => s.length > 0);
    const commaSeparator = this.languageService.getTranslation('softSkills.commaSeparator');
    return allKeywords.slice(0, 30).join(commaSeparator);
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.sanitizeText(this.languageService.getTranslation('softSkills.title')),
      description: this.sanitizeText(this.languageService.getTranslation('softSkills.subtitle')),
      numberOfItems: this.skills.reduce((total, cat) => total + cat.skillKeys.length, 0),
      itemListElement: this.skills.flatMap((category, categoryIndex) =>
        this.getTranslatedSkills(category).map((skillName, skillIndex) => ({
          '@type': 'ListItem',
          position: categoryIndex * 100 + skillIndex + 1,
          item: {
            '@type': 'Thing',
            '@id': `#soft-skill-${category.name}-${skillIndex}`,
            name: this.sanitizeText(skillName),
            category: this.sanitizeText(this.languageService.getTranslation(`softSkills.${category.name.toLowerCase()}`)),
            additionalType: 'https://schema.org/Skill'
          }
        }))
      )
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-soft-skills-section', 'true');
    this.renderer.setAttribute(script, 'id', 'soft-skills-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-soft-skills-section]');
    if (existingScript?.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  private sanitizeText(text: string): string {
    return text.replace(/[<>]/g, '').trim() || '';
  }
}
