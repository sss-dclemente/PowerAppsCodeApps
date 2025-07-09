import React from 'react';
import {
  Text,
  Card,
  makeStyles,
  tokens,
  Body1
} from '@fluentui/react-components';
import {
  ChartMultiple24Regular,
  DataUsage24Regular,
  DataTrending24Regular,
  Document24Regular
} from '@fluentui/react-icons';
import { mockAssets, mockCategories } from '../data/mockData';

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
  reportsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: tokens.spacingHorizontalM
  },
  reportCard: {
    padding: tokens.spacingVerticalL,
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center' as const
  },
  reportIcon: {
    fontSize: '48px',
    color: tokens.colorBrandForeground1,
    marginBottom: tokens.spacingVerticalM
  },
  reportTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalS,
    color: tokens.colorNeutralForeground1
  },
  reportDescription: {
    color: tokens.colorNeutralForeground2,
    marginBottom: tokens.spacingVerticalM
  },
  statsSection: {
    marginTop: tokens.spacingVerticalL
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalM,
    color: tokens.colorNeutralForeground1
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: tokens.spacingHorizontalM
  },
  statCard: {
    padding: tokens.spacingVerticalM
  },
  statValue: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1,
    display: 'block',
    marginBottom: tokens.spacingVerticalXS
  },
  statLabel: {
    color: tokens.colorNeutralForeground2
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

export const Reports: React.FC = () => {
  const styles = useStyles();

  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.value, 0);
  const averageValue = totalValue / mockAssets.length;
  const assetsInUse = mockAssets.filter(asset => asset.status === 'In Use').length;
  const utilizationRate = (assetsInUse / mockAssets.length) * 100;

  const reportTypes = [
    {
      icon: ChartMultiple24Regular,
      title: 'Asset Utilization Report',
      description: 'Track how assets are being used across your organization'
    },
    {
      icon: DataUsage24Regular,
      title: 'Cost Analysis Report',
      description: 'Analyze the total cost and value of your asset portfolio'
    },
    {
      icon: DataTrending24Regular,
      title: 'Maintenance Report',
      description: 'Monitor maintenance schedules and costs'
    },
    {
      icon: Document24Regular,
      title: 'Compliance Report',
      description: 'Ensure all assets meet regulatory requirements'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Reports</Text>
      </div>

      <div className={styles.reportsGrid}>
        {reportTypes.map((report, index) => {
          const IconComponent = report.icon;
          return (
            <Card key={index} className={styles.reportCard}>
              <IconComponent className={styles.reportIcon} />
              <Text className={styles.reportTitle}>{report.title}</Text>
              <Body1 className={styles.reportDescription}>{report.description}</Body1>
            </Card>
          );
        })}
      </div>

      <div className={styles.statsSection}>
        <Text className={styles.sectionTitle}>Key Statistics</Text>
        <div className={styles.statsGrid}>
          <Card className={styles.statCard}>
            <Text className={styles.statValue}>${totalValue.toLocaleString()}</Text>
            <Body1 className={styles.statLabel}>Total Asset Value</Body1>
          </Card>
          
          <Card className={styles.statCard}>
            <Text className={styles.statValue}>${Math.round(averageValue).toLocaleString()}</Text>
            <Body1 className={styles.statLabel}>Average Asset Value</Body1>
          </Card>
          
          <Card className={styles.statCard}>
            <Text className={styles.statValue}>{utilizationRate.toFixed(1)}%</Text>
            <Body1 className={styles.statLabel}>Utilization Rate</Body1>
          </Card>
          
          <Card className={styles.statCard}>
            <Text className={styles.statValue}>{mockCategories.length}</Text>
            <Body1 className={styles.statLabel}>Asset Categories</Body1>
          </Card>
        </div>
      </div>
    </div>
  );
};
