/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// ============================================================================
// Type Definitions
// ============================================================================
export type Theme = 'light' | 'dark';

// ============================================================================
// Injectable Decorator
// ============================================================================
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // ============================================================================
  // Properties
  // ============================================================================
  private themeSubject = new BehaviorSubject<Theme>('light');
  public theme$: Observable<Theme> = this.themeSubject.asObservable();

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  // ============================================================================
  // Public Methods
  // ============================================================================
  getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
