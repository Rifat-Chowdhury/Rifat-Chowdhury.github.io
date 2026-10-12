import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, LockKeyhole } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailsTo?: string;
  privateSource?: boolean;
  imageCaption?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  detailsTo,
  privateSource,
  imageCaption,
}) => {
  return (
    <motion.div 
      className="card overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48 bg-slate-100 dark:bg-dark-900">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          decoding="async"
          className={`w-full h-full transition-transform duration-500 ${imageCaption ? 'object-contain' : 'object-cover hover:scale-110'}`}
        />
        {imageCaption && (
          <span className="absolute bottom-2 left-2 rounded bg-dark-900/85 px-2 py-1 text-xs text-white">
            {imageCaption}
          </span>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {privateSource && (
            <span className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <LockKeyhole className="w-4 h-4" aria-hidden="true" />
              Private source code
            </span>
          )}
          {githubUrl && (
            <Button 
              href={githubUrl} 
              variant="outline" 
              size="sm"
              icon={<Github className="w-4 h-4" />}
            >
              View on GitHub
            </Button>
          )}
          
          {liveUrl && (
            <Button 
              href={liveUrl} 
              variant="primary" 
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Live Demo
            </Button>
          )}

          {detailsTo && (
            <Button
              to={detailsTo}
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Details
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
