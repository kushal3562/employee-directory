import React from 'react';
import { Employee } from '../types/Employee';

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  onEdit,
  onDelete
}) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
      onDelete(employee.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {employee.firstName} {employee.lastName}
        </h3>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="text-sm">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-600 ml-2">{employee.email}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium text-gray-700">Department:</span>
          <span className="text-gray-600 ml-2">{employee.department}</span>
        </div>
        <div className="text-sm">
          <span className="font-medium text-gray-700">Role:</span>
          <span className="text-gray-600 ml-2">{employee.role}</span>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(employee)}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;