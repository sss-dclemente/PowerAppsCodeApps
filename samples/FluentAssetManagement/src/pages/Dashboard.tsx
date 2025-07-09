import React from 'react';
import {
  Text,
  Card,
  Body1,
  Caption1
} from '@fluentui/react-components';
import {
  Desktop24Regular,
  Location24Regular,
  People24Regular,
  Warning24Regular
} from '@fluentui/react-icons';
import { mockAssets, mockCategories, mockLocations, mockEmployees } from '../data/mockData';
import { useNavigationHistoryContext } from '../contexts/NavigationHistoryContext';
import styles from './Dashboard.module.css';

export const Dashboard: React.FC = () => {
  const { navigateTo } = useNavigationHistoryContext();

  const totalAssets = mockAssets.length;
  const availableAssets = mockAssets.filter(asset => asset.status === 'Available').length;
  const inUseAssets = mockAssets.filter(asset => asset.status === 'In Use').length;
  const maintenanceAssets = mockAssets.filter(asset => asset.status === 'Maintenance').length;
  const totalLocations = mockLocations.length;
  const totalEmployees = mockEmployees.length;

  const recentAssets = mockAssets.slice(0, 5);
  const assetsByStatus = [
    { status: 'Available', count: availableAssets },
    { status: 'In Use', count: inUseAssets },
    { status: 'Maintenance', count: maintenanceAssets },
    { status: 'Retired', count: mockAssets.filter(a => a.status === 'Retired').length }
  ];

  const handleNavigateToAssets = () => {
    navigateTo('/assets');
  };

  const handleNavigateToLocations = () => {
    navigateTo('/locations');
  };

  const handleNavigateToEmployees = () => {
    navigateTo('/employees');
  };

  const handleNavigateToMaintenance = () => {
    // Navigate to assets page, could later be filtered for maintenance items
    navigateTo('/assets');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Dashboard</Text>
      </div>

      <div className={styles.statsGrid}>
        <Card className={styles.statCard} onClick={handleNavigateToAssets}>
          <div className={styles.statHeader}>
            <Desktop24Regular className={styles.statIcon} />
            <Caption1 className={styles.statLabel}>Total Assets</Caption1>
          </div>
          <Text className={styles.statValue}>{totalAssets}</Text>
        </Card>

        <Card className={styles.statCard} onClick={handleNavigateToLocations}>
          <div className={styles.statHeader}>
            <Location24Regular className={styles.statIcon} />
            <Caption1 className={styles.statLabel}>Locations</Caption1>
          </div>
          <Text className={styles.statValue}>{totalLocations}</Text>
        </Card>

        <Card className={styles.statCard} onClick={handleNavigateToEmployees}>
          <div className={styles.statHeader}>
            <People24Regular className={styles.statIcon} />
            <Caption1 className={styles.statLabel}>Employees</Caption1>
          </div>
          <Text className={styles.statValue}>{totalEmployees}</Text>
        </Card>

        <Card className={styles.statCard} onClick={handleNavigateToMaintenance}>
          <div className={styles.statHeader}>
            <Warning24Regular className={styles.statIcon} />
            <Caption1 className={styles.statLabel}>Maintenance</Caption1>
          </div>
          <Text className={styles.statValue}>{maintenanceAssets}</Text>
        </Card>
      </div>

      <div className={styles.contentGrid}>
        <Card className={styles.sectionCard}>
          <Text className={styles.sectionTitle}>Assets by Status</Text>
          {assetsByStatus.map((item) => (
            <div key={item.status} className={styles.listItem}>
              <Body1 className={styles.itemName}>{item.status}</Body1>
              <Caption1 className={`${styles.itemValue} ${item.status === 'Maintenance' ? styles.warningItem : ''}`}>
                {item.count}
              </Caption1>
            </div>
          ))}
        </Card>

        <Card className={styles.sectionCard}>
          <Text className={styles.sectionTitle}>Recent Assets</Text>
          {recentAssets.map((asset) => (
            <div key={asset.id} className={styles.listItem}>
              <div>
                <Body1 className={styles.itemName}>{asset.name}</Body1>
                <Caption1 className={styles.itemValue}>{asset.category}</Caption1>
              </div>
              <Caption1 className={`${styles.itemValue} ${asset.status === 'Maintenance' ? styles.warningItem : ''}`}>
                {asset.status}
              </Caption1>
            </div>
          ))}
        </Card>

        <Card className={styles.sectionCard}>
          <Text className={styles.sectionTitle}>Categories</Text>
          {mockCategories.map((category) => (
            <div key={category.id} className={styles.listItem}>
              <Body1 className={styles.itemName}>{category.name}</Body1>
              <Caption1 className={styles.itemValue}>{category.count} items</Caption1>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
