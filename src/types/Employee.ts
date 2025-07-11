export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
}

export interface FilterCriteria {
  firstName: string;
  department: string;
  role: string;
}

export type SortField = 'firstName' | 'department';
export type SortDirection = 'asc' | 'desc';