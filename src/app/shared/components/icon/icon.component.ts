/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// ============================================================================
// Type Definitions
// ============================================================================
export type IconName = 
  | 'location' 
  | 'time' 
  | 'book' 
  | 'arrow-left' 
  | 'graduation-cap'
  | 'chevron-right'
  | 'chevron-left';

// ============================================================================
// Component Decorator
// ============================================================================
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [attr.viewBox]="viewBox" 
      [attr.width]="size" 
      [attr.height]="size"
      [class]="className"
      [attr.aria-hidden]="'true'"
      [attr.role]="'img'"
      [attr.aria-label]="ariaLabel">
      <ng-container [ngSwitch]="name">
        <g *ngSwitchCase="'location'">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </g>
        <g *ngSwitchCase="'time'">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </g>
        <g *ngSwitchCase="'book'">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </g>
        <g *ngSwitchCase="'arrow-left'">
          <path d="M15 18l-6-6 6-6"/>
        </g>
        <g *ngSwitchCase="'graduation-cap'">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </g>
        <g *ngSwitchCase="'chevron-right'">
          <polyline points="9 18 15 12 9 6"/>
        </g>
        <g *ngSwitchCase="'chevron-left'">
          <polyline points="15 18 9 12 15 6"/>
        </g>
      </ng-container>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    svg {
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `]
})
export class IconComponent {
  // ============================================================================
  // Properties
  // ============================================================================
  @Input() name!: IconName;
  @Input() size: number = 16;
  @Input() className: string = '';
  @Input() ariaLabel?: string;

  // ============================================================================
  // Getters
  // ============================================================================
  get viewBox(): string {
    return '0 0 24 24';
  }
} 