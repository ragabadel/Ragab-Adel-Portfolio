import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { EducationItem, CertificationItem, LanguageItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="education" class="section-wrapper education-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Academic &amp; Credentials</span>
          <h2 class="section-title">Education &amp; <span class="gradient-text">Certifications</span></h2>
          <p class="section-subtitle">
            Formal information systems background combined with Microsoft-aligned software engineering credentials.
          </p>
        </div>

        <div class="education-grid">
          <!-- Left: Formal Education -->
          <div class="education-column">
            <h3 class="column-title">
              <app-icon name="graduation-cap" [size]="20" customClass="text-accent"></app-icon>
              <span>Degree &amp; Academics</span>
            </h3>

            <div *ngFor="let edu of educationList" class="education-card glass-card">
              <div class="edu-header">
                <h4 class="edu-degree">{{ edu.degree }}</h4>
                <span class="edu-grade-badge">Grade: {{ edu.grade }}</span>
              </div>
              <p class="edu-institution">{{ edu.institution }}</p>
              <p class="edu-details">{{ edu.details }}</p>
              <div class="edu-focus-pills">
                <span class="tech-tag">Information Systems</span>
                <span class="tech-tag">Database Architecture</span>
                <span class="tech-tag">Software Engineering</span>
              </div>
            </div>

            <!-- Languages Card -->
            <div class="languages-card glass-card">
              <h4 class="card-inner-title">
                <span>Languages</span>
              </h4>
              <div class="languages-list">
                <div *ngFor="let lang of languages" class="lang-item">
                  <div class="lang-info">
                    <span class="lang-name">{{ lang.language }}</span>
                    <span class="lang-proficiency">{{ lang.proficiency }}</span>
                  </div>
                  <div class="lang-meter" [class.lang-native]="lang.language === 'Arabic'">
                    <div class="meter-bar" [style.width]="lang.language === 'Arabic' ? '100%' : '80%'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Professional Certifications -->
          <div class="certifications-column">
            <h3 class="column-title">
              <app-icon name="shield-check" [size]="20" customClass="text-accent"></app-icon>
              <span>Professional Certifications</span>
            </h3>

            <div class="certs-list">
              <div *ngFor="let cert of certifications" class="cert-card glass-card">
                <div class="cert-badge-box">
                  <app-icon name="check-circle" [size]="20"></app-icon>
                </div>
                <div class="cert-content">
                  <h4 class="cert-title">{{ cert.title }}</h4>
                  <div class="cert-meta">
                    <span class="cert-issuer">{{ cert.issuer }}</span>
                    <span class="cert-divider">•</span>
                    <span class="cert-type">{{ cert.credentialType }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Military Status Card -->
            <div class="military-card glass-card">
              <div class="military-icon-box">
                <app-icon name="shield-check" [size]="20"></app-icon>
              </div>
              <div class="military-content">
                <span class="military-label">Military Service</span>
                <span class="military-status">Completed (March 2021)</span>
                <p class="military-desc">Fully discharged and eligible for immediate full-time employment &amp; international remote engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }

    .column-title {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.5rem;
    }

    .education-column, .certifications-column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .education-card {
      padding: 1.75rem;

      .edu-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 0.35rem;
        flex-wrap: wrap;
      }

      .edu-degree {
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffffff;
      }

      .edu-grade-badge {
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #38bdf8;
        background: rgba(56, 189, 248, 0.12);
        border: 1px solid rgba(56, 189, 248, 0.3);
        padding: 0.2rem 0.6rem;
        border-radius: var(--radius-sm);
      }

      .edu-institution {
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-cyan);
        margin-bottom: 0.85rem;
      }

      .edu-details {
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--text-muted);
        margin-bottom: 1.25rem;
      }

      .edu-focus-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
      }
    }

    .languages-card {
      padding: 1.5rem;

      .card-inner-title {
        font-size: 1rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 1.25rem;
      }

      .languages-list {
        display: flex;
        flex-direction: column;
        gap: 1.15rem;
      }

      .lang-item {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }

      .lang-info {
        display: flex;
        justify-content: space-between;
        font-size: 0.88rem;

        .lang-name {
          font-weight: 700;
          color: var(--text-main);
        }
        .lang-proficiency {
          color: var(--text-muted);
          font-size: 0.82rem;
        }
      }

      .lang-meter {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: var(--radius-full);
        overflow: hidden;

        .meter-bar {
          height: 100%;
          background: linear-gradient(90deg, #0284c7, #38bdf8);
          border-radius: var(--radius-full);
        }
      }
    }

    /* Certifications */
    .certs-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .cert-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.25rem;

      .cert-badge-box {
        width: 44px;
        height: 44px;
        border-radius: var(--radius-md);
        background: rgba(56, 189, 248, 0.12);
        color: var(--accent-cyan);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .cert-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.2rem;
      }

      .cert-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.82rem;
        color: var(--text-muted);
        flex-wrap: wrap;

        .cert-issuer {
          color: var(--accent-cyan);
          font-weight: 600;
        }
      }
    }

    .military-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.25rem;
      background: rgba(16, 185, 129, 0.06);
      border-color: rgba(16, 185, 129, 0.25);

      .military-icon-box {
        color: #34d399;
        flex-shrink: 0;
        margin-top: 2px;
      }

      .military-content {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .military-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #a7f3d0;
          letter-spacing: 0.05em;
        }

        .military-status {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .military-desc {
          font-size: 0.82rem;
          color: #cbd5e1;
          margin-top: 0.25rem;
        }
      }
    }

    .text-accent {
      color: var(--accent-cyan);
    }

    @media (max-width: 868px) {
      .education-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EducationComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  educationList: EducationItem[] = [];
  certifications: CertificationItem[] = [];
  languages: LanguageItem[] = [];

  ngOnInit(): void {
    this.portfolioService.getEducation().subscribe(data => this.educationList = data);
    this.portfolioService.getCertifications().subscribe(data => this.certifications = data);
    this.portfolioService.getLanguages().subscribe(data => this.languages = data);
  }
}
