import { ProjectType, ProjectDetectionRule } from '../types/project';

const rules: ProjectDetectionRule[] = [
  {
    type: 'nextjs',
    detect: (files) => files.includes('next.config.js') || files.includes('next.config.mjs'),
  },
  {
    type: 'react',
    detect: (files) => files.includes('package.json') && !files.includes('next.config.js'),
  },
  {
    type: 'vue',
    detect: (files) => files.includes('vue.config.js') || files.includes('vite.config.ts'),
  },
  {
    type: 'python',
    detect: (files) => files.includes('requirements.txt') || files.includes('pyproject.toml'),
  },
  {
    type: 'docker',
    detect: (files) => files.includes('Dockerfile') || files.includes('docker-compose.yml'),
  },
];

export function detectProjectType(files: string[]): ProjectType {
  for (const rule of rules) {
    if (rule.detect(files)) {
      return rule.type;
    }
  }
  return 'unknown';
}

export function detectTechnologies(files: string[]): string[] {
  const technologies: string[] = [];
  
  if (files.includes('package.json')) {
    technologies.push('JavaScript');
    if (files.includes('tsconfig.json')) {
      technologies.push('TypeScript');
    }
  }
  
  if (files.includes('requirements.txt')) {
    technologies.push('Python');
  }
  
  if (files.includes('Dockerfile')) {
    technologies.push('Docker');
  }
  
  return technologies;
}
