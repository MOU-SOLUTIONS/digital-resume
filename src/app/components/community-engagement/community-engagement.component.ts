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
interface EngagementRole {
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isPresent: boolean;
}

interface CommunityEngagementItem {
  readonly id: number;
  readonly organization: string;
  readonly organizationKey: string;
  readonly roles: readonly EngagementRole[];
  readonly location: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly icon: string;
  readonly logo: string;
  flipped: boolean;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-community-engagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-engagement.component.html',
  styleUrl: './community-engagement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEngagementComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  private readonly destroy$ = new Subject<void>();
  engagements: CommunityEngagementItem[] = [];

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
    this.initializeEngagementsData();
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
  trackByEngagement(_index: number, item: CommunityEngagementItem): number {
    return item.id;
  }

  trackByRole(_index: number, role: EngagementRole): string {
    return `${role.role}-${role.startDate}`;
  }

  trackByHighlight(_index: number, highlight: string): string {
    return highlight;
  }

  // ============================================================================
  // Public Methods - Accessibility
  // ============================================================================
  getAriaLabel(engagement: CommunityEngagementItem): string {
    const orgName = this.languageService.getTranslation(`community.organization.${engagement.organizationKey}`) || engagement.organization;
    const roles = engagement.roles.map(r => this.languageService.getTranslation(`community.role.${r.role}`)).join(', ');
    return `${orgName} - ${roles}`;
  }

  getAriaExpanded(index: number): string {
    if (index >= 0 && index < this.engagements.length) {
      return this.engagements[index].flipped ? 'true' : 'false';
    }
    return 'false';
  }

  getCardAriaLabel(index: number): string {
    if (index >= 0 && index < this.engagements.length) {
      const engagement = this.engagements[index];
      const orgName = this.languageService.getTranslation(`community.organization.${engagement.organizationKey}`) || engagement.organization;
      return `${orgName} - ${this.languageService.getTranslation('community.title')}`;
    }
    return '';
  }

  // ============================================================================
  // Public Methods - Card Interaction
  // ============================================================================
  toggleCardFlip(index: number): void {
    if (index >= 0 && index < this.engagements.length) {
      this.engagements[index].flipped = !this.engagements[index].flipped;
      this.cdr.markForCheck();
    }
  }

  // ============================================================================
  // Public Methods - Image Error Handling
  // ============================================================================
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img) {
      return;
    }
    this.renderer.setStyle(img, 'display', 'none');
    const iconContainer = img.closest('.engagement-icon') as HTMLElement;
    if (iconContainer) {
      const imgSrc = img.src;
      const engagement = this.engagements.find(e => imgSrc.includes(e.logo));
      if (engagement) {
        const fallback = this.renderer.createElement('div');
        this.renderer.setStyle(fallback, 'display', 'flex');
        this.renderer.setStyle(fallback, 'align-items', 'center');
        this.renderer.setStyle(fallback, 'justify-content', 'center');
        this.renderer.setStyle(fallback, 'height', '100%');
        this.renderer.setStyle(fallback, 'width', '100%');
        this.renderer.setStyle(fallback, 'font-size', '2rem');
        this.renderer.setProperty(fallback, 'textContent', engagement.icon);
        this.renderer.setAttribute(fallback, 'aria-hidden', 'true');
        this.renderer.appendChild(iconContainer, fallback);
      }
    }
  }

  // ============================================================================
  // Public Methods - Date Formatting
  // ============================================================================
  getFormattedDate(dateString: string): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  }

  // ============================================================================
  // Private Methods - Data
  // ============================================================================
  private initializeEngagementsData(): void {
    const engagementsData = [
      {
        id: 1,
        organization: 'Tunisian Scouts',
        organizationKey: 'tunisianScouts',
        location: 'Tunisia',
        roles: [
          {
            role: 'member',
            startDate: '2011-12',
            endDate: '2019-11',
            isPresent: false
          },
          {
            role: 'scoutLeader',
            startDate: '2018-12',
            endDate: '',
            isPresent: true
          }
        ],
        description: 'community.tunisianScouts.description',
        highlights: [
          'community.tunisianScouts.highlight1',
          'community.tunisianScouts.highlight2',
          'community.tunisianScouts.highlight3',
          'community.tunisianScouts.highlight4'
        ],
        icon: '🏕️',
        logo: 'assets/logos/scout.png'
      },
      {
        id: 2,
        organization: 'Tunisian Red Crescent',
        organizationKey: 'tunisianRedCrescent',
        location: 'Tunisia',
        roles: [
          {
            role: 'volunteer',
            startDate: '2017-12',
            endDate: '',
            isPresent: true
          },
          {
            role: 'president',
            startDate: '2021-12',
            endDate: '2023-11',
            isPresent: false
          }
        ],
        description: 'community.tunisianRedCrescent.description',
        highlights: [
          'community.tunisianRedCrescent.highlight1',
          'community.tunisianRedCrescent.highlight2',
          'community.tunisianRedCrescent.highlight3',
          'community.tunisianRedCrescent.highlight4',
          'community.tunisianRedCrescent.highlight5'
        ],
        icon: '❤️',
        logo: 'assets/logos/crt.jpg'
      },
      {
        id: 3,
        organization: 'Ambassador of Dialogue',
        organizationKey: 'ambassadorOfDialogue',
        location: 'International',
        roles: [
          {
            role: 'dialogueFacilitator',
            startDate: '2021-12',
            endDate: '',
            isPresent: true
          }
        ],
        description: 'community.ambassadorOfDialogue.description',
        highlights: [
          'community.ambassadorOfDialogue.highlight1',
          'community.ambassadorOfDialogue.highlight2',
          'community.ambassadorOfDialogue.highlight3',
          'community.ambassadorOfDialogue.highlight4'
        ],
        icon: '🤝',
        logo: 'assets/logos/afd.jpg'
      }
    ];

    this.engagements = engagementsData.map(eng => ({
      ...eng,
      flipped: false
    }));
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('community.title'));
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
    const titleText = this.sanitizeText(this.languageService.getTranslation('community.title'));
    const name = this.sanitizeText(this.languageService.getTranslation('home.name'));
    return `${titleText} - ${name}. ${this.sanitizeText(this.languageService.getTranslation('community.subtitle'))}`;
  }

  private generateKeywords(): string {
    const keywords = [
      this.sanitizeText(this.languageService.getTranslation('community.title')),
      ...this.engagements.map(eng => this.sanitizeText(eng.organization))
    ].filter(s => s.length > 0);
    return keywords.slice(0, 30).join(', ');
  }

  private injectStructuredData(): void {
    this.removeStructuredData();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.sanitizeText(this.languageService.getTranslation('community.title')),
      description: this.generateDescription(),
      numberOfItems: this.engagements.length,
      itemListElement: this.engagements.flatMap((eng, engIndex) =>
        eng.roles.map((role, roleIndex) => ({
          '@type': 'ListItem',
          position: engIndex * 10 + roleIndex + 1,
          item: {
            '@type': 'OrganizationRole',
            roleName: this.sanitizeText(this.languageService.getTranslation(`community.role.${role.role}`)),
            worksFor: {
              '@type': 'Organization',
              name: this.sanitizeText(eng.organization)
            },
            startDate: role.startDate,
            endDate: role.isPresent ? undefined : role.endDate
          }
        }))
      )
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setAttribute(script, 'data-community-engagement', 'true');
    this.renderer.setAttribute(script, 'id', 'community-structured-data');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  private removeStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-community-engagement]');
    if (existingScript?.parentNode) {
      this.renderer.removeChild(existingScript.parentNode, existingScript);
    }
  }

  private sanitizeText(text: string): string {
    return text.replace(/[<>]/g, '').trim() || '';
  }
}

