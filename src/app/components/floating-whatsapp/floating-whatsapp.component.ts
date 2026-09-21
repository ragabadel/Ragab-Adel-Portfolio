import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ProfileInfo } from '../../core/models/portfolio.model';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="floating-whatsapp-container">
      <a
        [href]="profile?.whatsappUrl || 'https://wa.me/201149120925'"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-whatsapp-btn"
        aria-label="Direct WhatsApp Chat with Ragab Adel">
        
        <!-- Pulsing radar wave -->
        <span class="wave-pulse" aria-hidden="true"></span>
        <span class="wave-pulse wave-pulse-delay" aria-hidden="true"></span>

        <div class="whatsapp-icon-wrapper">
          <app-icon name="whatsapp" [size]="30"></app-icon>
        </div>

        <span class="whatsapp-tooltip">Chat with me on WhatsApp</span>
      </a>
    </div>
  `,
  styles: [`
    .floating-whatsapp-container {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
    }

    .floating-whatsapp-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #25d366;
      color: #ffffff;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
        background: #22c55e;
        box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);

        .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-12px);
        }
      }

      &:focus-visible {
        outline: 3px solid #ffffff;
        outline-offset: 3px;
      }
    }

    .whatsapp-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .wave-pulse {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid #25d366;
      opacity: 0.8;
      animation: pulseWave 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
      pointer-events: none;
      z-index: 1;
    }

    .wave-pulse-delay {
      animation-delay: 1.2s;
    }

    @keyframes pulseWave {
      0% {
        transform: scale(0.95);
        opacity: 0.8;
      }
      70% {
        transform: scale(1.45);
        opacity: 0;
      }
      100% {
        transform: scale(1.45);
        opacity: 0;
      }
    }

    .whatsapp-tooltip {
      position: absolute;
      right: 70px;
      white-space: nowrap;
      background: #0f172a;
      color: #ffffff;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: var(--shadow-md);
      opacity: 0;
      visibility: hidden;
      transform: translateX(0);
      transition: all 0.25s ease;
      pointer-events: none;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent #0f172a;
      }
    }

    @media (max-width: 768px) {
      .floating-whatsapp-container {
        bottom: 20px;
        right: 20px;
      }
      .floating-whatsapp-btn {
        width: 52px;
        height: 52px;
      }
      .whatsapp-tooltip {
        display: none;
      }
    }
  `]
})
export class FloatingWhatsappComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  profile?: ProfileInfo;

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
