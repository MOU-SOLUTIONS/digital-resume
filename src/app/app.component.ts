/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LanguageService, Language } from './services/language.service';
import { NavbarComponent } from './components/navbar/navbar';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // ============================================================================
  // Properties
  // ============================================================================
  title = 'Digital Resume';
  currentLanguage: Language = 'en';

  // ============================================================================
  // Constructor
  // ============================================================================
  constructor(private languageService: LanguageService) {}

  // ============================================================================
  // Lifecycle Hooks
  // ============================================================================
  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  // ============================================================================
  // Public Methods
  // ============================================================================
  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 