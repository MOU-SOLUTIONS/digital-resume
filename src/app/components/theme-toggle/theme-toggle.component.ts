// --------------------------------------------------------------------------------
// Coded by Mohamed Amine Dhaoui in 2025
// --------------------------------------------------------------------------------

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  currentTheme: Theme = 'light';
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => this.currentTheme = theme
    );
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

