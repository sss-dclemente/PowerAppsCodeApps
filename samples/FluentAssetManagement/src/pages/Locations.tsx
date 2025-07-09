import React from 'react';
import {
  Text,
  Card,
  makeStyles,
  tokens,
  Body1,
  Caption1
} from '@fluentui/react-components';
import {
  Location24Regular
} from '@fluentui/react-icons';
import { mockLocations, mockAssets } from '../data/mockData';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM
  },
  header: {
    marginBottom: tokens.spacingVerticalM
  },
  title: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    margin: 0
  },
  locationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: tokens.spacingHorizontalM
  },
  locationCard: {
    padding: tokens.spacingVerticalM,
    minHeight: '160px'
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalM
  },
  locationIcon: {
    color: tokens.colorBrandForeground1
  },
  locationName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1
  },
  locationDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
    marginBottom: tokens.spacingVerticalS
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  assetCount: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

export const Locations: React.FC = () => {
  const styles = useStyles();

  const getAssetCountForLocation = (locationName: string) => {
    return mockAssets.filter(asset => asset.location === locationName).length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Locations</Text>
      </div>

      <div className={styles.locationsGrid}>
        {mockLocations.map((location) => {
          const assetCount = getAssetCountForLocation(location.name);
          
          return (
            <Card key={location.id} className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <Location24Regular className={styles.locationIcon} />
                <Text className={styles.locationName}>{location.name}</Text>
              </div>
              
              <div className={styles.locationDetails}>
                <div className={styles.detailRow}>
                  <Body1>Building:</Body1>
                  <Caption1>{location.building}</Caption1>
                </div>
                
                <div className={styles.detailRow}>
                  <Body1>Floor:</Body1>
                  <Caption1>{location.floor}</Caption1>
                </div>
                
                {location.room && (
                  <div className={styles.detailRow}>
                    <Body1>Room:</Body1>
                    <Caption1>{location.room}</Caption1>
                  </div>
                )}
                
                <div className={styles.detailRow}>
                  <Body1>Assets:</Body1>
                  <Text className={styles.assetCount}>{assetCount}</Text>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
