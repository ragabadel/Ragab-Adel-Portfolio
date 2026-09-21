import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioService } from '../../core/services/portfolio.service';
import { ProjectItem } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],

  template: `
    <section id="projects" class="section-wrapper projects-section">
      <div class="container">

        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Featured Work</span>

          <h2 class="section-title">
            Projects &amp; <span class="gradient-text">Automation</span>
          </h2>

          <p class="section-subtitle">
            Practical .NET solutions and infrastructure automation built from real operational needs.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button
            type="button"
            class="tab-btn"
            [class.active]="selectedCategory === 'ALL'"
            (click)="setCategory('ALL')"
          >
            All Projects ({{ projects.length }})
          </button>

          <button
            type="button"
            class="tab-btn"
            [class.active]="selectedCategory === 'Full Stack'"
            (click)="setCategory('Full Stack')"
          >
            Full Stack (.NET MVC)
          </button>

          <button
            type="button"
            class="tab-btn"
            [class.active]="selectedCategory === 'Backend / Web API'"
            (click)="setCategory('Backend / Web API')"
          >
            Backend &amp; Web API
          </button>

          <button
            type="button"
            class="tab-btn"
            [class.active]="selectedCategory === 'IT Automation'"
            (click)="setCategory('IT Automation')"
          >
            IT Automation
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <article
            *ngFor="let project of filteredProjects"
            class="project-card glass-card"
            [class.card-featured]="project.isFeatured"
          >
            <!-- Project Preview Header -->
            <div class="card-media">
              <img
                [src]="project.image"
                [alt]="project.title + ' preview'"
                class="project-thumbnail"
                loading="lazy"
              />

              <div class="media-overlay">
                <button
                  type="button"
                  class="btn btn-primary btn-sm preview-btn"
                  (click)="openModal(project)"
                  [attr.aria-label]="'View technical architecture and details for ' + project.title"
                >
                  <app-icon
                    name="code"
                    [size]="16"
                  ></app-icon>

                  <span>Architecture &amp; Details</span>
                </button>
              </div>

              <span class="category-pill">
                {{ project.category }}
              </span>
            </div>

            <!-- Project Content -->
            <div class="card-body">

              <div class="title-row">
                <h3 class="project-title">
                  {{ project.title }}
                </h3>

                <span
                  class="featured-badge"
                  *ngIf="project.isFeatured"
                >
                  Featured
                </span>
              </div>

              <p class="project-desc">
                {{ project.shortDescription }}
              </p>

              <!-- Technologies Stack -->
              <div
                class="project-tech-tags"
                aria-label="Technologies used"
              >
                <span
                  *ngFor="let tech of project.technologies"
                  class="tech-tag"
                  [class.tech-tag-primary]="
                    tech.includes('.NET') ||
                    tech.includes('C#') ||
                    tech.includes('SQL') ||
                    tech.includes('FortiGate') ||
                    tech.includes('Python') ||
                    tech.includes('PowerShell')
                  "
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Action Buttons -->
              <div class="card-actions">

                <!-- GitHub Repository Link -->
                <a
                  *ngIf="project.githubUrl; else noRepoTpl"
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline card-btn"
                  [attr.aria-label]="'View source code for ' + project.title"
                >
                  <app-icon
                    name="github"
                    [size]="18"
                  ></app-icon>

                  <span>View Source Code</span>
                </a>

                <ng-template #noRepoTpl>
                  <span
                    class="repo-placeholder"
                    title="Repository configuration prepared for upload"
                  >
                    <app-icon
                      name="github"
                      [size]="16"
                    ></app-icon>

                    <span>Repository coming soon</span>
                  </span>
                </ng-template>

                <!-- Details Modal Trigger -->
                <button
                  type="button"
                  class="btn btn-secondary card-btn"
                  (click)="openModal(project)"
                  [attr.aria-label]="'Read full specifications for ' + project.title"
                >
                  <span>Project Details</span>

                  <app-icon
                    name="arrow-right"
                    [size]="16"
                  ></app-icon>
                </button>

              </div>
            </div>
          </article>
        </div>

      </div>

      <!-- Project Details Modal -->
      <div
        class="modal-backdrop"
        *ngIf="activeModalProject"
        (click)="closeModal()"
        role="dialog"
        aria-modal="true"
        [attr.aria-labelledby]="'modal-title-' + activeModalProject.id"
        [attr.aria-describedby]="'modal-description-' + activeModalProject.id"
      >
        <div
          #modalDialog
          class="modal-dialog"
          tabindex="-1"
          (click)="$event.stopPropagation()"
        >
          <div class="modal-header">

            <div class="modal-title-group">
              <span class="modal-tag">
                {{ activeModalProject.category }}
              </span>

              <h3
                [id]="'modal-title-' + activeModalProject.id"
                class="modal-title"
              >
                {{ activeModalProject.title }}
              </h3>
            </div>

            <button
              type="button"
              class="modal-close-btn"
              (click)="closeModal()"
              aria-label="Close project modal"
            >
              <app-icon
                name="close"
                [size]="22"
              ></app-icon>
            </button>

          </div>

          <div class="modal-body">

            <div class="modal-image-wrapper">
              <img
                [src]="activeModalProject.image"
                [alt]="activeModalProject.title + ' project preview'"
                class="modal-img"
              />
            </div>

            <div class="modal-section">
              <h4 class="modal-section-title">
                Overview &amp; Implementation
              </h4>

              <p [id]="'modal-description-' + activeModalProject.id" class="modal-text">
                {{ activeModalProject.fullDescription }}
              </p>
            </div>

            <div class="modal-section">
              <h4 class="modal-section-title">
                Key Architectural Highlights
              </h4>

              <ul class="modal-features-list">
                <li
                  *ngFor="let feat of activeModalProject.features"
                >
                  <app-icon
                    name="check-circle"
                    [size]="16"
                    customClass="text-accent"
                  ></app-icon>

                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <div class="modal-section">
              <h4 class="modal-section-title">
                Technologies
              </h4>

              <div class="project-tech-tags">
                <span
                  *ngFor="let tech of activeModalProject.technologies"
                  class="tech-tag tech-tag-primary"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>

          <div class="modal-footer">

            <a
              *ngIf="activeModalProject.githubUrl"
              [href]="activeModalProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
              [attr.aria-label]="'View ' + activeModalProject.title + ' on GitHub'"
            >
              <app-icon
                name="github"
                [size]="18"
              ></app-icon>

              <span>View on GitHub</span>
            </a>

            <button
              type="button"
              class="btn btn-secondary"
              (click)="closeModal()"
            >
              Close
            </button>

          </div>
        </div>
      </div>

    </section>
  `,

  styles: [`
    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 2.5rem;
      flex-wrap: wrap;

      .tab-btn {
        padding: 0.55rem 1.25rem;
        font-size: 0.9rem;
        font-weight: 600;
        border-radius: var(--radius-full);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--border-glass);
        color: var(--text-muted);
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.2);
        }

        &.active {
          background: rgba(56, 189, 248, 0.15);
          border-color: var(--accent-cyan);
          color: #ffffff;
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.2);
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      padding: 0;
      overflow: hidden;
      border: 1px solid var(--border-glass);

      &.card-featured {
        border-color: rgba(56, 189, 248, 0.3);
      }
    }

    .card-media {
      position: relative;
      width: 100%;
      height: 220px;
      background: #0b132b;
      overflow: hidden;

      .project-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .media-overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 15, 29, 0.75);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        .project-thumbnail {
          transform: scale(1.04);
        }

        .media-overlay {
          opacity: 1;
        }
      }

      .category-pill {
        position: absolute;
        top: 12px;
        left: 12px;
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        background: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(6px);
        color: var(--accent-cyan);
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-sm);
        border: 1px solid rgba(56, 189, 248, 0.3);
      }
    }

    .card-body {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 0.75rem;

      .project-title {
        font-size: 1.35rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: -0.01em;
        margin: 0;
      }

      .featured-badge {
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        color: #fcd34d;
        background: rgba(245, 158, 11, 0.15);
        border: 1px solid rgba(245, 158, 11, 0.35);
        padding: 0.15rem 0.5rem;
        border-radius: var(--radius-sm);
        flex-shrink: 0;
      }
    }

    .project-desc {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }

    .project-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1.5rem;
      margin-top: auto;
    }

    .card-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      padding-top: 1rem;
      border-top: 1px solid var(--border-glass);

      .card-btn {
        flex: 1;
        min-width: 150px;
        font-size: 0.85rem;
        padding: 0.6rem 1rem;
      }
    }

    .repo-placeholder {
      flex: 1;
      min-width: 150px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-dim);
      padding: 0.6rem 0.75rem;
      border-radius: var(--radius-md);
      background: rgba(255, 255, 255, 0.02);
      border: 1px dashed rgba(255, 255, 255, 0.15);
    }

    /* Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      animation: fadeIn 0.25s ease;
    }

    .modal-dialog {
      background: var(--bg-surface);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: var(--radius-lg);
      max-width: 650px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      animation: slideUp 0.3s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-header {
      padding: 1.5rem 1.75rem;
      border-bottom: 1px solid var(--border-glass);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      .modal-title-group {
        min-width: 0;
      }

      .modal-tag {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--accent-cyan);
      }

      .modal-title {
        font-size: 1.4rem;
        font-weight: 800;
        color: #ffffff;
        margin-top: 0.25rem;
        margin-bottom: 0;
      }

      .modal-close-btn {
        color: var(--text-muted);
        padding: 0.4rem;
        border-radius: var(--radius-sm);
        transition: color 0.2s;
        cursor: pointer;

        &:hover {
          color: #ffffff;
        }
      }
    }

    .modal-body {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .modal-image-wrapper {
        border-radius: var(--radius-md);
        overflow: hidden;
        border: 1px solid var(--border-glass);
        height: 220px;

        .modal-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }

      .modal-section-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.5rem;
      }

      .modal-text {
        font-size: 0.95rem;
        line-height: 1.65;
        color: var(--text-muted);
        margin: 0;
      }

      .modal-features-list {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        padding: 0;
        margin: 0;
        list-style: none;

        li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.45;
        }
      }
    }

    .modal-footer {
      padding: 1.25rem 1.75rem;
      border-top: 1px solid var(--border-glass);
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .text-accent {
      color: var(--accent-cyan);
      flex-shrink: 0;
      margin-top: 2px;
    }

    @media (max-width: 868px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .card-media {
        height: 210px;
      }
    }

    @media (max-width: 576px) {
      .filter-tabs {
        justify-content: flex-start;
        gap: 0.5rem;

        .tab-btn {
          font-size: 0.8rem;
          padding: 0.5rem 0.85rem;
        }
      }

      .card-media {
        height: 190px;

        .media-overlay {
          opacity: 1;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 1rem;
          background: linear-gradient(
            to top,
            rgba(10, 15, 29, 0.85),
            transparent 60%
          );
        }
      }

      .card-body {
        padding: 1.25rem;
      }

      .title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
      }

      .card-actions {
        flex-direction: column;
        align-items: stretch;

        .card-btn {
          width: 100%;
        }
      }

      .repo-placeholder {
        width: 100%;
      }

      .modal-backdrop {
        padding: 0.75rem;
      }

      .modal-dialog {
        max-height: 95vh;
      }

      .modal-header,
      .modal-body,
      .modal-footer {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }

      .modal-body {
        .modal-image-wrapper {
          height: 180px;
        }
      }

      .modal-footer {
        flex-direction: column;

        .btn {
          width: 100%;
        }
      }
    }
  `]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly portfolioService = inject(PortfolioService);
  @ViewChild('modalDialog') private modalDialog?: ElementRef<HTMLElement>;
  private modalOpener: HTMLElement | null = null;

  projects: ProjectItem[] = [];
  filteredProjects: ProjectItem[] = [];

  selectedCategory = 'ALL';

  activeModalProject: ProjectItem | null = null;

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.applyFilter();
      },
      error: (error) => {
        console.error('Failed to load portfolio projects:', error);

        this.projects = [];
        this.filteredProjects = [];
      }
    });
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (this.selectedCategory === 'ALL') {
      this.filteredProjects = [...this.projects];
      return;
    }

    this.filteredProjects = this.projects.filter(
      (project) => project.category === this.selectedCategory
    );
  }

  openModal(project: ProjectItem): void {
    this.modalOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.activeModalProject = project;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      setTimeout(() => this.modalDialog?.nativeElement.focus());
    }
  }

  closeModal(): void {
    this.activeModalProject = null;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      setTimeout(() => this.modalOpener?.focus());
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleModalKeyboard(event: KeyboardEvent): void {
    if (!this.activeModalProject) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeModal();
      return;
    }

    if (event.key !== 'Tab' || !this.modalDialog) {
      return;
    }

    const focusable = Array.from(
      this.modalDialog.nativeElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusable.length === 0) {
      event.preventDefault();
      this.modalDialog.nativeElement.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
