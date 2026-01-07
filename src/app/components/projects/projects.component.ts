/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';
import { MasterProjectComponent } from '../master-project/master-project.component';
import { SecondaryProjectsComponent } from '../secondary-projects/secondary-projects.component';
import { Project } from './project.types';

// ============================================================================
// Interfaces
// ============================================================================
interface StructuredDataItem {
  '@type': string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  url?: string;
  codeRepository?: string;
  screenshot?: string;
  programmingLanguage?: string[];
  author?: {
    '@type': string;
    name: string;
  };
}

interface StructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description?: string;
  numberOfItems?: number;
  url?: string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    item: StructuredDataItem;
  }>;
}

// ============================================================================
// Constants
// ============================================================================
const PROJECT_TITLE_MAP: ReadonlyMap<string, string> = new Map([
  ['Alpha Vault', 'alphavault'],
  ['E-Kanban Integration', 'ekanban'],
  ['AuraCast', 'auracast'],
  ['AuraFX', 'aurafx'],
  ['ClimaPulse', 'climapulse'],
  ['War Zone', 'warzone']
]);

const STRUCTURED_DATA_SCRIPT_ID = 'projects-structured-data';
const STRUCTURED_DATA_SCRIPT_SELECTOR = 'script[type="application/ld+json"][data-projects-section]';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, MasterProjectComponent, SecondaryProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  readonly projects: readonly Project[] = RESUME_DATA.projects;
  readonly personalInfo = RESUME_DATA.personal;
  readonly masterProjects: readonly Project[] = this.projects.filter(p => p.title === 'Alpha Vault');
  readonly secondaryProjects: readonly Project[] = this.projects.filter(p => p.title !== 'Alpha Vault');
  
  private readonly destroy$ = new Subject<void>();
  private currentLanguage = 'en';

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    private readonly languageService: LanguageService,
    private readonly title: Title,
    private readonly meta: Meta,
    private readonly cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platformId: object,
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
  // Public Methods
  // ============================================================================
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  // ============================================================================
  // Private Methods - Translation Helpers
  // ============================================================================
  private getProjectKey(project: Project): string {
    return PROJECT_TITLE_MAP.get(project.title) || project.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  private getTranslatedTitle(project: Project): string {
    const key = `projects.${this.getProjectKey(project)}.title`;
    return this.languageService.getTranslation(key) || project.title;
  }

  private getTranslatedDescription(project: Project): string {
    const key = `projects.${this.getProjectKey(project)}.description`;
    return this.languageService.getTranslation(key) || project.description;
  }

  private getTranslatedTechnology(tech: string): string {
    const techKey = tech.replace(/[^a-zA-Z0-9]/g, '');
    const key = `projects.technologies.${techKey}`;
    return this.languageService.getTranslation(key) || tech;
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('projects.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const digitalResume = this.sanitizeText(this.languageService.getTranslation('experience.digitalResume'));
    const titleSep = this.languageService.getTranslation('experience.titleSeparator');
    const pipeSep = this.languageService.getTranslation('experience.pipeSeparator');
    const safeTitle = `${titleText}${titleSep}${name}${pipeSep}${digitalResume}`;
    const safeDescription = this.generateDescription();
    const currentUrl = isPlatformBrowser(this.platformId) ? window.location.href : '';
    const locale = this.getLocale();

    this.title.setTitle(safeTitle);
    this.meta.updateTag({ name: 'description', content: safeDescription });
    this.meta.updateTag({ name: 'keywords', content: this.generateKeywords() });
    this.meta.updateTag({ name: 'author', content: name });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    this.meta.updateTag({ property: 'og:title', content: safeTitle });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:description', content: safeDescription });
    this.meta.updateTag({ property: 'og:locale', content: locale });
    if (currentUrl) {
      this.meta.updateTag({ property: 'og:url', content: currentUrl });
    }
    this.meta.updateTag({ property: 'og:site_name', content: digitalResume });
    if (this.personalInfo.avatar) {
      this.meta.updateTag({ property: 'og:image', content: this.personalInfo.avatar });
      this.meta.updateTag({ property: 'og:image:alt', content: `${name} - ${titleText}` });
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: safeTitle });
    this.meta.updateTag({ name: 'twitter:description', content: safeDescription });
    if (this.personalInfo.avatar) {
      this.meta.updateTag({ name: 'twitter:image', content: this.personalInfo.avatar });
      this.meta.updateTag({ name: 'twitter:image:alt', content: `${name} - ${titleText}` });
    }
  }

  private getLocale(): string {
    switch (this.currentLanguage) {
      case 'fr': return 'fr_FR';
      case 'es': return 'es_ES';
      case 'ar': return 'ar_SA';
      default: return 'en_US';
    }
  }

  private generateDescription(): string {
    const titleText = this.sanitizeText(this.languageService.getTranslation('projects.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const projectCount = this.projects.length;
    const masterProject = this.masterProjects[0];
    
    if (projectCount > 0 && masterProject) {
      const masterTitle = this.sanitizeText(this.getTranslatedTitle(masterProject));
      const secondaryCount = this.secondaryProjects.length;
      const titleSep = this.languageService.getTranslation('experience.titleSeparator');
      const commaSep = this.languageService.getTranslation('experience.commaSeparator');
      
      const allTechnologies = Array.from(new Set(this.projects.flatMap(p => p.technologies)));
      const technologies = allTechnologies.slice(0, 5).map(tech => this.sanitizeText(this.getTranslatedTechnology(tech)));
      
      const techList = technologies.join(commaSep);
      const andMore = technologies.length < allTechnologies.length
        ? this.languageService.getTranslation('experience.andMore')
        : '';
      
      if (secondaryCount > 0) {
        return `${titleText}${titleSep}${name}. ${this.languageService.getTranslation('projects.portfolioDescription')} ${masterTitle} ${this.languageService.getTranslation('projects.and')} ${secondaryCount} ${this.languageService.getTranslation('projects.otherProjects')}. ${this.languageService.getTranslation('projects.technologiesUsed')}${this.languageService.getTranslation('experience.colon')} ${techList}${andMore}.`;
      }
      return `${titleText}${titleSep}${name}. ${this.languageService.getTranslation('projects.portfolioDescription')} ${masterTitle}. ${this.languageService.getTranslation('projects.technologiesUsed')}${this.languageService.getTranslation('experience.colon')} ${techList}${andMore}.`;
    }
    const titleSep = this.languageService.getTranslation('experience.titleSeparator');
    return `${titleText}${titleSep}${name}`;
  }

  private generateKeywords(): string {
    const keywords: string[] = [];
    
    keywords.push(this.sanitizeText(this.languageService.getTranslation('projects.title')));
    keywords.push(this.sanitizeText(this.languageService.getTranslation('home.name')));
    
    this.projects.forEach(project => {
      keywords.push(this.sanitizeText(this.getTranslatedTitle(project)));
      project.technologies.forEach(tech => {
        keywords.push(this.sanitizeText(this.getTranslatedTechnology(tech)));
      });
    });
    
    const uniqueKeywords = Array.from(new Set(keywords))
      .filter(k => k.length > 0)
      .slice(0, 30);
    
    const commaSep = this.languageService.getTranslation('experience.commaSeparator');
    return uniqueKeywords.join(commaSep);
  }

  // ============================================================================
  // Private Methods - Utilities
  // ============================================================================
  private sanitizeText(text: string): string {
    if (!text || typeof text !== 'string') {
      return '';
    }
    return text.replace(/[<>]/g, '').trim() || '';
  }

  private isValidUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  }

  // ============================================================================
  // Private Methods - Structured Data
  // ============================================================================
  private injectStructuredData(): void {
    this.removeStructuredData();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const titleText = this.sanitizeText(this.languageService.getTranslation('projects.title'));
    const description = this.generateDescription();
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    const currentUrl = window.location.href;

    const structuredData: StructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: titleText,
      description: description,
      numberOfItems: this.projects.length,
      url: currentUrl,
      itemListElement: this.projects.map((project, index) => {
        const item: StructuredDataItem = {
          '@type': 'SoftwareApplication',
          name: this.sanitizeText(this.getTranslatedTitle(project)),
          description: this.sanitizeText(this.getTranslatedDescription(project)),
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web',
          author: {
            '@type': 'Person',
            name: name
          },
          programmingLanguage: project.technologies.map(tech => this.sanitizeText(this.getTranslatedTechnology(tech)))
        };

        if (project.liveUrl && this.isValidUrl(project.liveUrl)) {
          item.url = project.liveUrl;
        }

        if (project.githubUrl && this.isValidUrl(project.githubUrl)) {
          item.codeRepository = project.githubUrl;
        }

        if (project.image) {
          item.screenshot = project.image;
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
    this.renderer.setAttribute(script, 'data-projects-section', 'true');
    this.renderer.setAttribute(script, 'id', STRUCTURED_DATA_SCRIPT_ID);
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector(STRUCTURED_DATA_SCRIPT_SELECTOR);
    if (existingScript?.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }
}
