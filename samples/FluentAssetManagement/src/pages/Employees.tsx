import React from 'react';
import {
  Text,
  Card,
  Badge,
  makeStyles,
  tokens,
  Body1,
  Caption1
} from '@fluentui/react-components';
import {
  Person24Regular,
  Mail24Regular
} from '@fluentui/react-icons';
import { mockEmployees, mockAssets } from '../data/mockData';

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
  employeesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: tokens.spacingHorizontalM
  },
  employeeCard: {
    padding: tokens.spacingVerticalM,
    minHeight: '160px'
  },
  employeeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalM
  },
  employeeIcon: {
    color: tokens.colorBrandForeground1
  },
  employeeName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1
  },
  employeeDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  emailRow: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS
  },
  assetCount: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorBrandForeground1
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

export const Employees: React.FC = () => {
  const styles = useStyles();

  const getAssetCountForEmployee = (employeeName: string) => {
    return mockAssets.filter(asset => asset.assignedTo === employeeName).length;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Employees</Text>
      </div>

      <div className={styles.employeesGrid}>
        {mockEmployees.map((employee) => {
          const assetCount = getAssetCountForEmployee(employee.name);
          
          return (
            <Card key={employee.id} className={styles.employeeCard}>
              <div className={styles.employeeHeader}>
                <Person24Regular className={styles.employeeIcon} />
                <Text className={styles.employeeName}>{employee.name}</Text>
              </div>
              
              <div className={styles.employeeDetails}>
                <div className={styles.detailRow}>
                  <Body1>Department:</Body1>
                  <Badge appearance="outline">{employee.department}</Badge>
                </div>
                
                <div className={styles.emailRow}>
                  <Mail24Regular style={{ color: tokens.colorNeutralForeground2 }} />
                  <Caption1 style={{ color: tokens.colorNeutralForeground2 }}>
                    {employee.email}
                  </Caption1>
                </div>
                
                <div className={styles.detailRow}>
                  <Body1>Assigned Assets:</Body1>
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
