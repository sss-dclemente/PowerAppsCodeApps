/**
 * Main Application Component
 * 
 * Provides the core layout structure with:
 * - Responsive sidebar navigation
 * - Header with hamburger menu and navigation controls
 * - Main content area with routing
 * - Mobile-first responsive design
 * - Navigation history context for browser-like experience
 */
import React, { useState, useEffect } from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Button } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

// Context and Components
import { NavigationHistoryProvider } from './contexts/NavigationHistoryContext';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

// Pages
import { Dashboard, Assets, Locations, Employees, Reports, Settings } from './pages';

// Styles
import './App.css';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Auto-hide sidebar on mobile
      if (mobile) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <NavigationHistoryProvider>
        <div className="app-layout">
          {/* Desktop Sidebar */}
          {(!isMobile && sidebarVisible) && (
            <div className="sidebar">
              <Navigation isMobile={false} />
            </div>
          )}
          
          {/* Mobile Sidebar Overlay */}
          {isMobile && sidebarVisible && (
            <>
              <div className="sidebar-overlay" onClick={toggleSidebar} />
              <div className="sidebar mobile-sidebar">
                <div className="mobile-sidebar-header">
                  <Button 
                    appearance="subtle"
                    icon={<Dismiss24Regular />}
                    onClick={toggleSidebar}
                    aria-label="Close menu"
                    className="close-button"
                  />
                </div>
                <Navigation isMobile={false} />
              </div>
            </>
          )}
          
          <div className={`main-content ${!sidebarVisible || isMobile ? 'sidebar-hidden' : ''}`}>
            {/* Header with hamburger menu and title */}
            <Header onToggleSidebar={toggleSidebar} />
            
            <div className="content-area">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            
            {isMobile && (
              <Navigation isMobile={true} />
            )}
          </div>
        </div>
      </NavigationHistoryProvider>
    </MemoryRouter>
  );
};

export default App;
