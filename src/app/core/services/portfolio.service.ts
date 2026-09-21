import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import {
  PortfolioData,
  ProfileInfo,
  SkillCategory,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  LanguageItem
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData$ = new BehaviorSubject<PortfolioData>(PORTFOLIO_DATA);

  getPortfolioData(): Observable<PortfolioData> {
    return this.portfolioData$.asObservable();
  }

  getPortfolioDataSnapshot(): PortfolioData {
    return this.portfolioData$.getValue();
  }

  getProfile(): Observable<ProfileInfo> {
    return of(PORTFOLIO_DATA.profile);
  }

  getSkillCategories(): Observable<SkillCategory[]> {
    return of(PORTFOLIO_DATA.skillCategories);
  }

  getProjects(): Observable<ProjectItem[]> {
    return of(PORTFOLIO_DATA.projects);
  }

  getProjectById(id: string): ProjectItem | undefined {
    return PORTFOLIO_DATA.projects.find(p => p.id === id);
  }

  getExperiences(): Observable<ExperienceItem[]> {
    return of(PORTFOLIO_DATA.experiences);
  }

  getEducation(): Observable<EducationItem[]> {
    return of(PORTFOLIO_DATA.education);
  }

  getCertifications(): Observable<CertificationItem[]> {
    return of(PORTFOLIO_DATA.certifications);
  }

  getLanguages(): Observable<LanguageItem[]> {
    return of(PORTFOLIO_DATA.languages);
  }
}
