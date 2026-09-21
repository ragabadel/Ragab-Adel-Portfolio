import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="home" class="hero-section">
      <!-- Background Ambient Glows -->
      <div class="glow-orb orb-primary" aria-hidden="true"></div>
      <div class="glow-orb orb-secondary" aria-hidden="true"></div>

      <div class="container hero-container">
        <div class="hero-content">
          <!-- Status Pill -->
          <div class="status-badge" role="status">
            <span class="status-pulse" aria-hidden="true"></span>
            <span class="status-text">Open to Junior .NET Developer &amp; Backend Roles</span>
          </div>

          <!-- Developer Name & Titles -->
          <h1 class="hero-name">
            {{ profile?.professionalName || 'Ragab Adel' }}
          </h1>

          <div class="hero-role-wrapper">
            <h2 class="hero-role">
              {{ profile?.primaryRole || 'Junior .NET Developer' }}
            </h2>
            <p class="hero-subtitle">
              {{ profile?.roleSubtitle || 'C# | ASP.NET Core | Web API | SQL Server' }}
            </p>
          </div>

          <!-- Professional Statement -->
          <p class="hero-statement">
            {{ profile?.heroStatement || 'I am transitioning from IT infrastructure into software development and building practical .NET applications and APIs.' }}
          </p>

          <!-- Core Tech Pills (First thing recruiter sees) -->
          <div class="hero-tech-stack" aria-label="Core Technology Focus">
            <span class="stack-badge stack-csharp">C#</span>
            <span class="stack-badge stack-dotnet">.NET</span>
            <span class="stack-badge stack-asp">ASP.NET Core</span>
            <span class="stack-badge stack-api">Web API</span>
            <span class="stack-badge stack-ef">EF Core</span>
            <span class="stack-badge stack-sql">SQL Server</span>
            <span class="stack-badge stack-rest">IT Background</span>
          </div>

          <!-- Action CTA Buttons -->
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary" (click)="scrollToSection($event, 'projects')">
              <app-icon name="code" [size]="18"></app-icon>
              <span>View My Projects</span>
            </a>

            <a href="#contact" class="btn btn-secondary" (click)="scrollToSection($event, 'contact')">
              <app-icon name="envelope" [size]="18"></app-icon>
              <span>Contact Me</span>
            </a>

            <a [href]="profile?.cvPath || 'assets/cv/Ragab-Adel-CV.pdf'"
               class="btn btn-outline"
               download="Ragab-Adel-CV.pdf"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Download Curriculum Vitae PDF">
              <app-icon name="download" [size]="18"></app-icon>
              <span>Download CV</span>
            </a>
          </div>

          <!-- Social Links with WhatsApp Prominence -->
          <div class="hero-socials">
            <span class="social-label">Connect:</span>
            <div class="social-links-list">
              <!-- WhatsApp (Highlighted) -->
              <a [href]="profile?.whatsappUrl || 'https://wa.me/201149120925'"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="social-btn whatsapp-highlight"
                 aria-label="Contact Ragab Adel on WhatsApp">
                <app-icon name="whatsapp" [size]="20"></app-icon>
                <span class="btn-text">WhatsApp</span>
              </a>

              <!-- GitHub -->
              <a href="https://github.com/ragabadel"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="social-btn"
                 aria-label="Ragab Adel on GitHub">
                <app-icon name="github" [size]="20"></app-icon>
                <span class="btn-text">GitHub</span>
              </a>

              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/ragab-adel-al-saidi/"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="social-btn"
                 aria-label="Ragab Adel on LinkedIn">
                <app-icon name="linkedin" [size]="20"></app-icon>
                <span class="btn-text">LinkedIn</span>
              </a>

              <!-- Email -->
              <a href="mailto:RagabAdel862@hotmail.com"
                 class="social-btn"
                 aria-label="Email Ragab Adel">
                <app-icon name="envelope" [size]="20"></app-icon>
                <span class="btn-text">Email</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Profile Visual / Graphic Card -->
        <div class="hero-visual">
          <div class="visual-card-wrapper">
            <div class="avatar-ring">
            <img
              [src]="profile?.avatarPath || 'assets/images/profile/ragab-adel-portfolio-profile.png'"
              alt="Ragab Adel - Junior .NET Developer with IT infrastructure experience"
              class="avatar-image"
              loading="eager"
            />
            </div>
            <!-- Floating Mini Card: Location -->
            <div class="floating-badge badge-location">
              <app-icon name="map-pin" [size]="14" customClass="text-accent"></app-icon>
              <span>{{ profile?.location || 'Cairo, Egypt' }}</span>
            </div>
            <!-- Floating Mini Card: Professional Focus -->
            <div class="floating-badge badge-backend">
              <span class="indicator-dot"></span>
              <span>Transitioning to .NET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: calc(var(--nav-height) + 2rem);
      padding-bottom: 4rem;
      position: relative;
      overflow: hidden;
      background: radial-gradient(circle at 50% 20%, rgba(2, 132, 199, 0.08) 0%, transparent 60%);
    }

    .glow-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      pointer-events: none;
      z-index: 0;
    }
    .orb-primary {
      width: 450px;
      height: 450px;
      top: 10%;
      left: -100px;
      background: rgba(56, 189, 248, 0.12);
    }
    .orb-secondary {
      width: 400px;
      height: 400px;
      bottom: 10%;
      right: -100px;
      background: rgba(99, 102, 241, 0.12);
    }

    .hero-container {
      display: grid;
      grid-template-columns: 1.25fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.35rem 0.9rem;
      border-radius: var(--radius-full);
      width: fit-content;

      .status-pulse {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-emerald);
        box-shadow: 0 0 10px var(--accent-emerald);
        animation: pulse 2s infinite;
      }

      .status-text {
        font-size: 0.85rem;
        font-weight: 600;
        color: #a7f3d0;
      }
    }

    @keyframes pulse {
      0% { transform: scale(0.95); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 1; }
      100% { transform: scale(0.95); opacity: 0.8; }
    }

    .hero-name {
      font-size: 3.25rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: #ffffff;
      line-height: 1.1;
    }

    .hero-role-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;

      .hero-role {
        font-size: 1.75rem;
        font-weight: 800;
        background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.01em;
      }

      .hero-subtitle {
        font-size: 1.05rem;
        font-weight: 600;
        color: #cbd5e1;
        letter-spacing: 0.02em;
      }
    }

    .hero-statement {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--text-muted);
      border-left: 3px solid var(--accent-cyan);
      padding-left: 1rem;
      background: rgba(56, 189, 248, 0.03);
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }

    .hero-tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.25rem;

      .stack-badge {
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-full);
        border: 1px solid transparent;
        transition: transform 0.2s ease;

        &:hover {
          transform: translateY(-2px);
        }
      }

      .stack-csharp {
        background: rgba(168, 85, 247, 0.15);
        color: #d8b4fe;
        border-color: rgba(168, 85, 247, 0.35);
      }
      .stack-dotnet {
        background: rgba(99, 102, 241, 0.15);
        color: #c7d2fe;
        border-color: rgba(99, 102, 241, 0.35);
      }
      .stack-asp {
        background: rgba(2, 132, 199, 0.18);
        color: #bae6fd;
        border-color: rgba(56, 189, 248, 0.4);
      }
      .stack-api {
        background: rgba(56, 189, 248, 0.15);
        color: #7dd3fc;
        border-color: rgba(56, 189, 248, 0.3);
      }
      .stack-ef {
        background: rgba(14, 165, 233, 0.15);
        color: #38bdf8;
        border-color: rgba(14, 165, 233, 0.3);
      }
      .stack-sql {
        background: rgba(245, 158, 11, 0.15);
        color: #fcd34d;
        border-color: rgba(245, 158, 11, 0.3);
      }
      .stack-rest {
        background: rgba(16, 185, 129, 0.15);
        color: #6ee7b7;
        border-color: rgba(16, 185, 129, 0.3);
      }
    }

    .hero-cta-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      margin-top: 0.5rem;
    }

    .hero-socials {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;

      .social-label {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-dim);
      }

      .social-links-list {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        flex-wrap: wrap;
      }

      .social-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        font-size: 0.85rem;
        font-weight: 600;
        padding: 0.45rem 0.85rem;
        border-radius: var(--radius-md);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border-glass);
        color: var(--text-muted);
        transition: all 0.2s ease;

        &:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        &.whatsapp-highlight {
          background: rgba(37, 211, 102, 0.12);
          border-color: rgba(37, 211, 102, 0.35);
          color: #4ade80;

          &:hover {
            background: #25d366;
            color: #022c22;
            box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
          }
        }
      }
    }

    /* Hero Visual */
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .visual-card-wrapper {
      position: relative;
      width: 320px;
      height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-ring {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      padding: 6px;
      background: linear-gradient(135deg, #38bdf8, #6366f1 50%, #0f172a);
      box-shadow: 0 0 35px rgba(56, 189, 248, 0.25);
      position: relative;

      .avatar-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        background: var(--bg-surface);
      }
    }

    .floating-badge {
      position: absolute;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.5rem 0.9rem;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-main);
      box-shadow: var(--shadow-md);
      animation: float 4s ease-in-out infinite alternate;

      &.badge-location {
        bottom: 10px;
        left: -15px;
        animation-delay: 0s;
      }

      &.badge-backend {
        top: 20px;
        right: -20px;
        animation-delay: 1.5s;

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }
      }
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-8px); }
    }

    @media (max-width: 992px) {
      .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
      }
      .hero-content {
        align-items: center;
      }
      .hero-name {
        font-size: 2.75rem;
      }
      .hero-role-wrapper {
        align-items: center;
      }
      .hero-statement {
        border-left: none;
        border-top: 2px solid var(--accent-cyan);
        border-bottom: 2px solid var(--accent-cyan);
        padding: 0.75rem;
        border-radius: var(--radius-sm);
      }
      .hero-tech-stack {
        justify-content: center;
      }
      .hero-cta-group {
        justify-content: center;
      }
      .hero-socials {
        justify-content: center;
      }
      .visual-card-wrapper {
        width: 260px;
        height: 260px;
      }
      .avatar-ring {
        width: 240px;
        height: 240px;
      }
    }

    @media (max-width: 480px) {
      .hero-name {
        font-size: 2.25rem;
      }
      .hero-role {
        font-size: 1.35rem;
      }
      .hero-cta-group {
        flex-direction: column;
        width: 100%;
        .btn {
          width: 100%;
        }
      }
      .floating-badge.badge-location {
        left: 0;
      }
      .floating-badge.badge-backend {
        right: 0;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
