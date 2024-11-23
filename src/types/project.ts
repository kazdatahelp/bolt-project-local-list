export interface Project {
  name: string;
  path: string;
  type: ProjectType;
  technologies: string[];
  lastModified: string;
}

export type ProjectType = 'react' | 'nextjs' | 'python' | 'docker' | 'vue' | 'web' | 'unknown';

export interface ProjectDetectionRule {
  type: ProjectType;
  detect: (files: string[]) => boolean;
}
