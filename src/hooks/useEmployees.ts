import { useState, useEffect, useMemo } from 'react';
import { Employee, FilterCriteria, SortField, SortDirection } from '../types/Employee';
import { mockEmployees } from '../data/mockData';

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterCriteria>({
    firstName: '',
    department: '',
    role: ''
  });
  const [sortField, setSortField] = useState<SortField>('firstName');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Generate unique ID for new employees
  const generateId = () => {
    return Math.max(...employees.map(emp => emp.id), 0) + 1;
  };

  // Filter and sort employees
  const filteredAndSortedEmployees = useMemo(() => {
    let filtered = employees;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(emp => 
        emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.firstName) {
      filtered = filtered.filter(emp => 
        emp.firstName.toLowerCase().includes(filters.firstName.toLowerCase())
      );
    }

    if (filters.department) {
      filtered = filtered.filter(emp => emp.department === filters.department);
    }

    if (filters.role) {
      filtered = filtered.filter(emp => emp.role === filters.role);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    return filtered;
  }, [employees, searchTerm, filters, sortField, sortDirection]);

  // Paginated employees
  const paginatedEmployees = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedEmployees.slice(startIndex, endIndex);
  }, [filteredAndSortedEmployees, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters, sortField, sortDirection]);

  const addEmployee = (employeeData: Omit<Employee, 'id'>) => {
    const newEmployee: Employee = {
      ...employeeData,
      id: generateId()
    };
    setEmployees(prev => [...prev, newEmployee]);
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    setEmployees(prev => 
      prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
    );
  };

  const deleteEmployee = (id: number) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const setSort = (field: SortField, direction: SortDirection) => {
    setSortField(field);
    setSortDirection(direction);
  };

  const resetFilters = () => {
    setFilters({
      firstName: '',
      department: '',
      role: ''
    });
  };

  return {
    employees: paginatedEmployees,
    totalEmployees: filteredAndSortedEmployees.length,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    sortField,
    sortDirection,
    setSort,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    resetFilters
  };
};