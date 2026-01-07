import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { RESUME_DATA } from '../../models/resume-data';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { ProjectsSectionComponent } from '../projects/projects.component';
import { HeroSectionComponent } from '../hero-section/hero-section';
import { StatsSectionComponent } from '../stats-section/stats-section';
import { AboutSectionComponent } from '../about-section/about-section';
import { ExperienceSectionComponent } from '../experience-section/experience-section';
import { HardSkillsSectionComponent } from '../hard-skills-section/hard-skills-section';
import { SoftSkillsSectionComponent } from '../soft-skills-section/soft-skills-section';
import { CommunityEngagementComponent } from '../community-engagement/community-engagement.component';
import { LanguageSectionComponent } from '../language-section/language-section.component';
import { CertificationSectionComponent } from '../certifications-section/certification-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EducationSectionComponent, ProjectsSectionComponent, HeroSectionComponent, StatsSectionComponent, AboutSectionComponent, ExperienceSectionComponent, HardSkillsSectionComponent, SoftSkillsSectionComponent, CommunityEngagementComponent, LanguageSectionComponent, CertificationSectionComponent, ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  projects = RESUME_DATA.projects;
  education = RESUME_DATA.education;
  currentLanguage = 'en';

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  getTranslation(key: string): string {
    return this.languageService.getTranslation(key);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString(this.currentLanguage === 'ar' ? 'ar-SA' : this.currentLanguage, {
      year: 'numeric',
      month: 'short'
    });
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
} 