import React from 'react';
import {
  Text,
  Card,
  Switch,
  Button,
  Body1
} from '@fluentui/react-components';
import {
  ColorBackground24Regular
} from '@fluentui/react-icons';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Settings.module.css';

export const Settings: React.FC = () => {
  const { isDarkMode, toggleDarkMode, resetToSystemPreference } = useTheme();

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  const handleResetToSystem = () => {
    resetToSystemPreference();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Settings</Text>
      </div>

      <div className={styles.settingsGrid}>
        <Card className={styles.settingCard}>
          <div className={styles.settingHeader}>
            <ColorBackground24Regular className={styles.settingIcon} />
            <Text className={styles.settingTitle}>Appearance</Text>
          </div>
          
          <Body1 className={styles.settingDescription}>
            Control the visual appearance of the application
          </Body1>
          
          <div className={styles.settingControl}>
            <Text className={styles.controlLabel}>Dark Mode</Text>
            <Switch 
              checked={isDarkMode} 
              onChange={() => handleDarkModeToggle()}
            />
          </div>
          
          <Button 
            appearance="subtle" 
            onClick={handleResetToSystem}
            style={{ marginTop: '8px' }}
          >
            Reset to System Preference
          </Button>
        </Card>
      </div>
    </div>
  );
};
