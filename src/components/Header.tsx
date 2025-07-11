import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterToggle: () => void;
  onAddEmployee: () => void;
  showFilter: boolean;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  onFilterToggle,
  onAddEmployee,
  showFilter
}) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employee Directory</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
          </div>
          
          <button
            onClick={onFilterToggle}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              showFilter 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <Filter className="w-4 h-4 inline mr-2" />
            Filter
          </button>
          
          <button
            onClick={onAddEmployee}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            <Plus className="w-4 h-4 inline mr-2" />
            Add Employee
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;