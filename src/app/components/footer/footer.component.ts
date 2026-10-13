import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer class="site-footer">
      <div class="container footer-container">
        <!-- Top Footer Row -->
        <div class="footer-top">
          <div class="footer-brand">
            <a href="#home" class="brand-link" (click)="scrollToTop($event)">
              <span class="brand-prefix">&lt;</span>
              <span class="brand-name">{{ profile?.professionalName || 'Ragab Adel' }}</span>
              <span class="brand-suffix">/&gt;</span>
              <span class="brand-badge">.NET</span>
            </a>
            <p class="brand-tagline">
              Junior .NET Developer with hands-on Windows Server, Fortinet FortiGate, networking, and IT support experience.
            </p>
          </div>

          <!-- Quick Navigation Links -->
          <nav class="footer-nav" aria-label="Footer Navigation">
            <a href="#home" (click)="scrollToSection($event, 'home')">Home</a>
            <a href="#about" (click)="scrollToSection($event, 'about')">About</a>
            <a href="#skills" (click)="scrollToSection($event, 'skills')">Skills</a>
            <a href="#projects" (click)="scrollToSection($event, 'projects')">Projects</a>
            <a href="#experience" (click)="scrollToSection($event, 'experience')">Experience</a>
            <a href="#education" (click)="scrollToSection($event, 'education')">Education</a>
            <a href="#contact" (click)="scrollToSection($event, 'contact')">Contact</a>
          </nav>

          <!-- Social Icons List -->
          <div class="footer-socials">
            <a
              *ngFor="let s of profile?.socials"
              [href]="s.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-circle-link"
              [attr.aria-label]="s.ariaLabel">
              <app-icon [name]="s.icon" [size]="18"></app-icon>
            </a>
          </div>
        </div>

        <!-- Bottom Divider & Copyright -->
        <div class="footer-bottom">
          <p class="copyright-text">
            © {{ currentYear }} {{ profile?.fullName || 'Ragab Adel Ragab Ali' }}. All rights reserved.
          </p>
          <p class="architecture-text">
            Built with <span class="accent-text">Angular</span> &amp; <span class="accent-text">TypeScript</span> • Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #070b16;
      border-top: 1px solid var(--border-glass);
      padding: 4rem 0 2.5rem;
      margin-top: 4rem;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2.5rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      flex-wrap: wrap;
    }

    .footer-brand {
      max-width: 340px;

      .brand-link {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 1.35rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.75rem;

        .brand-prefix, .brand-suffix {
          color: var(--accent-cyan);
          font-family: monospace;
        }

        .brand-badge {
          font-size: 0.7rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0284c7, #6366f1);
          color: #ffffff;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          margin-left: 0.35rem;
        }
      }

      .brand-tagline {
        font-size: 0.88rem;
        color: var(--text-muted);
        line-height: 1.6;
      }
    }

    .footer-nav {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;

      a {
        font-size: 0.88rem;
        color: var(--text-muted);
        transition: color 0.2s;

        &:hover {
          color: var(--accent-cyan);
        }
      }
    }

    .footer-socials {
      display: flex;
      gap: 0.75rem;

      .social-circle-link {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border-glass);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;

        &:hover {
          background: rgba(56, 189, 248, 0.15);
          border-color: var(--accent-cyan);
          color: #ffffff;
          transform: translateY(-2px);
        }
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      font-size: 0.82rem;
      color: var(--text-dim);
      flex-wrap: wrap;
      gap: 1rem;
    }

    .accent-text {
      color: var(--accent-cyan);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .footer-top {
        flex-direction: column;
        gap: 1.75rem;
      }
      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
