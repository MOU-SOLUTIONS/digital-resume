/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../../services/language.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { Project } from '../projects/project.types';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-master-project',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './master-project.component.html',
  styleUrl: './master-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterProjectComponent implements OnInit, OnDestroy {
  // ============================================================================
  // Properties
  // ============================================================================
  @Input({ required: true }) project!: Project;

  private readonly titleMap: ReadonlyMap<string, string> = new Map([
    ['Alpha Vault', 'alphavault'],
    ['E-Kanban Integration', 'ekanban'],
    ['AuraCast', 'auracast'],
    ['AuraFX', 'aurafx'],
    ['ClimaPulse', 'climapulse'],
    ['War Zone', 'warzone']
  ]);

  private readonly destroy$ = new Subject<void>();

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(
    public readonly languageService: LanguageService,
    private readonly renderer: Renderer2,
    private readonly cdr: ChangeDetectorRef
  ) {}

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  ngOnInit(): void {
    this.subscribeToLanguageChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ============================================================================
  // Translation Methods
  // ============================================================================
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  getProjectKey(project: Project): string {
    return this.titleMap.get(project.title) || project.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  getTranslatedTitle(project: Project): string {
    const key = `projects.${this.getProjectKey(project)}.title`;
    return this.languageService.getTranslation(key) || project.title;
  }

  getTranslatedDescription(project: Project): string {
    const key = `projects.${this.getProjectKey(project)}.description`;
    return this.languageService.getTranslation(key) || project.description;
  }

  getTranslatedTechnology(tech: string): string {
    const techKey = tech.replace(/[^a-zA-Z0-9]/g, '');
    const key = `projects.technologies.${techKey}`;
    return this.languageService.getTranslation(key) || tech;
  }

  // ============================================================================
  // Event Handlers
  // ============================================================================
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img) {
      return;
    }
    this.renderer.setStyle(img, 'display', 'none');
    const cardImage = img.closest('.master-project__image') as HTMLElement;
    if (cardImage) {
      this.renderer.setStyle(cardImage, 'background', 'linear-gradient(135deg, #f1f5f9, #e2e8f0)');
      this.renderer.setStyle(cardImage, 'position', 'relative');
      const placeholder = this.renderer.createElement('div');
      this.renderer.setStyle(placeholder, 'display', 'flex');
      this.renderer.setStyle(placeholder, 'align-items', 'center');
      this.renderer.setStyle(placeholder, 'justify-content', 'center');
      this.renderer.setStyle(placeholder, 'height', '100%');
      this.renderer.setStyle(placeholder, 'width', '100%');
      this.renderer.setStyle(placeholder, 'color', '#64748b');
      this.renderer.setStyle(placeholder, 'font-size', '48px');
      this.renderer.setProperty(placeholder, 'textContent', '📄');
      this.renderer.setAttribute(placeholder, 'aria-hidden', 'true');
      this.renderer.appendChild(cardImage, placeholder);
    }
  }

  // ============================================================================
  // Performance Optimization
  // ============================================================================
  trackByTech(_index: number, tech: string): string {
    return tech;
  }

  // ============================================================================
  // Private Methods
  // ============================================================================
  private subscribeToLanguageChanges(): void {
    this.languageService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }
}
