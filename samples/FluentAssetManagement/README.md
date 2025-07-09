# Fluent Asset Management Sample

A modern, responsive asset management application built with React, TypeScript, Vite, and Fluent UI v9. This sample demonstrates how to create a professional web application with browser-like navigation, dark mode support, and a DataGrid-based interface that works seamlessly on both desktop and mobile devices.

## Features

- **Browser-Like Navigation**: Navigation history with back/forward buttons and persistent sidebar
- **DataGrid Tables**: Professional sortable tables using Fluent UI DataGrid components  
- **Dark Mode Support**: Theme toggle with system preference detection and localStorage persistence
- **Responsive Design**: Adapts fluidly to different screen sizes with mobile hamburger menu
- **Modern UI**: Built with Fluent UI v9 components and CSS Modules for maintainable styling
- **Mobile-First**: Responsive navigation with sidebar overlay on mobile devices
- **Asset Management**: Complete asset listing with filtering, search, and status badges
- **Rich Dashboard**: Interactive statistics cards that navigate to respective pages
- **Theme Persistence**: User theme preferences saved across sessions
- **TypeScript Safety**: Full type safety throughout the application

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Fluent UI v9** (@fluentui/react-components) with DataGrid
- **Fluent UI Icons v2** (@fluentui/react-icons)
- **CSS Modules** for component-scoped styling
- **React Router** for navigation state management
- **Power Apps Code SDK** for Power Platform integration

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Sidebar navigation with routing
│   └── Header.tsx       # Header with hamburger menu and navigation controls
├── contexts/           # React contexts for state management
│   ├── NavigationHistoryContext.tsx # Browser-like navigation history
│   └── ThemeContext.tsx # Dark/light mode theme management
├── hooks/              # Custom React hooks
│   └── useNavigationHistory.ts # Navigation history logic
├── data/               # Mock data and type definitions
│   └── mockData.ts     # Sample asset data with TypeScript interfaces
├── pages/              # Page components (mixed styling approaches)
│   ├── Dashboard.tsx   # Dashboard with clickable stat cards (CSS Modules)
│   ├── Assets.tsx      # Asset management with DataGrid table (CSS Modules)
│   ├── Locations.tsx   # Location management (legacy makeStyles)
│   ├── Employees.tsx   # Employee directory (legacy makeStyles)
│   ├── Reports.tsx     # Analytics and reports (legacy makeStyles)
│   └── Settings.tsx    # Theme settings and preferences (CSS Modules)
├── App.tsx             # Main app component with layout
├── App.css             # App layout and responsive styles
├── index.css           # Global styles and CSS variables
├── main.tsx            # Application entry point with theme provider
└── PowerProvider.tsx   # Power Platform SDK integration
```

## Key Design Principles

### Modern Component Architecture
- **CSS Modules**: Component-scoped styling for better maintainability
- **Context-Based State**: Theme and navigation state managed via React Context
- **TypeScript**: Full type safety throughout the application
- **Reusable Components**: Modular design with clear separation of concerns

### Professional Data Display
- **Fluent UI DataGrid**: Enterprise-grade sortable tables with proper TypeScript support
- **Status Badges**: Color-coded status indicators with consistent theming
- **Responsive Tables**: Horizontal scrolling on mobile while maintaining data integrity
- **Search and Filtering**: Real-time filtering across multiple data fields

### Responsive Layout
- **Flexbox-based Layout**: Modern CSS layout with sidebar and main content areas
- **Adaptive Navigation**: Persistent sidebar on desktop, overlay on mobile
- **Hamburger Menu**: Mobile-friendly navigation toggle
- **Fluid Grid Systems**: CSS Grid for responsive card layouts
- **Mobile Breakpoints**: Responsive design at 768px and below

### Theme System
- **Dark Mode Support**: System preference detection with manual toggle
- **Theme Persistence**: User preferences saved in localStorage
- **CSS Variables**: Fluent UI design tokens for consistent theming
- **Smooth Transitions**: Animated theme switching

### Navigation Experience
- **Browser-Like History**: Back/forward navigation with proper state management
- **Persistent Sidebar**: Navigation remains visible and functional
- **Route Management**: Proper routing without URL dependencies
- **Navigation Context**: Centralized navigation logic with hooks

## Pages Overview

1. **Dashboard**: Interactive overview with clickable stat cards that navigate to respective pages
2. **Assets**: Professional DataGrid table with sortable columns, status badges, search, and filtering
3. **Locations**: Location management interface with basic table display
4. **Employees**: Employee directory interface with asset assignment tracking
5. **Reports**: Analytics and reporting with usage statistics and insights
6. **Settings**: Theme toggle with dark/light mode and system preference detection

## Component Status & Architecture

### Modernized Components (CSS Modules + Latest Features)
- ✅ **Dashboard**: CSS Modules, clickable navigation cards, responsive stat display
- ✅ **Assets**: CSS Modules, DataGrid table with sorting, filtering, and status badges
- ✅ **Settings**: CSS Modules, comprehensive theme management with persistence
- ✅ **Header**: CSS Modules, responsive hamburger menu and navigation controls
- ✅ **Navigation**: CSS Modules, proper left alignment, responsive sidebar behavior

### Legacy Components (makeStyles + Basic Tables)
- ⚠️ **Locations**: Uses makeStyles with eslint disable, basic Table component
- ⚠️ **Employees**: Uses makeStyles with eslint disable, basic Table component  
- ⚠️ **Reports**: Uses makeStyles with eslint disable, basic Table component

### Removed Components
- ❌ **PageNavigation**: Removed unused component to improve code maintainability

## Responsive Features

- **Desktop (>768px)**: Full sidebar navigation with hamburger toggle
- **Mobile (≤768px)**: Sidebar overlay with hamburger menu
- **DataGrid Tables**: Horizontal scroll on mobile to maintain data integrity
- **Touch-Friendly**: All interactions optimized for touch devices
- **Theme Adaptation**: Dark/light mode works seamlessly across all screen sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization & Future Enhancements

This sample serves as a starting point and can be easily customized:

- **Data Integration**: Replace mock data with real API calls or Dataverse connections
- **Modernize Remaining Pages**: Convert Locations, Employees, and Reports to use CSS Modules and DataGrid
- **Theme Customization**: Extend the theme system with custom color schemes and branding
- **Enhanced Tables**: Add pagination, advanced filtering, row selection, and CRUD operations
- **Progressive Enhancement**: Add forms, detailed views, and modal dialogs
- **Performance Optimization**: Implement virtual scrolling for large datasets
- **Accessibility**: Enhance ARIA labels and keyboard navigation
- **Testing**: Add unit tests and E2E testing with proper coverage

## Code Quality & Maintainability

### Recent Improvements
- **Removed Unused Code**: Cleaned up PageNavigation component that was not being used
- **Fixed TypeScript Issues**: Added proper eslint disable comments for legacy makeStyles usage
- **Improved Documentation**: Enhanced component documentation and README clarity
- **Consistent Styling**: Clear separation between modern CSS Modules and legacy styling approaches
- **ESLint Configuration**: Optimized linting rules to suppress expected warnings for architectural patterns
- **Bundle Optimization**: Implemented manual chunking for better performance and caching

## Architecture Highlights

### State Management
- **ThemeContext**: Centralized theme state with localStorage persistence and system preference detection
- **NavigationHistoryContext**: Browser-like navigation with back/forward support and route management
- **Custom Hooks**: `useNavigationHistory` for clean component integration and reusable logic

### Styling Architecture
- **CSS Modules**: Scoped styles preventing class name conflicts (used in modern components)
- **Legacy Support**: Maintained makeStyles approach in older components with proper TypeScript handling
- **Design Tokens**: Fluent UI variables for consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach with desktop enhancements and fluid breakpoints
- **Theme Variables**: CSS custom properties for seamless dark/light mode transitions

### Performance & Build Optimization
- **Tree Shaking**: Only imported Fluent UI components are bundled, reducing bundle size
- **Manual Chunking**: Vendor libraries separated into logical chunks for better caching
- **CSS Modules**: Scoped styles reduce CSS bundle size and improve maintainability
- **TypeScript**: Compile-time optimizations, type safety, and better developer experience
- **Vite Build**: Fast development server and optimized production builds with ES modules
- **Code Splitting**: Automatic component-level splitting for better loading performance
- **Bundle Analysis**: Optimized chunk sizes with separate vendor and app bundles

## Power Platform Integration

The app includes Power Platform SDK integration, allowing it to run as a Power Apps Code component with access to:

- Dataverse data sources
- Power Platform services
- Authentication and security context
- Canvas app integration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive across all screen sizes
