import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                I’m a data-focused Computer Science graduate who turns messy data into clear, decision-ready insights.
                I work with SQL, Python, Excel, and BI tools to build dashboards and communicate
                findings that drive business outcomes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                I run an e-commerce store, <a href="https://www.ebay.ca/usr/turbo_gadget_hub" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Turbo Gadget Hub</a>
                <a href="https://www.facebook.com/marketplace/profile/100014590719018/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline"> (Facebook Marketplace)</a>,
                where I track performance, optimize listings, and apply data-backed decisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                I’ve also worked as a Corridor Co-op Associate (Highway Operations Management) at the <a href="https://www.ontario.ca/page/ministry-transportation" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Ministry of Transportation (MTO)</a>
                and as a Promotions & Marketing Student Coordinator for the <a href="https://www.brockbusu.ca/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Brock University Student Union</a>,
                which strengthened my analytical, operational, and stakeholder communication skills.
              </p>

              <Button
                href="/resume.pdf"
                variant="primary"
                icon={<Download className="w-5 h-5" />}
                download
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl opacity-20 blur-2xl"></div>
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

      {/* Skills Section */}
      <section className="section bg-white dark:bg-dark-700">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          {/* Updated Grid Layout for Uniform Box Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Ensure each skill card has full height */}
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  description={skill.description}
                  className="h-full flex flex-col justify-between"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Education & Experience Section */}
      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
              </div>

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className="text-sm font-medium px-2 py-1 rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.position}</h3>
                      <span className="text-sm font-medium px-2 py-1 rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/*
      <section className="section bg-white dark:bg-dark-700">
        <div className="container">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <span className="text-sm font-medium px-2 py-1 rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {cert.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{cert.issuer}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center mt-2"
                  >
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Interests Section */}

      <section className="section bg-gray-50 dark:bg-dark-800">
        <div className="container">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold">Area of Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// The icons are from Lucide icons (just copy an paste in the SVG link)
const skills = [
  {
    name: 'SQL (PostgreSQL, MySQL, SQLite)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"></path></svg>,
    level: 95,
    description: 'Writing complex queries, joins, CTEs, and window functions for analysis.'
  },
  {
    name: 'Python (Pandas, NumPy)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    level: 90,
    description: 'Data cleaning, analysis, and reproducible notebooks.'
  },
  {
    name: 'Excel (PivotTables, Power Query)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-table"><path d="M9 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9"></path><path d="M3 3h6v18H3z"></path><path d="M3 9h6"></path><path d="M3 15h6"></path></svg>,
    level: 90,
    description: 'Modeling data, building reports, and automating analysis workflows.'
  },
  {
    name: 'Power BI',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>,
    level: 85,
    description: 'Interactive dashboards, KPI tracking, and stakeholder-ready visuals.'
  },
  {
    name: 'Tableau',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    level: 85,
    description: 'Exploratory dashboards, filters, and storyboards.'
  },
  {
    name: 'Data Visualization',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-line-chart"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>,
    level: 90,
    description: 'Choosing the right chart to communicate insights clearly.'
  },
  {
    name: 'Statistics',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sigma"><path d="M7 4h10"></path><path d="M7 20h10"></path><path d="M7 4 17 12 7 20"></path></svg>,
    level: 85,
    description: 'Hypothesis testing, confidence intervals, and experiment analysis.'
  },
  {
    name: 'Data Cleaning & EDA',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><path d="M22 3H2"></path><path d="M19 9H5"></path><path d="M16 15H8"></path><path d="M13 21H11"></path></svg>,
    level: 90,
    description: 'Handling missing data, outliers, and exploratory analysis.'
  },
  {
    name: 'Data Modeling',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>,
    level: 80,
    description: 'Designing clean schemas for reliable analysis and reporting.'
  },
  {
    name: 'ETL / ELT',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shuffle"><path d="m16 3 5 5-5 5"></path><path d="M4 20h7a4 4 0 0 0 4-4V3"></path><path d="m16 21 5-5-5-5"></path><path d="M4 4h7a4 4 0 0 1 4 4v1"></path></svg>,
    level: 80,
    description: 'Building repeatable data pipelines from raw files to analysis-ready tables.'
  },
  {
    name: 'DBeaver',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    level: 85,
    description: 'Database exploration, query development, and schema management.'
  },
  {
    name: 'Data Storytelling',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M12 7v14"></path><path d="M3 18a4 4 0 0 1 4-4h5"></path><path d="M21 18a4 4 0 0 0-4-4h-5"></path><path d="M3 6a4 4 0 0 1 4-4h5v5H7a4 4 0 0 0-4 4z"></path><path d="M21 6a4 4 0 0 0-4-4h-5v5h5a4 4 0 0 1 4 4z"></path></svg>,
    level: 90,
    description: 'Turning analysis into clear narratives for stakeholders.'
  },
  {
    name: 'Git & Version Control',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>,
    level: 85,
    description: 'Tracking changes, collaborating, and managing code history.'
  },
  {
    name: 'GitHub',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    level: 85,
    description: 'Repo management, issue tracking, and collaborative workflows.'
  },
  {
    name: 'Jira & Miro',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-kanban-square"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M7 7h3v9H7z"></path><path d="M14 7h3v5h-3z"></path></svg>,
    level: 80,
    description: 'Planning, backlog management, and team collaboration.'
  },
  {
    name: 'Azure',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.5 1.5A4 4 0 0 0 6 19h11.5z"></path></svg>,
    level: 70,
    description: 'Cloud fundamentals for data storage and analytics workflows.'
  },
  {
    name: 'HTML & CSS',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path></svg>,
    level: 75,
    description: 'Basic web structure and styling for reporting and dashboards.'
  },
  {
    name: 'Java',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    level: 80,
    description: 'Object-oriented programming and algorithmic problem solving.'
  },
  {
    name: 'C++',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    level: 75,
    description: 'Data structures and performance-focused programming.'
  },
  {
    name: 'Data Structures & Algorithms',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sitemap"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M6 9v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"></path><path d="M12 15v-3"></path></svg>,
    level: 80,
    description: 'Arrays, recursion, complexity analysis, and ADTs.'
  },
  {
    name: 'IDEs (IntelliJ, Eclipse, Visual Studio)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>,
    level: 75,
    description: 'Productive development and debugging workflows.'
  },
  {
    name: 'Microsoft Suite',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>,
    level: 85,
    description: 'Documentation, reporting, and presentation-ready deliverables.'
  },
  {
    name: 'Adobe Suite',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 22a10 10 0 1 0-7.5-3.5"></path><path d="M12 22a2.5 2.5 0 0 0 2.5-2.5c0-1.5-1.5-3-3-3H9"></path></svg>,
    level: 70,
    description: 'Basic design and visual communication for presentations.'
  },
  {
    name: 'Maple',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-function-square"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 17c.5-4 1-7 4-7"></path><path d="M9 9h6"></path></svg>,
    level: 70,
    description: 'Math and calculus tooling for quantitative work.'
  }
];


const education = [

  {
      degree: 'B.S. in Computer Science Co-Op',
      institution: 'Brock University, Ontario',
      year: '2019-2025',
      description: 'Graduated with co-op experience in quality assurance and marketing roles. Skilled in Java, C++, data structures, algorithm design, and 3D modeling.'
  }

];

const experience = [
  {
    position: 'Social Media Coordinator',
    company: 'Golive Music Club, Brock University',
    period: 'May 2022 - Present',
    description: 'Designed and managed digital marketing campaigns, creating promotional content using graphic design tools. Increased social media engagement and event participation.'
  },
  {
    position: 'Promotions & Marketing Coordinator',
    company: 'Brock University Student Union',
    period: 'Sep 2022 - Apr 2023 | Sep 2023 - Apr 2024',
    description: 'Helped with the marketing initiatives to enhance student engagement. Organized campus events, increased awareness of student services, and improved promotional outreach.'
  },
  {
    position: 'Corridor Co-op Associate of Operations',
    company: 'Ministry of Transportation',
    period: 'Jan 2022 - Aug 2022 | May 2023 - Aug 2023',
    description: 'Debugged and tested internal systems, identifying and reporting major issues. Assisted in deploying a mapping tool in ArcGIS for permit tracking and operations management.'
  },

  {
    position: 'Customer Service Team Member',
    company: 'KFC',
    period: 'May 2021 - Dec 2021',
    description: 'Managed customer service roles, including drive-thru, front cashier, and food preparation. Developed multitasking skills and maintained quality service under high demand.'
  },
  {
    position: 'Store Clerk',
    company: 'Avondale Convenience',
    period: 'May 2020 - Nov 2020',
    description: 'Assisted customers with purchases, restocked inventory, and handled transactions. Resolved customer inquiries and maintained a positive store environment.'
  }
];

/**
const certifications = [
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2021',
    url: 'https://www.tensorflow.org/certificate'
  },
  {
    name: 'AWS Certified Machine Learning – Specialty',
    issuer: 'Amazon Web Services',
    year: '2020',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera (deeplearning.ai)',
    year: '2019',
    url: 'https://www.coursera.org/specializations/deep-learning'
  }
];
*/

const interests = [
  {
    title: 'Explainable AI',
    description: 'Developing methods to make AI systems more transparent and interpretable, enabling users to understand and trust AI decisions.'
  },
  {
    title: 'Reinforcement Learning',
    description: 'Exploring advanced reinforcement learning algorithms for complex decision-making problems in robotics and autonomous systems.'
  },
  {
    title: 'AI Ethics',
    description: 'Researching ethical implications of AI systems and developing frameworks for responsible AI development and deployment.'
  },
  {
    title: 'Multimodal Learning',
    description: 'Investigating approaches for integrating information from multiple modalities (text, image, audio) for more robust AI systems.'
  },
  {
    title: 'Cybersecurity & Privacy',
    description: 'Exploring AI-driven security solutions to protect digital assets and ensure data privacy in online systems and applications.'
  },
  {
    title: 'E-commerce Optimization',
    description: 'Optimizing online sales and customer engagement using AI-driven personalization, automated marketing, and inventory management.'
  },
  {
    title: 'Computer Vision & Image Processing',
    description: 'Developing AI models for real-time image recognition, object detection, and automated visual data analysis.'
  },
  {
    title: 'Human-Computer Interaction (HCI)',
    description: 'Designing AI-powered tools that improve usability and interaction between humans and intelligent systems.'
  },
  {
    title: 'Financial Technology (FinTech)',
    description: 'Applying AI for stock market predictions, high-frequency trading, and fraud detection in financial transactions.'
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Building AI models for sentiment analysis, chatbots, language translation, and automated content generation.'
  }
];




export default About;

