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
              Explore a collection of my recent work spanning artificial intelligence, 
              algorithms, web development, and many more. Each project represents
              a unique challenge and innovative solution.
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
const tags = ['AI', 'Machine Learning', 'Web Development', 'Recursion Trees'];

export const projects = [
  {
    id: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    description: 'An interactive visualization tool for pathfinding algorithms like BFS , DFS, A* & Dijkstra.',
    image: 'https://images.unsplash.com/photo-1696941495517-6327a4aef380?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF6ZSUyMGZpbmRlcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['BFS', 'DFS', 'Dijkstra', 'A*', 'Pathfinding' , 'Recursion Trees'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Pathfinding-Visualizer',
  },
  /*
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with customizable charts. Built with React and D3.js for responsive and dynamic data exploration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Data Science', 'Web Development'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  */
  {
    id: 'postgenerator',
    title: 'Social Media Post Generator',
    description: 'A bot with many functions such as extracting posts from social media and producing unique ideas, measuring post-performance metrics, offering advice to the user based on the supplied metrics, and decision tree intelligence on post selection.',
    image: 'https://images.unsplash.com/photo-1676287571987-2f98ced3e6c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29udGVudCUyMEdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['Post Generator', 'Decision Tree Intelligence', 'Social Media' ],
    githubUrl: 'https://github.com/mc16dn/COSC-4P02-Group-Assignment',
    liveUrl: 'https://www.youtube.com/watch?v=0LPsPId1vhk&feature=youtu.be&themeRefresh=1'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, animations, and a clean, professional design.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Web Development', 'Javascript', 'React', 'Tailwind CSS' ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }

];

export default Projects;