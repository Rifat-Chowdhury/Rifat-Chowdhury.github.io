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
               I am an entrepreneur, AI storytelling enthusiast, and a Computer Scientist with a passion for
               building scalable e-commerce businesses, leveraging AI for creative storytelling,
               and developing innovative software solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                As the founder of Cognition Studios, I am revolutionizing storytelling by producing high-quality
                AI-generated content across  <a href="https://www.youtube.com/@CognitionStudios0" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">YouTube</a>, <a href="https://www.instagram.com/cognition_studios/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Instagram</a> and <a href="https://www.linkedin.com/company/cognitionstudios0/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">LinkedIn</a>.
                My ventures also include managing and scaling two successful online stores: <a href="https://www.ebay.ca/usr/elegantfashionca" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Elegant Fashion CA</a>, which specializes in handcrafted Indian jewelry and bracelets,
                and <a href="https://www.ebay.ca/usr/turbo_gadget_hub" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Turbo Gadget Hub</a> <a href="https://www.facebook.com/marketplace/profile/100014590719018/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">(Facebook Marketplace)</a>, a curated marketplace for high-demand tech gadgets and collectibles.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                Along with my commercial endeavours, I have also worked as a Corridor Co-op Associate Highway Operations Management at the <a href="https://www.ontario.ca/page/ministry-transportation" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Ministry of Transportation (MTO)</a> and
                as a Promotions & Marketing Student Coordinator for <a href="https://www.brockbusu.ca/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Brock University Student Union</a>,
                 both of which have given me invaluable experience.
              </p>
               <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                My mission is to blend creativity with technology,
                pushing the boundaries of what’s possible in AI-driven content and digital commerce.
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
    name: 'Python',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    level: 95,
    description: 'Expert in Python for automation, AI, and data-driven applications.'
  },
  {
    name: 'Java',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame"><path d="M12 22c4.97-4.17 6-8.39 6-11a6 6 0 0 0-12 0c0 2.61 1.03 6.83 6 11z"></path></svg>,
    level: 95,
    description: 'Expert in Java, with skills in data structures, recursion, and algorithms.'
  },
  {
    name: 'C++',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>,
    level: 90,
    description: 'Experienced in C++ with object-oriented programming and ADTs.'
  },
  {
    name: 'JavaScript & TypeScript',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-codepen"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2"></polygon></svg>,
    level: 85,
    description: 'Full-stack development with React, Node.js, and TypeScript.'
  },
  {
    name: 'AI & Machine Learning',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"/><path d="M16 8V5c0-1.1.9-2 2-2"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8a2 2 0 0 0 2-2V5"/></svg>,
    level: 85,
    description: 'AI automation and optimization for real-world applications.'
  },
  {
    name: 'Web Development',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle></svg>,
    level: 85,
    description: 'HTML, CSS, and responsive UI development for modern web apps.'
  },
  {
    name: 'Software Development',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    level: 90,
    description: 'Software engineering, debugging, and optimizing applications.'
  },
    {
      name: '3D Modeling & Animation',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-3d"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>,
      level: 90,
      description: '3D modeling, texturing, and animation using Maya and Blender.'
    },
  {
    name: 'Digital Marketing & E-commerce',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.75 14.75a2 2 0 0 0 2 1.75h10.5a2 2 0 0 0 2-1.75L23 6H6"></path></svg>,
    level: 95,
    description: 'Marketing strategies and e-commerce store optimization.'
  },
    {
      name: 'Entrepreneurship',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect></svg>,
      level: 95,
      description: 'Founder of businesses, leading innovation and scaling growth.'
    },
    {
      name: 'Project Management',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect></svg>,
      level: 90,
      description: 'Managing projects, Jira workflows, and agile development teams.'
    },
  {
    name: 'Customer Relationship Management (CRM)',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-8 0v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    level: 90,
    description: 'Building customer engagement, retention, and loyalty strategies.'
  },
  {
    name: 'Creative Problem-Solving & Innovation',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-.99 1.51V22a2 2 0 1 1-4 0v-.42a1.65 1.65 0 0 0-.99-1.51A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33 1.65 1.65 0 0 0-.33 1.82v.42a2 2 0 1 1-4 0v-.42a1.65 1.65 0 0 0-.33-1.82A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0 1.51-.99 1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-.99H2a2 2 0 1 1 0-4h.42a1.65 1.65 0 0 0 1.51-.99 1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-.99-1.51V2a2 2 0 1 1 4 0v.42a1.65 1.65 0 0 0 .99 1.51A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33 1.65 1.65 0 0 0 .33-1.82V2a2 2 0 1 1 4 0v.42a1.65 1.65 0 0 0 .99 1.51A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 .33-1.82V2a2 2 0 1 1 4 0v.42a1.65 1.65 0 0 0 .99 1.51 1.65 1.65 0 0 0 1.51.99h.42a2 2 0 1 1 0 4h-.42a1.65 1.65 0 0 0-1.51.99 1.65 1.65 0 0 0 .33 1.82 1.65 1.65 0 0 0 1.51.99H22a2 2 0 1 1 0 4h-.42a1.65 1.65 0 0 0-1.51.99 1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 .99 1.51V22a2 2 0 1 1-4 0v-.42a1.65 1.65 0 0 0-.99-1.51A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33 1.65 1.65 0 0 0-.33 1.82v.42a2 2 0 1 1-4 0v-.42a1.65 1.65 0 0 0-.99-1.51A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33 1.65 1.65 0 0 0-.33 1.82v.42a2 2 0 1 1-4 0v-.42a1.65 1.65 0 0 0-.33-1.82A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 5.78 12 1.65 1.65 0 0 0 4.6 9H2a2 2 0 1 1 0-4h.42a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 4.6 4H2a2 2 0 1 1 0-4h.42a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 4.6 2H2a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 4H22a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 9H22a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 15H22a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 19H22a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 23H22a2 2 0 1 1 0 4H2a2 2 0 1 1 0-4h2.6a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 4.6 21H2a2 2 0 1 1 0-4h2.6a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 4.6 15H2a2 2 0 1 1 0-4h2.6a1.65 1.65 0 0 0 1.51-.99A1.65 1.65 0 0 0 4.6 9H2a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4h-2.6a1.65 1.65 0 0 0-1.51.99A1.65 1.65 0 0 0 19.4 6H22"></path></svg>,
    level: 90,
    description: 'Solving complex problems using innovative technology solutions.'
  },
  {
    name: 'Strategic Sales & Growth',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>,
    level: 95,
    description: 'Scaling businesses and optimizing sales with data-driven growth.'
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