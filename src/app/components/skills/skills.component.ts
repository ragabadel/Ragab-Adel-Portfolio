import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SkillCategory } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="skills" class="section-wrapper skills-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Technical Competencies</span>
          <h2 class="section-title">Technical <span class="gradient-text">Skills</span></h2>
          <p class="section-subtitle">
            Development skills come first, supported by hands-on experience in IT infrastructure, automation, systems, and networking.
          </p>
        </div>

        <!-- Skills Categories Grid -->
        <div class="skills-grid">
          <div
            *ngFor="let cat of skillCategories"
            class="skill-category-card glass-card"
            [class.category-featured]="cat.isPrimaryBackend"
            [class.category-additional]="cat.id === 'additional'">
            
            <div class="category-header">
              <div class="header-titles">
                <div class="category-badge" *ngIf="cat.isPrimaryBackend">Core Focus</div>
                <h3 class="category-name">{{ cat.categoryName }}</h3>
                <p class="category-subtitle">{{ cat.categorySubtitle }}</p>
              </div>
              <div class="category-icon-indicator" [ngSwitch]="cat.id">
                <app-icon *ngSwitchCase="'backend'" name="server" [size]="22"></app-icon>
                <app-icon *ngSwitchCase="'database'" name="database" [size]="22"></app-icon>
                <app-icon *ngSwitchCase="'networking-security'" name="shield-check" [size]="22"></app-icon>
                <app-icon *ngSwitchCase="'windows-infrastructure'" name="server" [size]="22"></app-icon>
                <app-icon *ngSwitchCase="'automation'" name="code" [size]="22"></app-icon>
                <app-icon *ngSwitchCase="'frontend-tools'" name="code" [size]="22"></app-icon>
                <app-icon *ngSwitchDefault name="shield-check" [size]="22"></app-icon>
              </div>
            </div>

            <div class="skills-chips-wrapper">
              <div
                *ngFor="let skill of cat.skills"
                class="skill-chip"
                [class.chip-featured]="skill.featured"
                [class.chip-secondary]="cat.id === 'additional'">
                <span class="chip-name">{{ skill.name }}</span>
                <span class="chip-dot" *ngIf="skill.featured" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Recruiter Callout Banner -->
        <div class="skills-banner">
          <div class="banner-icon">
            <app-icon name="code" [size]="28"></app-icon>
          </div>
          <div class="banner-content">
            <h4 class="banner-title">Current Career Focus: .NET Development</h4>
            <p class="banner-text">
              Building stronger backend and web development experience with C#, ASP.NET Core, Web API, Entity Framework Core, and SQL Server, while using my IT background as an operational advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
    }

    .skill-category-card {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &.category-featured {
        border-color: rgba(56, 189, 248, 0.3);
        background: linear-gradient(135deg, rgba(19, 29, 51, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%);
        box-shadow: 0 4px 20px rgba(2, 132, 199, 0.12);

        &:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 8px 30px rgba(56, 189, 248, 0.2);
        }
      }

      &.category-additional {
        grid-column: span 2;
        background: rgba(15, 23, 42, 0.6);
        border-color: rgba(255, 255, 255, 0.05);

        .category-name {
          font-size: 1rem;
          color: #94a3b8;
        }
      }
    }

    .category-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .category-badge {
      display: inline-block;
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 0.15rem 0.5rem;
      border-radius: var(--radius-sm);
      margin-bottom: 0.35rem;
    }

    .category-name {
      font-size: 1.25rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.01em;
    }

    .category-subtitle {
      font-size: 0.85rem;
      color: var(--text-dim);
      margin-top: 0.2rem;
    }

    .category-icon-indicator {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-glass);
      color: var(--accent-cyan);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .skills-chips-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .skill-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.88rem;
      font-weight: 600;
      padding: 0.45rem 0.9rem;
      border-radius: var(--radius-md);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-glass);
      color: var(--text-main);
      transition: all 0.25s ease;

      &:hover {
        background: rgba(56, 189, 248, 0.15);
        border-color: rgba(56, 189, 248, 0.4);
        color: #ffffff;
        transform: translateY(-2px);
      }

      &.chip-featured {
        background: rgba(2, 132, 199, 0.15);
        border-color: rgba(56, 189, 248, 0.3);
        color: #bae6fd;
        font-weight: 700;

        .chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }
      }

      &.chip-secondary {
        background: rgba(255, 255, 255, 0.02);
        border-color: rgba(255, 255, 255, 0.05);
        color: var(--text-muted);
        font-size: 0.82rem;

        &:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-main);
        }
      }
    }

    /* Recruiter Banner */
    .skills-banner {
      margin-top: 2.5rem;
      background: linear-gradient(90deg, rgba(2, 132, 199, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: var(--radius-lg);
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;

      .banner-icon {
        width: 52px;
        height: 52px;
        border-radius: var(--radius-md);
        background: rgba(56, 189, 248, 0.2);
        color: var(--accent-cyan);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .banner-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.25rem;
      }

      .banner-text {
        font-size: 0.9rem;
        color: #cbd5e1;
        line-height: 1.5;
      }
    }

    @media (max-width: 868px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
      .skill-category-card.category-additional {
        grid-column: span 1;
      }
      .skills-banner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  skillCategories: SkillCategory[] = [];

  ngOnInit(): void {
    this.portfolioService.getSkillCategories().subscribe(data => {
      const displayOrder = new Map([
        ['backend', 0],
        ['database', 1],
        ['frontend-tools', 2],
        ['automation', 3],
        ['windows-infrastructure', 4],
        ['networking-security', 5],
        ['cctv-support', 6]
      ]);

      this.skillCategories = [...data].sort(
        (a, b) => (displayOrder.get(a.id) ?? 99) - (displayOrder.get(b.id) ?? 99)
      );
    });
  }
}
