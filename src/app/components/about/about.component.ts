import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="about" class="section-wrapper about-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Profile Overview</span>
          <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
          <p class="section-subtitle">
            Building a .NET development career on top of practical IT support and infrastructure experience.
          </p>
        </div>

        <div class="about-grid">
          <!-- Story Narrative Column -->
          <div class="story-column">
            <div class="story-card glass-card">
              <h3 class="story-heading">
                From IT Infrastructure to .NET Development
              </h3>
              
              <div class="story-paragraphs">
                <p *ngFor="let paragraph of profile?.aboutStory">
                  {{ paragraph }}
                </p>
              </div>

              <!-- Quick Facts Grid -->
              <div class="quick-facts-grid">
                <div class="fact-item">
                  <span class="fact-label">Location</span>
                  <span class="fact-value">
                    <app-icon name="map-pin" [size]="14"></app-icon>
                    Cairo, Egypt
                  </span>
                </div>
                <div class="fact-item">
                  <span class="fact-label">Degree</span>
                  <span class="fact-value">
                    <app-icon name="graduation-cap" [size]="14"></app-icon>
                    B.Sc. Information Systems
                  </span>
                </div>
                <div class="fact-item">
                  <span class="fact-label">Languages</span>
                  <span class="fact-value">Arabic (Native), English (Good)</span>
                </div>
                <div class="fact-item">
                  <span class="fact-label">Military Status</span>
                  <span class="fact-value">Completed (March 2021)</span>
                </div>
              </div>

              <!-- CTA in About -->
              <div class="about-cta">
                <a [href]="profile?.cvPath || 'assets/cv/Ragab-Adel-CV.pdf'"
                   class="btn btn-primary"
                   download="Ragab-Adel-CV.pdf"
                   target="_blank"
                   rel="noopener noreferrer">
                  <app-icon name="download" [size]="16"></app-icon>
                  <span>Download Curriculum Vitae</span>
                </a>
                <a [href]="profile?.whatsappUrl || 'https://wa.me/201149120925'"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="btn btn-whatsapp">
                  <app-icon name="whatsapp" [size]="16"></app-icon>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Highlight Engineering Cards Column -->
          <div class="highlights-column">
            <div class="highlight-card glass-card" *ngFor="let h of profile?.highlights">
              <div class="highlight-icon-box">
                <app-icon [name]="h.icon" [size]="24"></app-icon>
              </div>
              <div class="highlight-info">
                <h4 class="highlight-title">{{ h.label }}</h4>
                <p class="highlight-desc">{{ h.description }}</p>
              </div>
            </div>

            <!-- Value Proposition Card -->
            <div class="value-prop-card">
              <h4 class="value-prop-title">How I Work</h4>
              <ul class="value-prop-list">
                <li>
                  <app-icon name="check-circle" [size]="16" customClass="text-emerald"></app-icon>
                  <span><strong>Development focus:</strong> I build C# applications and APIs around real workflows, data, validation, and clear structure.</span>
                </li>
                <li>
                  <app-icon name="check-circle" [size]="16" customClass="text-emerald"></app-icon>
                  <span><strong>Transferable experience:</strong> My IT background strengthens debugging, deployment awareness, security thinking, and user-focused delivery.</span>
                </li>
                <li>
                  <app-icon name="check-circle" [size]="16" customClass="text-emerald"></app-icon>
                  <span><strong>Continuous growth:</strong> I am actively deepening my .NET backend and enterprise application development skills.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 2rem;
      align-items: start;
    }

    .story-card {
      padding: 2.25rem;
    }

    .story-heading {
      font-size: 1.4rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.25rem;
      line-height: 1.3;
    }

    .story-paragraphs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 0.98rem;
      line-height: 1.7;
      color: var(--text-muted);
      margin-bottom: 1.75rem;
    }

    .quick-facts-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 1.25rem;
      background: rgba(0, 0, 0, 0.25);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-glass);
      margin-bottom: 1.75rem;

      .fact-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .fact-label {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-dim);
      }

      .fact-value {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-main);
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
    }

    .about-cta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
    }

    .highlights-column {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .highlight-card {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 1.4rem;

      .highlight-icon-box {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        background: rgba(56, 189, 248, 0.12);
        border: 1px solid rgba(56, 189, 248, 0.25);
        color: var(--accent-cyan);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .highlight-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.25rem;
      }

      .highlight-desc {
        font-size: 0.88rem;
        color: var(--text-muted);
        line-height: 1.5;
      }
    }

    .value-prop-card {
      background: linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(99, 102, 241, 0.08) 100%);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: var(--radius-lg);
      padding: 1.5rem;

      .value-prop-title {
        font-size: 1rem;
        font-weight: 700;
        color: #bae6fd;
        margin-bottom: 1rem;
      }

      .value-prop-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.45;

          strong {
            color: #ffffff;
          }
        }
      }
    }

    .text-emerald {
      color: #34d399;
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (max-width: 992px) {
      .about-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .quick-facts-grid {
        grid-template-columns: 1fr;
      }
      .about-cta {
        flex-direction: column;
        .btn {
          width: 100%;
        }
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
