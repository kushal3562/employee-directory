import React, { useState } from 'react';
import Header from './components/Header';
import EmployeeCard from './components/EmployeeCard';
import FilterSidebar from './components/FilterSidebar';
import EmployeeModal from './components/EmployeeModal';
import ControlsBar from './components/ControlsBar';
import { useEmployees } from './hooks/useEmployees';
import { Employee } from './types/Employee';

function App() {
  const {
    employees,
    totalEmployees,
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
  } = useEmployees();

  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  const handleAddEmployee = () => {
    setEditingEmployee(null);
    setShowEmployeeModal(true);
  };

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowEmployeeModal(true);
  };

  const handleSaveEmployee = (employeeData: Omit<Employee, 'id'> | Employee) => {
    if ('id' in employeeData) {
      updateEmployee(employeeData);
    } else {
      addEmployee(employeeData);
    }
    setShowEmployeeModal(false);
    setEditingEmployee(null);
  };

  const handleApplyFilters = () => {
    setShowFilterSidebar(false);
  };

  const handleResetFilters = () => {
    resetFilters();
    setShowFilterSidebar(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onFilterToggle={() => setShowFilterSidebar(!showFilterSidebar)}
        onAddEmployee={handleAddEmployee}
        showFilter={showFilterSidebar}
      />

      <ControlsBar
        sortField={sortField}
        sortDirection={sortDirection}
        onSortChange={setSort}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        totalItems={totalEmployees}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <main className="max-w-7xl mx-auto p-6">
        {employees.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No employees found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                onEdit={handleEditEmployee}
                onDelete={deleteEmployee}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">© 2025 Employee Directory App. All rights reserved.</p>
      </footer>

      <FilterSidebar
        isOpen={showFilterSidebar}
        onClose={() => setShowFilterSidebar(false)}
        filters={filters}
        onFiltersChange={setFilters}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />

      <EmployeeModal
        isOpen={showEmployeeModal}
        onClose={() => {
          setShowEmployeeModal(false);
          setEditingEmployee(null);
        }}
        employee={editingEmployee}
        onSave={handleSaveEmployee}
      />
    </div>
  );
}

export default App;