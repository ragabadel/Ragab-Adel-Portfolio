import { DOCUMENT } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
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
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    const data = this.portfolioService.getPortfolioDataSnapshot();
    const name = data.profile.professionalName;
    this.titleService.setTitle(`${name} | .NET Developer & IT Administrator`);

    this.metaService.updateTag({
      name: 'description',
      content: 'Portfolio of Ragab Adel in Cairo: Junior .NET development plus hands-on Windows Server, FortiGate firewall, network, systems support, and automation experience.'
    });

    this.metaService.updateTag({
      name: 'author',
      content: data.profile.fullName
    });

    this.metaService.updateTag({ property: 'og:title', content: `${name} | .NET Developer & IT Administrator` });
    this.metaService.updateTag({
      property: 'og:description',
      content: '.NET development plus hands-on Windows Server, FortiGate firewall, networking, systems support, and infrastructure automation experience.'
    });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });

    if (isPlatformBrowser(this.platformId)) {
      this.setRuntimeUrls(data.profile.avatarPath);
    }
  }

  private setRuntimeUrls(imagePath: string): void {
    const pageUrl = new URL('/', this.document.location.origin).href;
    const imageUrl = new URL(imagePath, pageUrl).href;
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }

    canonical.href = pageUrl;
    this.metaService.updateTag({ property: 'og:url', content: pageUrl });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
