# Fluent Asset Management Sample

A modern, responsive asset management application built with React, TypeScript, Vite, and Fluent UI v9. Features browser-like navigation, dark mode support, and DataGrid tables that work seamlessly on desktop and mobile devices.

## Features

- **Browser-Like Navigation**: Back/forward buttons with persistent sidebar
- **DataGrid Tables**: Professional sortable tables with filtering and status badges
- **Dark Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile hamburger menu and adaptive layouts
- **Modern UI**: Fluent UI v9 components with CSS Modules
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **React 18** with TypeScript
- **Vite** for development and building
- **Fluent UI v9** with DataGrid components
- **CSS Modules** for component styling
- **React Router** for navigation
- **Power Apps Code SDK** for Power Platform integration

## Project Structure

```
src/
├── components/          # UI components
│   ├── Navigation.tsx   # Sidebar navigation
│   └── Header.tsx       # Header with navigation controls
├── contexts/           # React contexts
│   ├── NavigationHistoryContext.tsx # Navigation history
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom hooks
│   └── useNavigationHistory.ts
├── data/               # Mock data and types
│   └── mockData.ts
├── pages/              # Page components
│   ├── Dashboard.tsx   # Dashboard with stat cards (CSS Modules)
│   ├── Assets.tsx      # DataGrid table (CSS Modules)
│   ├── Settings.tsx    # Theme settings (CSS Modules)
│   ├── Locations.tsx   # Basic table (legacy)
│   ├── Employees.tsx   # Basic table (legacy)
│   └── Reports.tsx     # Basic table (legacy)
├── App.tsx             # Main layout
├── main.tsx            # Entry point
└── PowerProvider.tsx   # Power Platform integration
```

## Key Features

### Modern Architecture
- **CSS Modules**: Component-scoped styling
- **Context State**: Theme and navigation management
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design

### Professional Tables
- **DataGrid**: Sortable columns with status badges
- **Filtering**: Real-time search across data
- **Mobile**: Horizontal scroll for data integrity

### Navigation
- **Browser-Like**: Back/forward with history
- **Persistent Sidebar**: Desktop navigation
- **Mobile Overlay**: Touch-friendly menu

## Pages

1. **Dashboard**: Interactive stat cards with navigation
2. **Assets**: DataGrid table with sorting and filtering
3. **Settings**: Theme toggle and preferences
4. **Locations**: Location management
5. **Employees**: Employee directory
6. **Reports**: Analytics and insights

## Architecture

### Modern Components (CSS Modules)
- ✅ **Dashboard**: Clickable stat cards
- ✅ **Assets**: DataGrid with sorting and badges
- ✅ **Settings**: Theme management
- ✅ **Header & Navigation**: Responsive design

### Legacy Components (makeStyles)
- ⚠️ **Locations, Employees, Reports**: Basic tables

## Responsive Design

- **Desktop**: Full sidebar with hamburger toggle
- **Mobile**: Sidebar overlay with touch menu
- **DataGrid**: Horizontal scroll maintains data integrity
- **Theme**: Dark/light mode works across all devices

## Getting Started

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
```

## Customization

- **Data Integration**: Replace mock data with real APIs
- **Modernize Pages**: Convert legacy components to CSS Modules + DataGrid
- **Theme**: Customize colors and branding
- **Features**: Add CRUD operations, forms, pagination

## Technical Details

### Performance
- **Bundle Optimization**: Vendor chunks for better caching
- **CSS Modules**: Scoped styles reduce bundle size
- **Tree Shaking**: Only imported components bundled
- **TypeScript**: Compile-time optimizations

### Code Quality
- **ESLint**: Optimized rules for React patterns
- **TypeScript**: Full type safety
- **Clean Architecture**: Modern and legacy component separation

## Power Platform Integration

Includes Power Apps Code SDK integration for:
- Dataverse data sources
- Power Platform services  
- Authentication and security
- Canvas app integration
