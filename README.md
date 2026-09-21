# Ragab Adel | Junior .NET Developer Portfolio

A modern personal portfolio built with **Angular**, **TypeScript**, and **SCSS**. It positions Ragab Adel as a **Junior .NET Developer transitioning from IT support and infrastructure into software development**, while retaining hands-on experience in Windows Server, networking, FortiGate, CCTV/NVR, Python, and PowerShell as a practical advantage.

---

## 🚀 Key Highlights & Architecture

- **Balanced Professional Positioning**: The content reflects current infrastructure responsibilities, automation work, and an active .NET development path without overstating unverified technologies.
- **Modern Angular Architecture**: Built with Angular standalone components, TypeScript strict typing, and zero unnecessary external dependencies.
- **Centralized Portfolio Data**: Profile details, links, skills, projects, experience, education, and CV paths are maintained in one typed file.
- **Interactive WhatsApp Integration**: High-visibility WhatsApp buttons and a persistent floating WhatsApp widget with pulsing animation linked directly to `https://wa.me/201149120925`.
- **Synchronized CV Delivery**: Direct download of the current PDF (`Ragab-Adel-CV.pdf`), with an editable DOCX source stored beside it.
- **Production-Ready & Deployable**: Complete with `angular.json`, `package.json`, `tsconfig.json`, and `vercel.json` for 1-click deployment on Vercel.
- **Full Responsive Design**: Pixel-perfect layout across desktop (1920px, 1366px), tablet (1024px, 768px), and mobile (430px, 390px, 375px).

---

## 📁 Project Directory Structure

```text
Ragab-Adel-Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/               # Sticky navbar with active link indicator & mobile drawer
│   │   │   ├── hero/                 # Hero headline, CTAs, tech stack badges, profile visual
│   │   │   ├── about/                # Story, engineering highlights, quick facts
│   │   │   ├── skills/               # Infrastructure, automation, support, and development skills
│   │   │   ├── projects/             # .NET projects, IT automation, filters, and details modal
│   │   │   ├── experience/           # Vertical timeline (CTP, Aman Investment, RadioShack)
│   │   │   ├── education/            # Degree, Microsoft certs, CLS cert, Languages
│   │   │   ├── contact/              # Contact cards, social buttons, quick message composer
│   │   │   ├── footer/               # Brand, navigation links, copyright
│   │   │   └── floating-whatsapp/    # Persistent floating WhatsApp button with radar pulse
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   └── portfolio.data.ts # ⭐ CENTRAL CONFIGURATION FILE (Edit all data here!)
│   │   │   ├── models/
│   │   │   │   └── portfolio.model.ts# TypeScript interfaces and strong typing definitions
│   │   │   └── services/
│   │   │       └── portfolio.service.ts # Reactive data service providing data to components
│   │   ├── shared/
│   │   │   └── components/
│   │   │       └── icon.component.ts # Crisp, lightweight SVG vector icon system
│   │   ├── app.component.ts          # Root component & SEO meta tag initialization
│   │   └── app.config.ts             # Application configuration
│   ├── assets/
│   │   ├── cv/                       # Ragab-Adel-CV.pdf and editable Ragab-Adel-CV.docx
│   │   └── images/
│   │       ├── profile/              # Profile avatar / photo placeholder
│   │       └── projects/             # Vector graphic mockups for featured projects
│   ├── index.html                    # SEO tags, OpenGraph metadata, font preconnects
│   ├── main.ts                       # Angular standalone bootstrapping entry
│   └── styles.scss                   # Global design system, CSS variables & typography
├── angular.json                      # Angular CLI project configuration
├── package.json                      # Project dependencies and npm scripts
├── tsconfig.json                     # TypeScript compiler configuration
├── tsconfig.app.json                 # Angular application TypeScript configuration
├── vercel.json                       # Vercel deployment and SPA routing configuration
├── .gitignore                        # Git exclusion rules
└── README.md                         # Documentation and operational manual
```

---

## ⚙️ Quick Start (Run Locally)

### 1. Prerequisites
- **Node.js**: v20.19+, v22.12+, or v24+ installed on your system ([Download Node.js](https://nodejs.org/)).
- **Angular CLI** (optional, recommended):
  ```bash
  npm install -g @angular/cli
  ```

### 2. Installation
Open your terminal or command prompt in the project root:
```bash
# If using Windows PowerShell / Command Prompt at D:\Project\Ragab-Adel-Portfolio:
cd D:\Project\Ragab-Adel-Portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm start
# or:
ng serve
```
Open `http://192.168.20.44:4200/` from this computer or another device on the same local network. Use `npm run start:local` when the site should only be available on this computer.

### 4. Build for Production
```bash
npm run build
```
Compiled production bundles will be generated in `dist/ragab-adel-portfolio/browser/`.

### Validate before publishing
```bash
npm run check
npm run build
```

The validation command checks TypeScript and verifies that every referenced local asset exists.

---

## 🛠️ How to Customize Your Content (Single File Maintenance)

You do **not** need to touch individual Angular components to change your information. All content is stored centrally in:

👉 **`src/app/core/data/portfolio.data.ts`**

### Modifying Social Links or Phone / WhatsApp:
```typescript
profile: {
  fullName: 'Ragab Adel Ragab Ali',
  professionalName: 'Ragab Adel',
  primaryRole: 'Junior .NET Developer',
  email: 'RagabAdel862@hotmail.com',
  phone: '+20 114 912 0925',
  whatsappUrl: 'https://wa.me/201149120925',
  // Change any URL or handle here!
}
```

### Adding a GitHub Link to Project 2 (Product Management API):
Open `src/app/core/data/portfolio.data.ts`, find `product-management-api`, and set `githubUrl`:
```typescript
{
  id: 'product-management-api',
  title: 'Product Management REST API',
  githubUrl: 'https://github.com/ragabadel/your-new-repo-name',
  // ...
}
```

### Updating Your Profile Photo:
1. Place your photo (e.g. `ragab-photo.jpg` or `ragab-photo.png`) in `src/assets/images/profile/`.
2. In `src/app/core/data/portfolio.data.ts`, update:
   ```typescript
   avatarPath: 'assets/images/profile/ragab-photo.jpg',
   ```

### Updating Your CV:
Replace `src/assets/cv/Ragab-Adel-CV.pdf` and its editable `Ragab-Adel-CV.docx` source together, then keep `cvPath` in `portfolio.data.ts` pointed to the PDF.

---

## 🌐 Deploying to Vercel

The repository includes a pre-configured `vercel.json` file to ensure Single Page Application (SPA) routing works out of the box.

### Method 1: Using GitHub & Vercel Dashboard (Easiest)
1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete developer portfolio"
   git branch -M main
   git remote add origin https://github.com/ragabadel/Ragab-Adel-Portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New** > **Project** and select your `Ragab-Adel-Portfolio` repository.
4. Vercel will automatically detect **Angular**:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/ragab-adel-portfolio/browser`
5. Click **Deploy**. Your site will be live with a secure HTTPS URL in less than 2 minutes!

### Method 2: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📄 License
This portfolio project is created for **Ragab Adel**. Free to customize and maintain.
