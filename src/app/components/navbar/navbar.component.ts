import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <header class="navbar" [class.navbar-scrolled]="isScrolled">
      <div class="container navbar-container">
        <!-- Brand Logo -->
        <a href="#home" class="brand-logo" (click)="scrollToSection($event, 'home')">
          <span class="brand-prefix">&lt;</span>
          <span class="brand-name">{{ profile?.professionalName || 'Ragab Adel' }}</span>
          <span class="brand-suffix">/&gt;</span>
          <span class="brand-badge">.NET</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-links desktop-nav" aria-label="Main Navigation">
          <a
            *ngFor="let item of navItems"
            [href]="'#' + item.id"
            class="nav-link"
            [class.active]="activeSection === item.id"
            (click)="scrollToSection($event, item.id)">
            {{ item.label }}
          </a>
        </nav>

        <!-- Right Action Button -->
        <div class="nav-actions desktop-nav">
          <a [href]="profile?.cvPath || 'assets/cv/Ragab-Adel-CV.pdf'"
             class="btn btn-outline cv-btn"
             download="Ragab-Adel-CV.pdf"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Download Curriculum Vitae PDF">
            <app-icon name="download" [size]="16"></app-icon>
            <span>CV</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="mobile-menu-btn"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu">
          <app-icon [name]="mobileMenuOpen ? 'close' : 'menu'" [size]="24"></app-icon>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" [class.open]="mobileMenuOpen" (click)="closeMobileMenu()">
        <nav id="mobile-navigation" class="mobile-nav-content" (click)="$event.stopPropagation()" aria-label="Mobile Navigation">
          <a
            *ngFor="let item of navItems"
            [href]="'#' + item.id"
            class="mobile-nav-link"
            [class.active]="activeSection === item.id"
            (click)="scrollToSection($event, item.id)">
            {{ item.label }}
          </a>
          <div class="mobile-drawer-footer">
            <a [href]="profile?.cvPath || 'assets/cv/Ragab-Adel-CV.pdf'"
               class="btn btn-primary w-full"
               download="Ragab-Adel-CV.pdf"
               target="_blank"
               rel="noopener noreferrer"
               (click)="closeMobileMenu()">
              <app-icon name="download" [size]="18"></app-icon>
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--nav-height);
      z-index: 1000;
      background: rgba(10, 15, 29, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-glass);
      transition: all 0.3s ease;
    }

    .navbar-scrolled {
      background: rgba(10, 15, 29, 0.95);
      border-bottom-color: rgba(56, 189, 248, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    .brand-logo {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text-main);

      .brand-prefix, .brand-suffix {
        color: var(--accent-cyan);
        font-family: monospace;
        font-weight: 600;
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

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .nav-link {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-muted);
      position: relative;
      padding: 0.35rem 0;

      &:hover {
        color: var(--text-main);
      }

      &.active {
        color: var(--accent-cyan);
        font-weight: 600;

        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-cyan);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px var(--accent-cyan);
        }
      }
    }

    .cv-btn {
      padding: 0.45rem 1rem;
      font-size: 0.85rem;
    }

    .mobile-menu-btn {
      display: none;
      color: var(--text-main);
      padding: 0.5rem;
      border-radius: var(--radius-sm);
      transition: background 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    /* Mobile Drawer */
    .mobile-drawer {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;

      &.open {
        opacity: 1;
        visibility: visible;
      }
    }

    .mobile-nav-content {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-glass);
      padding: 1.5rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
      transform: translateY(-10px);
      transition: transform 0.3s ease;

      .open & {
        transform: translateY(0);
      }
    }

    .mobile-nav-link {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-muted);
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);

      &:hover, &.active {
        color: var(--accent-cyan);
        padding-left: 0.5rem;
      }
    }

    .mobile-drawer-footer {
      margin-top: 1rem;
    }

    .w-full {
      width: 100%;
    }

    @media (max-width: 868px) {
      .desktop-nav {
        display: none;
      }
      .mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `]
})
export class NavbarComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 30;
    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.activeSection = sectionId;
    this.closeMobileMenu();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateActiveSection(): void {
    const scrollPos = window.scrollY + 100;
    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection = item.id;
          break;
        }
      }
    }
  }
}
