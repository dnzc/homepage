"use client"

import Link from 'next/link';
import { HiLink } from 'react-icons/hi';

export default function ProjectCard({ 
  title, 
  description, 
  link,
  websites = [],
  tags = [],
  image 
}) {
  const CardContent = () => (
    <>
      {image && (
        <div className="w-full h-32 bg-gray-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-bold mb-2 text-base">
          {title}
        </h3>
        
        <p className="text-sm mb-3 leading-relaxed">
          {description}
        </p>

        {websites.length > 0 && (
          <div className="flex gap-2 mb-3">
            {websites.map((website, index) => (
              <a 
                key={index}
                href={website.url}
                className="text-link hover:underline flex items-center gap-1 text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <HiLink className="w-3 h-3" />
                {website.label}
              </a>
            ))}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const handleCardClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div 
      className={`bg-white shadow-md rounded-lg overflow-hidden w-60 ${link ? 'cursor-pointer hover:shadow-2xl transition-shadow duration-200' : ''}`}
      onClick={link ? handleCardClick : undefined}
    >
      <CardContent />
    </div>
  );
}