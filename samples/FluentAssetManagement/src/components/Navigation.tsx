/**
 * Navigation Component
 * 
 * Provides the main navigation interface for the application with:
 * - Sidebar navigation for desktop
 * - Mobile-optimized bottom navigation
 * - Active state management
 * - Proper left alignment for menu items
 * - Integration with navigation history context
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@fluentui/react-components';

// Icons
import {
  Home24Regular,
  Desktop24Regular,
  Location24Regular,
  People24Regular,
  ChartMultiple24Regular,
  Settings24Regular,
  Home24Filled,
  Desktop24Filled,
  Location24Filled,
  People24Filled,
  DataUsage24Filled,
  Settings24Filled
} from '@fluentui/react-icons';

// Context and Styles
import { useNavigationHistoryContext } from '../contexts/NavigationHistoryContext';
import styles from './Navigation.module.css';

interface NavigationProps {
  isMobile?: boolean;
}

const navigationItems = [
  { path: '/', label: 'Dashboard', icon: Home24Regular, iconFilled: Home24Filled },
  { path: '/assets', label: 'Assets', icon: Desktop24Regular, iconFilled: Desktop24Filled },
  { path: '/locations', label: 'Locations', icon: Location24Regular, iconFilled: Location24Filled },
  { path: '/employees', label: 'Employees', icon: People24Regular, iconFilled: People24Filled },
  { path: '/reports', label: 'Reports', icon: ChartMultiple24Regular, iconFilled: DataUsage24Filled },
  { path: '/settings', label: 'Settings', icon: Settings24Regular, iconFilled: Settings24Filled }
];

export const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
  const location = useLocation();
  const { navigateTo } = useNavigationHistoryContext();

  const handleNavigation = (path: string) => {
    navigateTo(path);
  };

  if (isMobile) {
    return (
      <div className={`${styles.mobileNav} mobile-nav`}>
        {navigationItems.slice(0, 4).map((item) => {
          const IconComponent = location.pathname === item.path ? item.iconFilled : item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              appearance={isActive ? 'primary' : 'subtle'}
              icon={<IconComponent />}
              className={styles.mobileNavButton}
              onClick={() => handleNavigation(item.path)}
              title={item.label}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className={`${styles.sidebar} sidebar-content`}>
      <nav className={styles.navList}>
        {navigationItems.map((item) => {
          const IconComponent = location.pathname === item.path ? item.iconFilled : item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              appearance={isActive ? 'primary' : 'subtle'}
              icon={<IconComponent />}
              className={`${styles.navButton} ${isActive ? styles.activeNavButton : ''}`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
};
