import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ExperienceItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="experience" class="section-wrapper experience-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Career History</span>
          <h2 class="section-title">Professional <span class="gradient-text">Experience</span></h2>
          <p class="section-subtitle">
            Hands-on support across networks, Windows infrastructure, security appliances, CCTV/NVR systems, endpoints, and operational automation.
          </p>
        </div>

        <!-- Vertical Timeline Container -->
        <div class="timeline-wrapper">
          <div class="timeline-line" aria-hidden="true"></div>

          <div
            *ngFor="let exp of experiences; let i = index"
            class="timeline-item"
            [class.is-current]="exp.isCurrent">
            
            <!-- Timeline Node Indicator -->
            <div class="timeline-node" aria-hidden="true">
              <div class="node-dot">
                <app-icon *ngIf="exp.isCurrent" name="briefcase" [size]="14"></app-icon>
                <div *ngIf="!exp.isCurrent" class="node-inner-circle"></div>
              </div>
            </div>

            <!-- Timeline Card -->
            <div class="timeline-card glass-card">
              <div class="card-meta">
                <div class="role-company-group">
                  <h3 class="role-title">{{ exp.role }}</h3>
                  <h4 class="company-name">{{ exp.company }}</h4>
                </div>
                <div class="badge-time-group">
                  <span class="status-current-badge" *ngIf="exp.isCurrent">Current Position</span>
                  <span class="period-pill">
                    <app-icon name="calendar" [size]="14"></app-icon>
                    {{ exp.period }}
                  </span>
                </div>
              </div>

              <!-- Responsibilities List -->
              <ul class="responsibilities-list">
                <li *ngFor="let resp of exp.responsibilities">
                  <app-icon name="check-circle" [size]="15" customClass="text-accent"></app-icon>
                  <span>{{ resp }}</span>
                </li>
              </ul>

              <!-- Technologies / Skills Used -->
              <div class="exp-tech-tags" *ngIf="exp.technologies.length">
                <span *ngFor="let tech of exp.technologies" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Value Bridge Note -->
        <div class="experience-bridge-note">
          <div class="note-icon">
            <app-icon name="shield-check" [size]="24"></app-icon>
          </div>
          <p class="note-text">
            <strong>What I bring:</strong> Practical infrastructure ownership, structured troubleshooting, clear documentation, and automation that makes recurring technical work safer and easier to repeat.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-wrapper {
      position: relative;
      max-width: 860px;
      margin: 0 auto;
      padding: 1rem 0;
    }

    .timeline-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 28px;
      width: 2px;
      background: linear-gradient(180deg, var(--accent-cyan) 0%, rgba(56, 189, 248, 0.2) 80%, transparent 100%);
    }

    .timeline-item {
      position: relative;
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      &.is-current {
        .node-dot {
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          border-color: #ffffff;
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.6);
        }
        .timeline-card {
          border-color: rgba(56, 189, 248, 0.35);
          background: linear-gradient(135deg, rgba(19, 29, 51, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
        }
      }
    }

    .timeline-node {
      position: relative;
      z-index: 2;
      flex-shrink: 0;
      width: 58px;
      display: flex;
      justify-content: center;
      padding-top: 1.25rem;

      .node-dot {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--bg-surface);
        border: 2px solid var(--accent-cyan);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);

        .node-inner-circle {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
        }
      }
    }

    .timeline-card {
      flex-grow: 1;
      padding: 1.75rem;
    }

    .card-meta {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;

      .role-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: -0.01em;
      }

      .company-name {
        font-size: 1rem;
        font-weight: 600;
        color: var(--accent-cyan);
        margin-top: 0.2rem;
      }
    }

    .badge-time-group {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.35rem;

      .status-current-badge {
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #6ee7b7;
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.35);
        padding: 0.15rem 0.5rem;
        border-radius: var(--radius-sm);
      }

      .period-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.82rem;
        font-weight: 500;
        color: var(--text-dim);
      }
    }

    .responsibilities-list {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-bottom: 1.25rem;

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        font-size: 0.92rem;
        line-height: 1.55;
        color: var(--text-muted);
      }
    }

    .exp-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-glass);
    }

    .text-accent {
      color: var(--accent-cyan);
      flex-shrink: 0;
      margin-top: 3px;
    }

    /* Experience Bridge Note */
    .experience-bridge-note {
      max-width: 860px;
      margin: 3rem auto 0;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1.75rem;
      display: flex;
      align-items: center;
      gap: 1.25rem;

      .note-icon {
        color: var(--accent-cyan);
        flex-shrink: 0;
      }

      .note-text {
        font-size: 0.88rem;
        color: #cbd5e1;
        line-height: 1.55;

        strong {
          color: #ffffff;
        }
      }
    }

    @media (max-width: 768px) {
      .timeline-line {
        left: 18px;
      }
      .timeline-node {
        width: 38px;
        padding-top: 1.5rem;
        .node-dot {
          width: 26px;
          height: 26px;
        }
      }
      .timeline-item {
        gap: 1rem;
      }
      .card-meta {
        flex-direction: column;
        align-items: flex-start;
      }
      .badge-time-group {
        align-items: flex-start;
      }
      .experience-bridge-note {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  experiences: ExperienceItem[] = [];

  ngOnInit(): void {
    this.portfolioService.getExperiences().subscribe(data => {
      this.experiences = data;
    });
  }
}
