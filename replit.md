# Ersa Ulaşım - Corporate Website

## Overview

This is a modern corporate website for Ersa Ulaşım, a Turkish transportation and infrastructure company. The application is built as a full-stack web application using React with TypeScript on the frontend and Express.js with Node.js on the backend. It features a multilingual interface (Turkish, English, Arabic) with comprehensive company information and services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Internationalization**: Custom language context provider for multi-language support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Mode**: Vite middleware integration for HMR
- **Production**: Static file serving with Express

## Key Components

### Frontend Components
- **Navigation**: Responsive header with language switching and smooth scrolling
- **Hero Section**: Full-screen landing area with company branding
- **About Section**: Company information with mission/vision statements
- **Services Section**: Detailed service offerings with visual cards
- **Values Section**: Core company values with overlay design
- **Stats Section**: Animated counter components for key metrics
- **Contact Section**: Contact form and company information
- **Footer**: Site links and social media integration

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route handling system
- **Vite Integration**: Development server with HMR support
- **Error Handling**: Global error middleware

### Shared Components
- **Database Schema**: Drizzle schema definitions shared between client and server
- **Type Definitions**: TypeScript types for consistent data structures

## Data Flow

### Frontend Data Flow
1. **Component Rendering**: React components render with TypeScript type safety
2. **State Management**: TanStack Query manages server state and caching
3. **Language Context**: Custom provider handles internationalization
4. **API Requests**: Centralized API client with error handling
5. **Form Handling**: React Hook Form with Zod validation

### Backend Data Flow
1. **Request Processing**: Express middleware chain handles requests
2. **Route Handling**: Modular route registration system
3. **Data Storage**: Abstracted storage interface (currently in-memory)
4. **Response Generation**: JSON responses with proper error handling
5. **Static Serving**: Production builds served as static files

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Icons**: Font Awesome, Lucide React icons
- **Fonts**: Google Fonts (Inter), custom typography
- **Animations**: CSS animations with intersection observers
- **Date Handling**: date-fns for date formatting
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database serverless
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for server bundling

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **Type Checking**: TypeScript compiler
- **Linting**: ESLint configuration
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with HMR
- **Database**: Neon Database development instance
- **Environment Variables**: DATABASE_URL for database connection
- **Hot Reload**: Full-stack hot reloading with Vite middleware

### Production Deployment
- **Build Process**: 
  1. Frontend build with Vite (outputs to `dist/public`)
  2. Backend build with esbuild (outputs to `dist`)
- **Static Serving**: Express serves frontend static files
- **Database**: PostgreSQL with Drizzle migrations
- **Process Management**: Node.js process with environment-based configuration

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with client/server/shared directories for better code organization and type sharing
2. **TypeScript Throughout**: Full TypeScript implementation for type safety across the entire stack
3. **Drizzle ORM**: Chosen for type-safe database operations and excellent TypeScript integration
4. **Vite Integration**: Custom Vite setup for both development and production builds
5. **Component Architecture**: Modular component system with clear separation of concerns
6. **Internationalization**: Custom solution for multi-language support without heavy dependencies
7. **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
8. **Performance**: Optimized images, lazy loading, and efficient state management

The application follows modern web development practices with a focus on type safety, performance, and maintainability. The architecture supports both development and production environments while maintaining a clean separation between frontend and backend concerns.