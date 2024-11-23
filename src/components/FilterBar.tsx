import { ProjectType } from '../types/project';

interface FilterBarProps {
  onFilterChange: (type: ProjectType | 'all') => void;
  activeFilter: ProjectType | 'all';
}

export default function FilterBar({ onFilterChange, activeFilter }: FilterBarProps) {
  const filters: (ProjectType | 'all')[] = ['all', 'react', 'nextjs', 'python', 'docker', 'vue', 'web'];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${activeFilter === filter
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
