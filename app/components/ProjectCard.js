'use client'

import { HiLink } from 'react-icons/hi';
import { useState, useEffect } from 'react';

export default function ProjectCard({ 
  title, 
  description, 
  link,
  tags = [],
  image,
  githubRepo = null
}) {
  const [commitCount, setCommitCount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (githubRepo) {
      setLoading(true);
      // Extract the base repo (owner/repo) from the full path
      const baseRepo = githubRepo.split('/').slice(0, 2).join('/');
      
      fetch(`https://api.github.com/repos/${baseRepo}`)
        .then(response => response.json())
        .then(data => {
          if (data.default_branch) {
            return fetch(`https://api.github.com/repos/${baseRepo}/commits?per_page=1&sha=${data.default_branch}`);
          }
        })
        .then(response => {
          if (response) {
            const linkHeader = response.headers.get('Link');
            if (linkHeader) {
              const match = linkHeader.match(/page=(\d+)>; rel="last"/);
              if (match) {
                setCommitCount(parseInt(match[1]));
              }
            } else {
              return response.json().then(commits => setCommitCount(commits.length));
            }
          }
        })
        .catch(error => {
          console.error('Error fetching commit count:', error);
          setCommitCount(null);
        })
        .finally(() => setLoading(false));
    }
  }, [githubRepo]);
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

        <div className="flex gap-2 mb-3 flex-wrap">
          {link && (
            <a 
              href={link.url}
              className="text-link hover:underline flex items-center gap-1 text-xs"
            >
              <HiLink className="w-3 h-3" />
              {link.label}
            </a>
          )}
          
          {githubRepo && (
            <a 
              href={`https://github.com/${githubRepo}`}
              className="text-link hover:underline flex items-center gap-1 text-xs"
            >
              <HiLink className="w-3 h-3" />
              {loading ? (
                <span className="text-gray-500">GitHub (loading...)</span>
              ) : commitCount !== null ? (
                <span>GitHub ({commitCount} commits)</span>
              ) : (
                <span>GitHub</span>
              )}
            </a>
          )}
        </div>
        
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

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60">
      <CardContent />
    </div>
  );
}