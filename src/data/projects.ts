export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  privateSource?: boolean;
  imageCaption?: string;
}

export const projects: Project[] = [
  {
    id: 'sellpoint',
    title: 'SellPoint',
    description: 'An inventory and sales management web app connecting Google Sheets to dashboards, stock updates, multi-channel sales, payments, receipts, and customer reporting. Formula-safe writes preserve calculated workbook columns while keeping business records connected.',
    image: '/images/sellpoint.png',
    tags: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'Data Visualization', 'Web App'],
    privateSource: true,
    imageCaption: 'Illustrative dashboard preview',
  },
  {
    id: 'aeternum',
    title: 'Aeternum: Warfront',
    description: 'A Java 21 and JavaFX strategy game with base building, resource management, troop training, and real-time battles. Includes campaign autosaves, an automated live-simulation mode, and a backend harness for scenario validation and save/load checks.',
    image: '/images/aeternum.png',
    tags: ['Java', 'JavaFX', 'Maven', 'Game Development', 'Simulation'],
    privateSource: true,
    imageCaption: 'Gameplay illustration',
  },
  {
    id: 'job-search-command-center',
    title: 'Job Search Command Center',
    description: 'A Python workflow for scoring job leads, prioritizing daily tasks, preparing application materials, and tracking follow-ups through a local dashboard. Adds company-careers discovery and browser-assisted form filling for supported application flows.',
    image: '/images/job-search-command-center.png',
    tags: ['Python', 'Playwright', 'Automation', 'Data Analysis', 'Dashboard'],
    privateSource: true,
    imageCaption: 'Illustrative dashboard preview',
  },
  {
    id: 'vibemap',
    title: 'VibeMap',
    description: 'A data-driven music recommendation system that maps songs by mood and tempo using audio features.',
    image: '/images/vibemap.jpg',
    tags: ['Web App', 'Visualization', 'Geospatial'],
    githubUrl: 'https://github.com/jeff13in/VibeMap',
  },
  {
    id: 'weather-wise',
    title: 'WeatherWise',
    description: 'A full-stack weather application built with React, Express, and SQLite featuring real-time weather, five-day forecasts, location search, GPS support, CRUD operations, error handling, map integration, and CSV/JSON export.',
    image: '/images/weather-wise.jpg',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'Open-Meteo API', 'REST APIs'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/WeatherWise',
    liveUrl: 'https://drive.google.com/file/d/1lhRpKHp2fRTvbv58zpFpOohDKrvfuPKL/view?usp=sharing',
  },
  {
    id: 'weather-trend-forecasting',
    title: 'Weather Trend Forecasting',
    description: 'Analyze the Global Weather Repository dataset, containing daily weather data and over 40 features for cities worldwide. This project applies data cleaning, exploratory analysis, visualization, feature engineering, statistical methods, and machine learning to uncover patterns and forecast future weather trends.',
    image: '/images/weather-trend-forecasting.jpg',
    tags: ['Python', 'Time Series Forecasting', 'Data Visualization'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Weather-Trend-Forecasting',
    liveUrl: 'https://drive.google.com/file/d/1nbKHSTIs7QWejUdKx20x6wd0zyLypb_-/view?usp=sharing',
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    description: 'A comprehensive dashboard to analyze human resources data, providing both summary views for high-level insights and detailed employee records for in-depth analysis',
    image: '/images/hr-analytics-dashboard.jpg',
    tags: ['Power BI', 'Python', 'SQL', 'Excel', 'Data Cleaning'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/HR-Dashboard',
    liveUrl: 'https://public.tableau.com/views/HRDashboard_17726519990260/HRSummary',
  },
  {
    id: 'usda-production-analysis',
    title: 'USDA Production Analysis',
    description: 'End-to-end SQL data analysis project using SQLite & DBeaver. Includes table creation, CSV imports, data cleaning, and analytical queries on US agricultural production datasets (milk, cheese, coffee, eggs, honey, yogurt).',
    image: '/images/usda-production-analysis.jpg',
    tags: ['Data Analysis', 'Python', 'Visualization', 'SQL'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/USDA-Production-Analysis.git',
  },
  {
    id: 'sql-leetcode',
    title: 'SQL LeetCode',
    description: 'A collection of SQL solutions demonstrating joins, aggregations, window functions, and data modeling skills.',
    image: '/images/sql-leetcode.jpg',
    tags: ['SQL', 'Data Analysis'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/SQL-LeetCode',
  },
  {
    id: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    description: 'An interactive visualization tool for pathfinding algorithms like BFS, DFS, A* & Dijkstra.',
    image: '/images/pathfinding-visualizer.jpg',
    tags: ['Visualization', 'Web App'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Pathfinding-Visualizer',
  },
  {
    id: 'postgenerator',
    title: 'Social Media Post Generator',
    description: 'A bot that extracts posts, generates ideas, measures performance metrics, and provides decision-tree guidance.',
    image: '/images/social-media-post-generator.jpg',
    tags: ['Data Analysis', 'Web App'],
    githubUrl: 'https://github.com/mc16dn/COSC-4P02-Group-Assignment',
    liveUrl: 'https://www.youtube.com/watch?v=0LPsPId1vhk&feature=youtu.be&themeRefresh=1',
  },
  {
    id: 'opsbrain',
    title: 'OpsBrain',
    description: 'A multi-agent DevOps intelligence platform built with Python, FastAPI, and LangGraph. Coordinates RAG, Monitoring, Infra, and Code agents to combine cited runbook answers, operational metrics, infrastructure state, and GitHub activity, with HTTP/Kafka communication, timeout handling, and a dashboard preview.',
    image: '/images/opsbrain.jpg',
    tags: ['Python', 'FastAPI', 'LangGraph', 'RAG', 'PostgreSQL', 'Kafka', 'Prometheus', 'Docker'],
    githubUrl: 'https://github.com/jeff13in/OpsBrain',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, animations, and a clean, professional design.',
    image: '/images/portfolio-website.jpg',
    tags: ['Web App', 'Visualization'],
    githubUrl: 'https://github.com/Rifat-Chowdhury/Rifat-Chowdhury.github.io',
    liveUrl: 'https://rifat-chowdhury.github.io',
  },
];

export const projectTags = [...new Set(projects.flatMap((project) => project.tags))].sort();
