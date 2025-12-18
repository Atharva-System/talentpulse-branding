# Talent Pulse - AI-Powered Recruitment Platform

```
████████╗ █████╗ ██╗     ███████╗███╗   ██╗████████╗     ██████╗ ██╗   ██╗██╗     ███████╗███████╗
╚══██╔══╝██╔══██╗██║     ██╔════╝████╗  ██║╚══██╔══╝     ██╔══██╗██║   ██║██║     ██╔════╝██╔════╝
   ██║   ███████║██║     █████╗  ██╔██╗ ██║   ██║        ██████╔╝██║   ██║██║     ███████╗███████╗
   ██║   ██╔══██║██║     ██╔══╝  ██║╚██╗██║   ██║        ██╔═══╝ ██║   ██║██║     ╚════██║██╔════╝
   ██║   ██║  ██║███████╗███████╗██║ ╚████║   ██║        ██║     ╚██████╔╝███████╗███████║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝        ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝
```

## 📋 Product Overview

**Talent Pulse** is an intelligent HR recruitment management platform that revolutionizes the entire hiring workflow from job requisition to candidate onboarding. Built with cutting-edge AI technology and modern web standards, featuring a mobile-first liquid UI design that streamlines recruitment operations with artificial intelligence.

## 🎯 Core Business Workflow

### 1. Job Lifecycle Management

```
Department Manager → Job Requisition Request
                ↓
HR Administrator → Reviews & Approves Requisition
                ↓
HR Administrator → Creates/Manages Job Templates
                ↓
HR Recruiter → Creates Job Posting (using approved template)
                ↓
Active Recruitment Pipeline Begins
```

### 2. Candidate Journey

```
Candidate Application → CV Upload & AI Parsing → AI Screening & Scoring
                ↓
Recruiter Review → Shortlisting → Interview Scheduling
                ↓
Interview Process → Feedback Collection → Final Decision
                ↓
Offer Management → Hiring → Onboarding
```

## 👥 User Roles & Permissions

### HR Administrator

**Primary Responsibilities:**

- **Job Templates Management**: Create, edit, and maintain company-wide reusable job description templates
- **Job Requisitions Approval**: Review and approve/reject hiring requests from Department Managers
- **User Management**: Manage user accounts, roles, and permissions
- **System Configuration**: Global settings, AI parameters, integrations

**Menu Access:**

- Dashboard (System-wide KPIs)
- Job Templates (Primary responsibility)
- Job Requisitions (Review & approval)
- Users & Departments
- Settings & Configuration
- Reports & Analytics

### Department Manager

**Primary Responsibilities:**

- **Job Requisitions**: Submit hiring requests for their team's needs
- **Team Oversight**: Monitor hiring pipeline for their department
- **Budget Approval**: Participate in hiring decision approval process

**Menu Access:**

- Dashboard (Department-specific metrics)
- Job Requisitions (Create & submit requests)
- Team Hiring (View department's recruitment pipeline)
- Settings (Personal preferences)

### HR Recruiter

**Primary Responsibilities:**

- **Job Posting Management**: Create live job postings from approved requisitions and templates
- **Candidate Pipeline**: Manage the entire recruitment process
- **Interview Coordination**: Schedule and coordinate interviews
- **Candidate Communication**: Handle all candidate interactions

**Menu Access:**

- Dashboard (Personal recruitment metrics)
- Jobs (Create & manage job postings)
- Candidates (Database & profiles)
- Applications (Pipeline management)
- Interviews (Scheduling & feedback)
- Reports (Personal performance metrics)

### Interviewer

**Primary Responsibilities:**

- **Interview Execution**: Conduct scheduled interviews
- **Feedback Provision**: Submit detailed interview feedback and ratings
- **Candidate Evaluation**: Assess technical and cultural fit

**Menu Access:**

- Dashboard (Upcoming interviews & calendar)
- My Interviews (Assigned interviews & feedback forms)
- Settings (Personal preferences)

## 🛠️ Technical Architecture

### Frontend Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (Latest)
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Routing**: React Router v6
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios with interceptors
- **UI Components**: Custom components with Tailwind
- **Icons**: React Icons (Remix Icons)
- **Date Handling**: React Day Picker
- **File Upload**: React Dropzone

### Tailwind CSS v4 Configuration

```bash
# Installation
npm install tailwindcss @tailwindcss/vite

# Vite Configuration (vite.config.ts)
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()]
})

# CSS Configuration (src/styles/globals.css)
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-primary: #a855f7;
  --color-primary-dark: #0f172a;
  --color-primary-light: #ffffff;
}
```

### 📁 Project Structure (Following ARCHITECTURE.md Standard)

```
src/
├── app/                    ✅ Entry point & root components
│   └── App.tsx            # Main App component
├── components/            ✅ Reusable UI components
│   ├── ui/               ✅ Base UI components
│   │   ├── ProfileMenu.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeToggle.tsx
│   └── layout/           ✅ Layout components (header, sidebar)
├── features/             ✅ Feature-based modules
│   ├── auth/            ✅ Authentication feature
│   │   └── LoginPage.tsx
│   ├── dashboard/       ✅ Dashboard feature
│   │   └── DashboardPage.tsx
│   └── job-templates/   ✅ Job templates feature
│       ├── components/  # Feature-specific components
│       ├── pages/       # Feature pages
│       ├── store/       # Feature state management
│       ├── types/       # Feature TypeScript types
│       └── index.ts     # Feature exports
├── lib/                 ✅ Core libraries & helpers
│   ├── api/            # API client & utilities
│   ├── roleConfig.ts   # Role configuration
│   └── useTheme.ts     # Theme management hook
├── store/               ✅ Global state management (Zustand)
│   ├── authStore.ts    # Authentication state
│   └── userStore.ts    # User state management
├── types/               ✅ TypeScript definitions
│   └── index.ts        # Core type definitions
├── constants/           ✅ App constants & configs
│   └── index.ts        # Configuration constants
├── context/             ✅ React Contexts
│   └── ThemeContext.tsx # Theme context provider
├── styles/              ✅ Global styles
│   └── globals.css     # Global CSS with Tailwind
├── utils/               ✅ Utility functions
│   └── index.ts        # Helper functions
├── assets/              ✅ Static assets
│   └── react.svg       # Images, icons, etc.
├── main.tsx            ✅ App entry point
└── vite-env.d.ts       ✅ Vite type definitions
```

### 🏗️ Architecture Benefits

1. **🎯 Feature-Based Organization**: Self-contained modules for scalability
2. **📦 Clear Separation**: UI components, business logic, and utilities properly separated
3. **🚀 Developer Experience**: Short import paths and intuitive navigation
4. **📏 Industry Standard**: Follows React/Vite best practices
5. **🔧 Maintainable**: Easy to add features without restructuring

### 📋 Structure Rules

- **Features are self-contained**: Each feature has its own components, pages, store, and types
- **Shared components in `/components/ui/`**: Reusable UI components across features
- **Global state in `/store/`**: Application-wide state management with Zustand
- **Utilities in `/lib/`**: Core business logic and helper functions
- **Clean imports**: Use path aliases for shorter, cleaner import statements

## 🎨 Design System

### Visual Identity

- **Theme**: Purple primary color (#a855f7) with dark/light mode support
- **Typography**: Inter font family for clean, modern readability
- **Layout**: Mobile-first responsive design
- **Cursor Behavior**: Hand cursor for all interactive elements, not-allowed for disabled

### Key Design Principles

1. **Purple Branding**: Consistent use of #a855f7 for primary actions
2. **White Backgrounds**: Pure white backgrounds throughout (no light gray)
3. **Proper Cursors**: Pointer cursor for clickable elements, not-allowed for disabled
4. **Theme Support**: Seamless dark/light mode switching
5. **Mobile-First**: Responsive design starting from mobile

## 🚀 Getting Started

### Prerequisites

```bash
Node.js 18+ and npm
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd talent-pulse-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd talent-pulse-frontend

# Create environment configuration file
# Create .env.development in the root folder with the following:
```

**`.env.development` Configuration:**

```shellscript
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ENV=development
VITE_AI_SERVICE_URL=http://127.0.0.1:8000/api
```

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Current Implementation Status

### ✅ Completed Features

1. **Project Setup**

   - ✅ Vite + React 18 + TypeScript
   - ✅ Tailwind CSS v4 configuration
   - ✅ Enterprise folder structure
   - ✅ Theme system (dark/light mode)
   - ✅ Basic components and utilities

2. **Design System**

   - ✅ Purple branding (#a855f7)
   - ✅ Inter font family
   - ✅ Cursor styling standards
   - ✅ Mobile-first responsive design
   - ✅ Dark/light theme toggle

3. **Architecture**
   - ✅ Feature-based organization
   - ✅ TypeScript definitions
   - ✅ Zustand state management setup
   - ✅ Utility functions and constants

### 🚧 Next Development Phase

1. **Authentication System**

   - Role-based authentication
   - Login page with validation
   - Mock API integration
   - JWT token management

2. **User Management**

   - Role-specific dashboards
   - Permission-based routing
   - User profile management

3. **Core Features**
   - Job templates management
   - Job requisitions workflow
   - Candidate management
   - Interview system

## 🔒 Security & Performance

### Security Measures

- JWT token management
- Role-based route protection
- Input validation and sanitization
- Secure file upload handling

### Performance Optimizations

- Code splitting by routes and features
- Lazy loading of components
- Bundle size optimization
- Fast refresh during development

## 📱 Mobile-First Features

### Touch-Optimized Interface

- Large touch targets (minimum 44px)
- Responsive navigation
- Optimized form inputs
- Smooth animations and transitions

## 🎯 Success Metrics

### Performance Goals

- < 2 seconds initial page load
- 95+ Lighthouse performance score
- < 1 second route transitions
- Smooth 60fps animations

### User Experience Goals

- 90%+ mobile usability score
- Intuitive navigation (< 3 clicks to any feature)
- Comprehensive error handling
- Real-time updates and notifications

---

## � Documentation

### Organized Documentation Structure

All detailed documentation is organized in the `docs/` folder by feature and content type:

```
docs/
├── features/                    # Feature-specific documentation
│   ├── candidates/             # Candidate management docs
│   ├── interviews/             # Interview system docs
│   ├── job-templates/          # Job template docs
│   └── jobs/                   # Job posting docs
├── architecture/               # System architecture & planning
├── guides/                     # Development guides & standards
├── implementation/             # Implementation summaries
└── testing/                    # Test documentation
```

**Key Documentation Files:**

- `docs/guides/CODING_STANDARDS.md` - Complete frontend coding standards
- `docs/guides/API_INTEGRATION_GUIDE.md` - API integration patterns
- `docs/architecture/ARCHITECTURE.md` - System design overview
- `docs/guides/SIMPLIFIED_RECRUITMENT_FLOW.md` - Recruitment workflow guide

### Quick Navigation

- **New to the project?** Start with `docs/architecture/ARCHITECTURE.md`
- **Working on a feature?** Check the relevant `docs/features/` folder
- **Need coding guidelines?** See `docs/guides/CODING_STANDARDS.md`
- **API integration help?** Review `docs/guides/API_INTEGRATION_GUIDE.md`

## �📞 Contact & Support

This project implements a production-ready, scalable, and intelligent recruitment platform interface that streamlines the entire hiring workflow while providing an excellent user experience across all devices.

**Ready for the next development phase: Role-based Authentication & Login System!** 🚀
