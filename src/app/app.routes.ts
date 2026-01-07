/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Imports
// ============================================================================
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsSectionComponent } from './components/projects/projects.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { CertificationSectionComponent } from './components/certifications-section/certification-section.component';

// ============================================================================
// Routes Configuration
// ============================================================================
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsSectionComponent },
  { path: 'education', component: EducationSectionComponent },
  { path: 'certifications', component: CertificationSectionComponent },
  { path: '**', redirectTo: '' }
];
