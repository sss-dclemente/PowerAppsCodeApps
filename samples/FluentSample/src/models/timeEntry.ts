export interface TimeEntry {
  id: string;
  date: string;
  projectId: string;
  projectName: string;
  hours: number;
  notes?: string;
  status: 'Draft' | 'Submitted' | 'Approved' | 'Rejected';
  createdBy: string;
  createdOn: string;
  modifiedBy?: string;
  modifiedOn?: string;
  isBillable?: boolean;
  location?: string;
  costCode?: string;
  type?: 'Work' | 'Leave';
}
