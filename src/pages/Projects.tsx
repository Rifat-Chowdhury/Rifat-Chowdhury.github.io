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

/* Legacy project data retained temporarily while the new shared data module is adopted.
const projects = [
   {
    id: 'vibemap',
    title: 'VibeMap',
    description: 'A data-driven music recommendation system that maps songs by mood and tempo using audio features.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    tags: ['Web App', 'Visualization', 'Geospatial'],
    githubUrl: 'https://github.com/jeff13in/VibeMap',
  },
    {
    id: 'weather-wise',
    title: 'WeatherWise',
    description: 'A full-stack weather application built with React, Express, and SQLite featuring real-time weather, five-day forecasts, location search, GPS support, CRUD operations, error handling, map integration, and CSV/JSON export.',
    image: 'https://images.unsplash.com/photo-1630260643564-7f9c9c140682?auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'Open-Meteo API', 'REST APIs'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/WeatherWise',
    liveUrl: 'https://drive.google.com/file/d/1lhRpKHp2fRTvbv58zpFpOohDKrvfuPKL/view?usp=sharing',
  },
   {
    id: 'weather-trend-forecasting',
    title: 'Weather Trend Forecasting ',
    description: 'Analyze the Global Weather Repository dataset, containing daily weather data and over 40 features for cities worldwide. This project applies data cleaning, exploratory analysis, visualization, feature engineering, statistical methods, and machine learning to uncover patterns and forecast future weather trends.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1000&q=80',
    tags: ['Python', 'Time Series Forecasting', 'Data Visualization'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Weather-Trend-Forecasting',
    liveUrl: 'https://drive.google.com/file/d/1nbKHSTIs7QWejUdKx20x6wd0zyLypb_-/view?usp=sharing',
  },
   {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    description: 'A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    tags: ['Power BI', 'Python', 'SQL', 'Excel', 'Data Cleaning'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/HR-Dashboard',
    liveUrl: 'https://public.tableau.com/views/HRDashboard_17726519990260/HRSummary',
  },
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
    githubUrl: 'https://github.com/Rifat-Chowdhury/Rifat-Chowdhury.github.io',
    liveUrl: 'https://rifat-chowdhury.github.io'
  }
];

const tags = [...new Set(projects.flatMap((project) => project.tags))].sort();
*/

export default Projects;
