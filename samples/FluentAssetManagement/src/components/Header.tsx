/**
 * Header Component
 * 
 * Provides the main application header with:
 * - Hamburger menu button for sidebar toggle
 * - Browser-like navigation controls (back/forward)
 * - Application title display
 * - Responsive design that adapts to mobile and desktop
 * 
 * Features:
 * - Integrates with NavigationHistoryContext for browser-like navigation
 * - CSS Modules for scoped styling
 * - Accessible hamburger menu with proper ARIA labels
 * - Disabled state handling for navigation buttons
 */
import React from 'react';
import { Text, Button } from '@fluentui/react-components';
import { Navigation24Regular, ArrowLeft24Regular, ArrowRight24Regular } from '@fluentui/react-icons';
import { useNavigationHistoryContext } from '../contexts/NavigationHistoryContext';
import styles from './Header.module.css';

interface HeaderProps {
  /** Callback function to toggle sidebar visibility */
  onToggleSidebar: () => void;
  /** Title to display in the header */
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onToggleSidebar, 
  title = "Asset Management" 
}) => {
  const { canGoBack, canGoForward, goBack, goForward } = useNavigationHistoryContext();

  return (
    <header className={styles.header}>
      <Button
        appearance="subtle"
        icon={<Navigation24Regular />}
        onClick={onToggleSidebar}
        aria-label="Toggle menu"
        className={styles.hamburgerButton}
      />
      
      {/* Navigation Controls */}
      <div className={styles.navigationControls}>
        <Button
          appearance="subtle"
          icon={<ArrowLeft24Regular />}
          className={styles.navControlButton}
          onClick={goBack}
          disabled={!canGoBack}
          title="Go Back"
        />
        <Button
          appearance="subtle"
          icon={<ArrowRight24Regular />}
          className={styles.navControlButton}
          onClick={goForward}
          disabled={!canGoForward}
          title="Go Forward"
        />
      </div>
      
      <Text className={styles.title}>{title}</Text>
    </header>
  );
};
