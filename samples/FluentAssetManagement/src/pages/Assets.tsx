/**
 * Assets Page Component
 * 
 * Professional asset management interface featuring:
 * - Fluent UI DataGrid with sortable columns
 * - Real-time search and filtering
 * - Status badges with color coding
 * - Responsive design with horizontal scroll on mobile
 * - CSS Modules for scoped styling
 * - TypeScript support with proper interfaces
 */
import React, { useState, useMemo } from 'react';

// Fluent UI Components
import {
  Text,
  Button,
  Badge,
  SearchBox,
  Dropdown,
  Option,
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DataGridHeaderCell,
  DataGridCell,
  DataGridBody,
  TableColumnDefinition,
  TableRowId
} from '@fluentui/react-components';

// Icons
import { Add24Regular } from '@fluentui/react-icons';

// Data and Styles
import { mockAssets, Asset } from '../data/mockData';
import styles from './Assets.module.css';

/**
 * Status badge appearance mapping for asset status
 */
const getStatusAppearance = (status: Asset['status']) => {
  switch (status) {
    case 'Available':
      return 'filled' as const;
    case 'In Use':
      return 'tint' as const;
    case 'Maintenance':
      return 'outline' as const;
    case 'Retired':
      return 'ghost' as const;
    default:
      return 'ghost' as const;
  }
};

/**
 * DataGrid column definitions with sorting and custom rendering
 */
const COLUMNS: TableColumnDefinition<Asset>[] = [
  {
    columnId: 'name',
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => 'Name',
    renderCell: (item) => (
      <div className={styles.assetNameContainer}>
        <Text weight="semibold">{item.name}</Text>
        <Text size={200} className={styles.serialNumber}>
          {item.serialNumber}
        </Text>
      </div>
    ),
  },
  {
    columnId: 'category',
    compare: (a, b) => a.category.localeCompare(b.category),
    renderHeaderCell: () => 'Category',
    renderCell: (item) => item.category,
  },
  {
    columnId: 'status',
    compare: (a, b) => a.status.localeCompare(b.status),
    renderHeaderCell: () => 'Status',
    renderCell: (item) => (
      <Badge
        appearance={getStatusAppearance(item.status)}
        className={styles.statusBadge}
      >
        {item.status}
      </Badge>
    ),
  },
  {
    columnId: 'location',
    compare: (a, b) => a.location.localeCompare(b.location),
    renderHeaderCell: () => 'Location',
    renderCell: (item) => item.location,
  },
  {
    columnId: 'assignedTo',
    compare: (a, b) => (a.assignedTo || '').localeCompare(b.assignedTo || ''),
    renderHeaderCell: () => 'Assigned To',
    renderCell: (item) => item.assignedTo || '-',
  },
  {
    columnId: 'value',
    compare: (a, b) => a.value - b.value,
    renderHeaderCell: () => 'Value',
    renderCell: (item) => (
      <Text className={styles.valueCell}>
        ${item.value.toLocaleString()}
      </Text>
    ),
  },
  {
    columnId: 'purchaseDate',
    compare: (a, b) => new Date(a.purchaseDate).getTime() - new Date(b.purchaseDate).getTime(),
    renderHeaderCell: () => 'Purchase Date',
    renderCell: (item) => new Date(item.purchaseDate).toLocaleDateString(),
  },
];

/**
 * Row ID generator for DataGrid
 */
const getRowId = (item: Asset): TableRowId => item.id;

export const Assets: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const filteredAssets = useMemo(() => {
    return mockAssets.filter(asset => {
      const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           asset.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || asset.status === statusFilter;
      const matchesCategory = categoryFilter === 'All' || asset.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchTerm, statusFilter, categoryFilter]);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(mockAssets.map(asset => asset.category)))];
  }, []);

  const statuses = useMemo(() => {
    return ['All', 'Available', 'In Use', 'Maintenance', 'Retired'];
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.title}>Assets</Text>
        <div className={styles.controls}>
          <SearchBox
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(_, data) => setSearchTerm(data.value)}
            className={styles.searchBox}
          />
          <Dropdown
            placeholder="All Categories"
            value={categoryFilter}
            onOptionSelect={(_, data) => setCategoryFilter(data.optionValue || 'All')}
          >
            {categories.map(category => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Dropdown>
          <Dropdown
            placeholder="All Statuses"
            value={statusFilter}
            onOptionSelect={(_, data) => setStatusFilter(data.optionValue || 'All')}
          >
            {statuses.map(status => (
              <Option key={status} value={status}>
                {status}
              </Option>
            ))}
          </Dropdown>
          <Button
            appearance="primary"
            icon={<Add24Regular />}
          >
            Add Asset
          </Button>
        </div>
      </div>

      <div className={styles.dataGridContainer}>
        <DataGrid
          items={filteredAssets}
          columns={COLUMNS}
          sortable={true}
          getRowId={getRowId}
          focusMode="cell"
          className={styles.dataGrid}
          aria-label="Assets data grid"
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Asset>>
            {({ item, rowId }) => (
              <DataGridRow<Asset> key={rowId}>
                {({ renderCell }) => (
                  <DataGridCell>{renderCell(item)}</DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </div>
      
      <Text className={styles.footer}>
        Showing {filteredAssets.length} of {mockAssets.length} assets
      </Text>
    </div>
  );
};
