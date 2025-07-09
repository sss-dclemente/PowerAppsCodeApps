/**
 * Mock Data and Type Definitions
 * 
 * Provides sample data and TypeScript interfaces for the Asset Management application.
 * This file serves as a data layer that can be easily replaced with real API calls
 * or Dataverse connections in a production environment.
 * 
 * Contains:
 * - TypeScript interfaces for all data entities
 * - Mock data sets for development and demonstration
 * - Utility functions for data manipulation
 */

/** Core asset entity representing physical or digital company assets */
export interface Asset {
  id: string;
  name: string;
  category: string;
  location: string;
  status: 'Available' | 'In Use' | 'Maintenance' | 'Retired';
  assignedTo?: string;
  purchaseDate: string;
  value: number;
  serialNumber: string;
  description: string;
}

/** Asset category for grouping and organizing assets */
export interface AssetCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

/** Physical location where assets are stored or used */
export interface Location {
  id: string;
  name: string;
  building: string;
  floor: string;
  room?: string;
}

/** Employee entity for asset assignment tracking */
export interface Employee {
  id: string;
  name: string;
  department: string;
  email: string;
}

export const mockAssets: Asset[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    category: 'Laptops',
    location: 'Seattle Office - Floor 3',
    status: 'In Use',
    assignedTo: 'John Smith',
    purchaseDate: '2023-01-15',
    value: 2499,
    serialNumber: 'MBP2023001',
    description: 'MacBook Pro 16-inch with M2 Pro chip, 32GB RAM, 1TB SSD'
  },
  {
    id: '2',
    name: 'Dell OptiPlex 7090',
    category: 'Desktops',
    location: 'New York Office - Floor 2',
    status: 'Available',
    purchaseDate: '2022-08-10',
    value: 1299,
    serialNumber: 'DELL2022045',
    description: 'Dell OptiPlex 7090 Desktop with Intel i7, 16GB RAM, 512GB SSD'
  },
  {
    id: '3',
    name: 'iPhone 14 Pro',
    category: 'Mobile Devices',
    location: 'Boston Office - Floor 1',
    status: 'In Use',
    assignedTo: 'Sarah Johnson',
    purchaseDate: '2023-03-20',
    value: 999,
    serialNumber: 'IPH2023078',
    description: 'iPhone 14 Pro 256GB Space Black'
  },
  {
    id: '4',
    name: 'Canon Printer MX922',
    category: 'Printers',
    location: 'Seattle Office - Floor 2',
    status: 'Maintenance',
    purchaseDate: '2021-11-05',
    value: 299,
    serialNumber: 'CAN2021156',
    description: 'Canon PIXMA MX922 All-in-One Printer'
  },
  {
    id: '5',
    name: 'Surface Studio 2+',
    category: 'Desktops',
    location: 'Design Lab - Floor 4',
    status: 'In Use',
    assignedTo: 'Michael Chen',
    purchaseDate: '2023-02-14',
    value: 4299,
    serialNumber: 'SUR2023012',
    description: 'Microsoft Surface Studio 2+ with 32GB RAM, 1TB SSD'
  },
  {
    id: '6',
    name: 'Lenovo ThinkPad X1',
    category: 'Laptops',
    location: 'Chicago Office - Floor 1',
    status: 'Available',
    purchaseDate: '2022-12-01',
    value: 1899,
    serialNumber: 'LEN2022089',
    description: 'Lenovo ThinkPad X1 Carbon with Intel i7, 16GB RAM'
  },
  {
    id: '7',
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    location: 'Marketing Dept - Floor 3',
    status: 'In Use',
    assignedTo: 'Emily Davis',
    purchaseDate: '2023-04-10',
    value: 1099,
    serialNumber: 'IPD2023025',
    description: 'iPad Pro 12.9-inch with M2 chip, 512GB, Space Gray'
  },
  {
    id: '8',
    name: 'HP LaserJet Pro',
    category: 'Printers',
    location: 'Austin Office - Floor 2',
    status: 'Retired',
    purchaseDate: '2020-01-15',
    value: 199,
    serialNumber: 'HP2020003',
    description: 'HP LaserJet Pro M404n Monochrome Printer'
  }
];

export const mockCategories: AssetCategory[] = [
  { id: '1', name: 'Laptops', description: 'Portable computers for employees', count: 2 },
  { id: '2', name: 'Desktops', description: 'Desktop computers and workstations', count: 2 },
  { id: '3', name: 'Mobile Devices', description: 'Smartphones and mobile devices', count: 1 },
  { id: '4', name: 'Tablets', description: 'Tablet devices for presentations and mobility', count: 1 },
  { id: '5', name: 'Printers', description: 'Printing and scanning equipment', count: 2 }
];

export const mockLocations: Location[] = [
  { id: '1', name: 'Seattle Office - Floor 3', building: 'Seattle HQ', floor: '3' },
  { id: '2', name: 'New York Office - Floor 2', building: 'NY Branch', floor: '2' },
  { id: '3', name: 'Boston Office - Floor 1', building: 'Boston Office', floor: '1' },
  { id: '4', name: 'Design Lab - Floor 4', building: 'Seattle HQ', floor: '4', room: '401' },
  { id: '5', name: 'Chicago Office - Floor 1', building: 'Chicago Branch', floor: '1' },
  { id: '6', name: 'Marketing Dept - Floor 3', building: 'Seattle HQ', floor: '3', room: '305' },
  { id: '7', name: 'Austin Office - Floor 2', building: 'Austin Branch', floor: '2' }
];

export const mockEmployees: Employee[] = [
  { id: '1', name: 'John Smith', department: 'Engineering', email: 'john.smith@company.com' },
  { id: '2', name: 'Sarah Johnson', department: 'Sales', email: 'sarah.johnson@company.com' },
  { id: '3', name: 'Michael Chen', department: 'Design', email: 'michael.chen@company.com' },
  { id: '4', name: 'Emily Davis', department: 'Marketing', email: 'emily.davis@company.com' },
  { id: '5', name: 'David Wilson', department: 'HR', email: 'david.wilson@company.com' },
  { id: '6', name: 'Lisa Brown', department: 'Finance', email: 'lisa.brown@company.com' }
];
