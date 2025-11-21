import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';

// Import projects from Projects.tsx
import { projects } from '../pages/Projects';  // Try adjusting this path if needed later
// Select featured projects dynamically
const featuredProjects = projects.slice(0, 3); // Change this logic if needed later

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900 -z-10"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary-300 dark:bg-secondary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Rifat Chowdhury</span>
              </h1>
              
              <div className="text-xl md:text-2xl font-medium mb-6 h-12">
                <TypeAnimation
                  sequence={[
                    'Computer Scientist',
                    2000,
                    'AI Enthusiast',
                    2000,
                    'Software Innovator',
                    2000,
                    'E-commerce Entrepreneur',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-gray-700 dark:text-gray-300"
                />
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
               Passionate about building scalable e-commerce businesses,
               leveraging AI for creative storytelling and developing innovative software solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  href="/resume.pdf" 
                  variant="primary" 
                  icon={<Download className="w-5 h-5" />}
                  download
                >
                  Download Resume
                </Button>
                
                <Button 
                  to="/projects" 
                  variant="secondary" 
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  View Projects
                </Button>
                
                <Button 
                  to="/contact" 
                  variant="outline"
                >
                  Contact Me
                </Button>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://github.com/Rifat-Chowdhury"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rifat-chowdhury-rc/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 blur-2xl"></div>
                <img
                  src="/profile.jpg"  // Change to your image filename
                  alt="My Profile Picture"
                  className="rounded-xl w-full shadow-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Skills Section */}
      <section className="section bg-white dark:bg-dark-700">
        <div className="container">
          <h2 className="section-title">Featured Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button to="/about" variant="outline" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              View All Skills
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      {/*
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-3">
                    <Button 
                      href={project.githubUrl} 
                      variant="outline" 
                      size="sm"
                      icon={<Github className="w-4 h-4" />}
                    >
                      GitHub
                    </Button>
                    <Button 
                      to={`/projects#${project.id}`} 
                      variant="primary" 
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button to="/projects" variant="secondary" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      */}
       <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                  <a href={project.githubUrl} className="mt-4 inline-block text-blue-500 hover:text-blue-700">View Project</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting collaborations.
            Let's create something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              to="/contact" 
              variant="outline" 
              className="bg-white text-primary-700 hover:bg-gray-100 border-white"
            >
              Contact Me
            </Button>
            <Button 
              href="/resume.pdf" 
              variant="outline" 
              className="border-white hover:bg-white/10"
              download
              icon={<Download className="w-5 h-5" />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data
const featuredSkills = [
  {
    name: 'Artificial Intelligence',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8a2 2 0 0 0 2-2V5"/></svg>,
    description: 'Developing intelligent systems that can learn, reason, and adapt.'
  },
  {
    name: 'Machine Learning',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>,
    description: 'Building models that can learn patterns from data and make predictions.'
  },
  {
    name: 'Software Development',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    description: 'Creating robust, scalable, and efficient software solutions.'
  },
  {
    name: 'Data Science',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
    description: 'Extracting insights and knowledge from structured and unstructured data.'
  }
];
/*
const featuredProjects = [
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'An intelligent conversational agent built with natural language processing techniques.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com'
  },
  {
    id: 'ml-recommendation',
    title: 'ML Recommendation System',
    description: 'A machine learning-based recommendation engine for personalized content delivery.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com'
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with customizable charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    githubUrl: 'https://github.com'
  }
];
*/

export default Home;