import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';
import { Subscription } from 'rxjs';

interface LanguageOption {
  code: Language;
  name: string;
  flagPath: string; // Path to flag image
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy, AfterViewInit {
  currentLanguage: Language = 'en';
  isDropdownOpen = false;
  private languageSubscription: Subscription;
  dropdownStyle: { [key: string]: string } = {};

  @ViewChild('currentButton', { static: false }) currentButton!: ElementRef;
  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef;

  languages: LanguageOption[] = [
    { 
      code: 'en', 
      name: 'English', 
      flagPath: 'assets/flags/english.png'
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flagPath: 'assets/flags/france.png'
    },
    { 
      code: 'es', 
      name: 'Español', 
      flagPath: 'assets/flags/spanish.png'
    }
  ];

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef
  ) {
    this.languageSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      language => this.currentLanguage = language
    );
  }

  ngAfterViewInit(): void {
    this.updateDropdownPosition();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (this.isDropdownOpen) {
      this.updateDropdownPosition();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  updateDropdownPosition(): void {
    if (this.currentButton && this.currentButton.nativeElement) {
      const rect = this.currentButton.nativeElement.getBoundingClientRect();
      
      // For position: fixed, use viewport coordinates (getBoundingClientRect already gives viewport coords)
      const top = rect.bottom + 8;
      const right = window.innerWidth - rect.right;
      
      this.dropdownStyle = {
        top: `${top}px`,
        right: `${right}px`
      };
      
      // Also set directly on element to ensure it works
      if (this.dropdown && this.dropdown.nativeElement) {
        const dropdownEl = this.dropdown.nativeElement;
        dropdownEl.style.position = 'fixed';
        dropdownEl.style.top = `${top}px`;
        dropdownEl.style.right = `${right}px`;
        dropdownEl.style.zIndex = '999999';
        dropdownEl.style.left = 'auto';
        dropdownEl.style.bottom = 'auto';
        dropdownEl.style.margin = '0';
        dropdownEl.style.transform = 'none';
      }
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      setTimeout(() => {
        this.updateDropdownPosition();
        // Force reflow to ensure dropdown is positioned
        if (this.dropdown && this.dropdown.nativeElement) {
          this.dropdown.nativeElement.style.display = 'block';
        }
      }, 10);
    } else {
      if (this.dropdown && this.dropdown.nativeElement) {
        this.dropdown.nativeElement.style.display = 'none';
      }
    }
  }

  selectLanguage(languageCode: Language): void {
    this.languageService.setLanguage(languageCode);
    this.isDropdownOpen = false;
  }

  switchLanguage(languageCode: Language): void {
    this.languageService.setLanguage(languageCode);
  }

  isCurrentLanguage(languageCode: Language): boolean {
    return this.currentLanguage === languageCode;
  }

  getCurrentLanguageFlag(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    return currentLang ? currentLang.flagPath : 'assets/flags/english.png';
  }
  
  getCurrentLanguageName(): string {
    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    return currentLang ? currentLang.name : 'English';
  }
} 