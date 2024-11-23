import { useState, useMemo } from 'react';
import ProjectGrid from './components/ProjectGrid';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import SortDropdown from './components/SortDropdown';
import { Project, ProjectType } from './types/project';

const mockProjects = [
  {
    name: 'Project Dashboard',
    path: '/home/projects/dashboard',
    type: 'nextjs' as const,
    technologies: ['TypeScript', 'React', 'Tailwind'],
    lastModified: '2024-01-15',
  },
  {
    name: 'API Service',
    path: '/home/projects/api',
    type: 'python' as const,
    technologies: ['Python', 'FastAPI'],
    lastModified: '2024-01-10',
  },
  {
    name: 'Docker Compose Setup',
    path: '/home/projects/docker-setup',
    type: 'docker' as const,
    technologies: ['Docker', 'YAML'],
    lastModified: '2024-01-05',
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'all'>('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredProjects = useMemo(() => {
    return mockProjects
      .filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesFilter = activeFilter === 'all' || project.type === activeFilter;
        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'modified':
            return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
          case 'type':
            return a.type.localeCompare(b.type);
          default:
            return 0;
        }
      });
  }, [searchQuery, activeFilter, sortBy]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Manage and monitor all your development projects in one place
          </p>
          
          <div className="space-y-4">
            <SearchBar onSearch={setSearchQuery} />
            
            <div className="flex justify-between items-center flex-wrap gap-4">
              <FilterBar onFilterChange={setActiveFilter} activeFilter={activeFilter} />
              <SortDropdown onSortChange={setSortBy} />
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No projects found matching your criteria
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
