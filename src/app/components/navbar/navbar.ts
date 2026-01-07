/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// Angular Core Imports
import { Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

// Service Imports
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

// Component Imports
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

// RxJS Imports
import { Subscription } from 'rxjs';

// Component Decorator
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageSwitcherComponent, ThemeToggleComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  // Public Properties
  isMenuOpen = false;
  isScrolled = false;
  
  // Private Properties
  private subscriptions = new Subscription();
  private scrollHandler?: () => void;

  // Constructor
  constructor(
    public languageService: LanguageService,
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  // Lifecycle Hooks
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
      this.subscriptions.add(
        this.themeService.theme$.subscribe(() => {
          this.cdr.markForCheck();
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if (this.scrollHandler && isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  // Public Methods - Menu Control
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Public Methods - Navigation
  scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.closeMenu();
    }
  }

  // Private Methods - Event Listeners
  private setupScrollListener(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let ticking = false;
    this.scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const wasScrolled = this.isScrolled;
          this.isScrolled = window.scrollY > 50;
          if (wasScrolled !== this.isScrolled) {
            this.cdr.markForCheck();
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }
}
