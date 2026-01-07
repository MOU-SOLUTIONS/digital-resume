/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';

// ============================================================================
// Interfaces
// ============================================================================
interface StatItem {
  readonly number: string;
  readonly key: string;
}

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsSectionComponent implements OnInit, OnDestroy {
  
  // ============================================================================
  // Properties
  // ============================================================================
  readonly stats: StatItem[] = [
    { number: '5+', key: 'stats.yearsExperience' },
    { number: '50+', key: 'stats.projectsCompleted' },
    { number: '20+', key: 'stats.happyClients' },
    { number: '15+', key: 'stats.technologies' }
  ];

  private readonly destroy$ = new Subject<void>();

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    public readonly languageService: LanguageService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly renderer: Renderer2
  ) {}

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  ngOnInit(): void {
    this.subscribeToLanguageChanges();
    if (isPlatformBrowser(this.platformId)) {
      this.injectStructuredData();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ============================================================================
  // Private Methods - Subscriptions
  // ============================================================================
  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.cdr.markForCheck());
  }

  // ============================================================================
  // Private Methods - SEO
  // ============================================================================
  private injectStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.languageService.getTranslation('stats.title'),
      itemListElement: this.stats.map((stat, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: this.languageService.getTranslation(stat.key),
        value: stat.number
      }))
    };

    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setProperty(script, 'textContent', JSON.stringify(structuredData));
    this.renderer.appendChild(document.head, script);
  }

  // ============================================================================
  // Public Methods - Performance
  // ============================================================================
  trackByStatKey(_index: number, stat: StatItem): string {
    return stat.key;
  }
}
