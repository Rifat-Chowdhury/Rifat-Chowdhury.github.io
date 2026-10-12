import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects, projectTags } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get('project');
  const projectIds = searchParams.get('projects')?.split(',').filter(Boolean) ?? (projectId ? [projectId] : []);
  const hasProjectFilter = projectIds.length > 0;

  const filteredProjects = hasProjectFilter
    ? projects.filter(project => projectIds.includes(project.id))
    : filter === 'all'
      ? projects
      : projects.filter(project => project.tags.includes(filter));

  const clearProjectFilter = () => {
    setSearchParams({});
    setFilter('all');
  };
  
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
              Explore a collection of my recent work spanning data analysis,
              SQL, visualization, and web applications. Each project highlights
              a real dataset, a clear approach, and the insights delivered.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="section bg-white dark:bg-dark-700">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={clearProjectFilter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500'
              }`}
            >
              All Projects
            </button>
            
            <label className="sr-only" htmlFor="project-filter">Filter projects by technology</label>
            <select
              id="project-filter"
              value={filter}
              onChange={(event) => {
                setSearchParams({});
                setFilter(event.target.value);
              }}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-dark-400 dark:bg-dark-800 dark:text-gray-200"
            >
              <option value="all">Filter by technology</option>
              {projectTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {hasProjectFilter && filteredProjects.length > 0 && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-primary-50 px-5 py-4 dark:bg-dark-600">
              <p className="text-gray-700 dark:text-gray-300">
                Showing the projects related to this area of interest.
              </p>
              <button
                onClick={clearProjectFilter}
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-400"
              >
                View all projects
              </button>
            </div>
          )}
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={project.id}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </div>
          
          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found with the selected filter.
              </p>
              <button
                onClick={clearProjectFilter}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
