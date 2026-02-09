import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
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
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500'
              }`}
            >
              All Projects
            </button>
            
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
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
                onClick={() => setFilter('all')}
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

// Sample data
const tags = ['Data Analysis', 'SQL', 'Python', 'Visualization', 'Web App', 'Geospatial'];

export const projects = [
  {
    id: 'usda-production-analysis',
    title: 'USDA Production Analysis',
    description: 'End-to-end SQL data analysis project using SQLite & DBeaver. Includes table creation, CSV imports, data cleaning, and analytical queries on US agricultural production datasets (milk, cheese, coffee, eggs, honey, yogurt).',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    tags: ['Data Analysis', 'Python', 'Visualization', 'SQL'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/USDA-Production-Analysis.git',
  },
  {
    id: 'sql-leetcode',
    title: 'SQL LeetCode',
    description: 'A collection of SQL solutions demonstrating joins, aggregations, window functions, and data modeling skills.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    tags: ['SQL', 'Data Analysis'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/SQL-LeetCode',
  },
  {
    id: 'vibemap',
    title: 'VibeMap',
    description: 'A data-driven music recommendation system that maps songs by mood and tempo using audio features.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    tags: ['Web App', 'Visualization', 'Geospatial'],
    githubUrl: 'https://github.com/jeff13in/VibeMap',
  }
  ,
  {
    id: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    description: 'An interactive visualization tool for pathfinding algorithms like BFS, DFS, A* & Dijkstra.',
    image: 'https://images.unsplash.com/photo-1696941495517-6327a4aef380?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZSUyMGZpbmRlcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Visualization', 'Web App'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Pathfinding-Visualizer',
  },
  {
    id: 'postgenerator',
    title: 'Social Media Post Generator',
    description: 'A bot that extracts posts, generates ideas, measures performance metrics, and provides decision-tree guidance.',
    image: 'https://images.unsplash.com/photo-1676287571987-2f98ced3e6c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29udGVudCUyMEdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Data Analysis', 'Web App'],
    githubUrl: 'https://github.com/mc16dn/COSC-4P02-Group-Assignment',
    liveUrl: 'https://www.youtube.com/watch?v=0LPsPId1vhk&feature=youtu.be&themeRefresh=1'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, animations, and a clean, professional design.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Web App', 'Visualization'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export default Projects;
