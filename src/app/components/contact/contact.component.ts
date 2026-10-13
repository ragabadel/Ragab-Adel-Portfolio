import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section id="contact" class="section-wrapper contact-section">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">Get in Touch</span>
          <h2 class="section-title">Let's <span class="gradient-text">Talk</span></h2>
          <p class="section-subtitle">
            For Junior .NET Developer, Backend Developer, System Administrator, or Firewall Administrator opportunities, reach me by email, phone, WhatsApp, or LinkedIn.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Left: Contact Channels & Cards -->
          <div class="contact-cards-col">
            <!-- WhatsApp Highlight Card -->
            <a
              [href]="profile?.whatsappUrl || 'https://wa.me/201149120925'"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-card whatsapp-card glass-card">
              <div class="contact-card-icon whatsapp-icon-bg">
                <app-icon name="whatsapp" [size]="26"></app-icon>
              </div>
              <div class="contact-card-details">
                <span class="contact-type">WhatsApp Direct</span>
                <span class="contact-val">{{ profile?.whatsappNumber || '+20 114 912 0925' }}</span>
                <span class="contact-hint">Open a WhatsApp conversation</span>
              </div>
              <app-icon name="external-link" [size]="16" customClass="card-arrow"></app-icon>
            </a>

            <!-- Email Card -->
            <a
              [href]="'mailto:' + (profile?.email || 'RagabAdel862@hotmail.com')"
              class="contact-card glass-card">
              <div class="contact-card-icon">
                <app-icon name="envelope" [size]="24"></app-icon>
              </div>
              <div class="contact-card-details">
                <span class="contact-type">Email Address</span>
                <span class="contact-val">{{ profile?.email || 'RagabAdel862@hotmail.com' }}</span>
                <span class="contact-hint">Send direct message</span>
              </div>
              <app-icon name="external-link" [size]="16" customClass="card-arrow"></app-icon>
            </a>

            <!-- Phone Card -->
            <a
              [href]="'tel:' + (profile?.phone || '+201149120925')"
              class="contact-card glass-card">
              <div class="contact-card-icon">
                <app-icon name="phone" [size]="24"></app-icon>
              </div>
              <div class="contact-card-details">
                <span class="contact-type">Direct Phone</span>
                <span class="contact-val">{{ profile?.phone || '+20 114 912 0925' }}</span>
                <span class="contact-hint">Cairo, Egypt</span>
              </div>
              <app-icon name="external-link" [size]="16" customClass="card-arrow"></app-icon>
            </a>

            <!-- Location Card -->
            <div class="contact-card glass-card location-card">
              <div class="contact-card-icon">
                <app-icon name="map-pin" [size]="24"></app-icon>
              </div>
              <div class="contact-card-details">
                <span class="contact-type">Location &amp; Availability</span>
                <span class="contact-val">{{ profile?.location || 'Cairo, Egypt' }}</span>
                <span class="contact-hint">Open to .NET, systems, and firewall administration roles</span>
              </div>
            </div>

            <!-- Social Action Buttons Row -->
            <div class="social-actions-row">
              <a href="https://www.linkedin.com/in/ragab-adel-al-saidi/"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="btn btn-secondary social-action-btn">
                <app-icon name="linkedin" [size]="18"></app-icon>
                <span>LinkedIn Profile</span>
              </a>

              <a href="https://github.com/ragabadel"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="btn btn-secondary social-action-btn">
                <app-icon name="github" [size]="18"></app-icon>
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

          <!-- Right: Interactive Message Composer -->
          <div class="contact-form-col">
            <div class="message-composer-card glass-card">
              <h3 class="composer-title">Send a Quick Message</h3>
              <p class="composer-desc">
                This form opens your email app or WhatsApp with the message prepared. Nothing is stored by this website.
              </p>

              <form #contactForm="ngForm" (ngSubmit)="sendEmailMessage()" class="composer-form">
                <div class="form-group">
                  <label for="contact-name" class="form-label">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    [(ngModel)]="senderName"
                    placeholder="e.g. John Smith / Hiring Manager"
                    class="form-control"
                    autocomplete="name"
                    maxlength="80"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contact-subject" class="form-label">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    [(ngModel)]="messageSubject"
                    placeholder="e.g. Junior .NET Developer Opportunity"
                    class="form-control"
                    maxlength="120"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contact-msg" class="form-label">Message</label>
                  <textarea
                    id="contact-msg"
                    rows="4"
                    name="message"
                    [(ngModel)]="messageBody"
                    placeholder="Hi Ragab, I reviewed your portfolio and would like to discuss..."
                    class="form-control"
                    maxlength="1500"
                    required></textarea>
                </div>

                <div class="composer-actions">
                  <button type="submit" class="btn btn-primary w-full-mobile" [disabled]="contactForm.invalid">
                    <app-icon name="envelope" [size]="18"></app-icon>
                    <span>Send via Email</span>
                  </button>

                  <button type="button" (click)="sendViaWhatsApp()" class="btn btn-whatsapp w-full-mobile" [disabled]="contactForm.invalid">
                    <app-icon name="whatsapp" [size]="18"></app-icon>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
      align-items: start;
    }

    .contact-grid > *,
    .contact-card-details {
      min-width: 0;
    }

    .contact-cards-col {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.35rem 1.5rem;
      text-decoration: none;
      transition: all 0.3s ease;

      .contact-card-icon {
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid rgba(56, 189, 248, 0.25);
        color: var(--accent-cyan);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .contact-card-details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 0.2rem;
        min-width: 0;
      }

      .contact-type {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-dim);
      }

      .contact-val {
        font-size: 1.05rem;
        font-weight: 700;
        color: #ffffff;
        overflow-wrap: anywhere;
      }

      .contact-hint {
        font-size: 0.8rem;
        color: var(--text-muted);
      }

      .card-arrow {
        color: var(--text-dim);
        transition: transform 0.2s, color 0.2s;
      }

      &:hover .card-arrow {
        color: var(--accent-cyan);
        transform: translate(2px, -2px);
      }

      &.whatsapp-card {
        border-color: rgba(37, 211, 102, 0.3);
        background: linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(15, 23, 42, 0.85) 100%);

        .whatsapp-icon-bg {
          background: rgba(37, 211, 102, 0.2);
          border-color: rgba(37, 211, 102, 0.4);
          color: #4ade80;
        }

        &:hover {
          border-color: #25d366;
          box-shadow: 0 0 24px rgba(37, 211, 102, 0.25);
        }
      }
    }

    .social-actions-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 0.5rem;

      .social-action-btn {
        width: 100%;
        font-size: 0.9rem;
      }
    }

    /* Composer */
    .message-composer-card {
      padding: 2.25rem;

      .composer-title {
        font-size: 1.35rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.5rem;
      }

      .composer-desc {
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.55;
        margin-bottom: 1.75rem;
      }
    }

    .composer-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      .form-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: #cbd5e1;
      }

      .form-control {
        background: rgba(10, 15, 29, 0.7);
        border: 1px solid var(--border-glass);
        border-radius: var(--radius-md);
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        color: #ffffff;
        font-family: inherit;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;

        &:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
        }

        &::placeholder {
          color: var(--text-dim);
        }
      }

      textarea.form-control {
        resize: vertical;
      }
    }

    .composer-actions {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    .btn:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
      box-shadow: none;
    }

    @media (max-width: 868px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
      .social-actions-row {
        grid-template-columns: 1fr;
      }
      .composer-actions {
        flex-direction: column;
        .w-full-mobile {
          width: 100%;
        }
      }
    }

    @media (max-width: 480px) {
      .contact-card {
        gap: 0.85rem;
        padding: 1rem;

        .contact-card-icon {
          width: 42px;
          height: 42px;
        }

        .card-arrow {
          display: none;
        }
      }

      .message-composer-card {
        padding: 1.25rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;

  senderName = '';
  messageSubject = '';
  messageBody = '';

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }

  sendEmailMessage(): void {
    const email = this.profile?.email || 'RagabAdel862@hotmail.com';
    const subj = encodeURIComponent(this.messageSubject || 'Professional Inquiry from Portfolio');
    const bodyText = `Hi Ragab,\n\n${this.messageBody}\n\nBest regards,\n${this.senderName}`;
    const mailtoUrl = `mailto:${email}?subject=${subj}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  }

  sendViaWhatsApp(): void {
    const phone = (this.profile?.whatsappNumber || '+201149120925').replace(/\D/g, '');
    let text = `Hi Ragab,`;
    if (this.senderName) {
      text += ` my name is ${this.senderName}.`;
    }
    if (this.messageSubject) {
      text += ` Re: ${this.messageSubject}.`;
    }
    if (this.messageBody) {
      text += `\n\n${this.messageBody}`;
    }
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
}
