import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp/floating-whatsapp.component';
import { PortfolioService } from './core/services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    FloatingWhatsappComponent
  ],
  template: `
    <div class="app-layout">
      <!-- Sticky Navigation Bar -->
      <app-navbar></app-navbar>

      <!-- Main Semantic Page Content -->
      <main id="main-content">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-education></app-education>
        <app-contact></app-contact>
      </main>

      <!-- Site Footer -->
      <app-footer></app-footer>

      <!-- Floating WhatsApp Action -->
      <app-floating-whatsapp></app-floating-whatsapp>
    </div>
  `,
  styles: [`
    .app-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: var(--bg-main);
      color: var(--text-main);
      position: relative;
    }

    #main-content {
      flex: 1 0 auto;
    }
  `]
})
export class AppComponent implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private portfolioService = inject(PortfolioService);

  ngOnInit(): void {
    const data = this.portfolioService.getPortfolioDataSnapshot();
    const name = data.profile.professionalName;
    const role = data.profile.primaryRole;

    // Page Title
    this.titleService.setTitle(`${name} | ${role}`);

    // SEO Meta Tags
    this.metaService.updateTag({
      name: 'description',
      content: 'Junior .NET Developer transitioning from IT support and infrastructure into software development, focused on C#, ASP.NET Core, Web API, Entity Framework Core, and SQL Server.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Ragab Adel, Junior .NET Developer, C# Developer, ASP.NET Core, Web API, Entity Framework Core, SQL Server, IT Support, System Administration, Network Security, Cairo Egypt'
    });

    this.metaService.updateTag({
      name: 'author',
      content: data.profile.fullName
    });

    // OpenGraph Tags
    this.metaService.updateTag({ property: 'og:title', content: `${name} | ${role}` });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Junior .NET Developer with hands-on IT support and infrastructure experience, building practical ASP.NET Core applications and APIs.'
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });
  }
}
