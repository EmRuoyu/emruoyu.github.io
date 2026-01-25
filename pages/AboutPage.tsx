import React from 'react';
import { experienceData, educationData, contactLinks } from '../constants';
import meImage from '../images/me.png';

const AboutPage: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row gap-12">
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-black mb-6">Experiences</h2>
          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="grid grid-cols-[140px_1fr] gap-4 md:gap-8">
                <p className="text-base text-gray-500">{exp.year}</p>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-1">{exp.title}</h3>
                  {exp.institution && (
                    <p className="text-lg font-semibold text-black mb-2">{exp.institution}</p>
                  )}
                  <p className="text-lg text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 md:w-1/3 mt-6 md:mt-0">
          <img 
            src={meImage}
            alt="Ruoyu Zhang"
            className="rounded-2xl w-full h-auto object-cover max-w-sm mx-auto"
          />
        </div>
      </section>
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-black mb-6">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu) => (
            <div key={edu.id} className="grid grid-cols-[140px_1fr] gap-4 md:gap-8">
              <p className="text-base text-gray-500">{edu.year}</p>
              <div>
                <h3 className="text-xl font-semibold text-black mb-1">{edu.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-black mb-4">Contact</h2>
        <div className="flex space-x-6">
          {contactLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl text-black font-medium hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
