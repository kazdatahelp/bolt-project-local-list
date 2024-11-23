import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all
      hover:transform hover:-translate-y-1 cursor-pointer">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(project.type)}`}>
          {project.type}
        </span>
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 truncate">
        {project.path}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 
              dark:text-gray-100 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Last modified: {project.lastModified}
        </div>
        <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 
          dark:hover:text-blue-300 text-sm">
          Open
        </button>
      </div>
    </div>
  );
}

function getTypeColor(type: string): string {
  const colors = {
    react: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    nextjs: 'bg-black text-white dark:bg-white dark:text-black',
    python: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    docker: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    vue: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100',
    web: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100',
    unknown: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
  };
  return colors[type as keyof typeof colors] || colors.unknown;
}
