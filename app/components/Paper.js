'use client';

import Link from 'next/link';
import { toast } from 'react-toastify';
import MyLink from './MyLink';

export default function Paper({ 
  title, 
  titleHref,
  authors, 
  subtitle, 
  links = [], 
  description, 
  image 
}) {
  return (
    <div className="flex mb-5">
      <div className="w-1/5 pr-4">
        {image ? (
          <img src={image} alt={title} className="w-full h-auto" />
        ) : (
          <div className="w-full h-24 bg-gray-300"></div>
        )}
      </div>
      <div className="flex-1">
        <p className="font-bold"><MyLink href={titleHref}>{title}</MyLink></p>
        <p>{authors}</p>
        <p>{subtitle}</p>
        {links.length > 0 && (
          <p>
            {links.map((link, index) => (
              <span key={index}>
                {link.type === 'copy' ? (
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(link.content);
                      toast.success(`${link.label} copied to clipboard!`);
                    }}
                    className="text-link cursor-pointer hover:underline bg-transparent border-none p-0"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link href={link.url} className="text-link">{link.label}</Link>
                )}
                {index < links.length - 1 && " / "}
              </span>
            ))}
          </p>
        )}
        <p className="mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}