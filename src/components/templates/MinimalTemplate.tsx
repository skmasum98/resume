import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function MinimalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <header className="text-center mb-8">
        {data.personalInfo.profilePicture && (
          <img
            src={data.personalInfo.profilePicture}
            alt={data.personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
        )}
        <h1 className="text-4xl font-bold text-gray-800">{data.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{data.personalInfo.title}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" /> {data.personalInfo.email}
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" /> {data.personalInfo.phone}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {data.personalInfo.location}
          </span>
          {data.personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" /> {data.personalInfo.linkedin}
            </span>
          )}
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Summary</h2>
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
            <div className="text-gray-600">
              {exp.company} {exp.location && `• ${exp.location}`} | {exp.startDate} - {exp.endDate}
            </div>
            <ul className="mt-2 list-disc pl-4 text-gray-700 space-y-1">
              {exp.description.split('\n').map((bullet, i) => (
                <li key={i}>{bullet.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {edu.degree} in {edu.field}
            </h3>
            <div className="text-gray-600">
              {edu.institution} | {edu.graduationDate}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {data.certifications?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Certifications</h2>
          <div className="space-y-2">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{cert.name}</span>
                <span className="text-gray-600">
                  {cert.issuer} {cert.date && `• ${cert.date}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.awards?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Awards & Honors</h2>
          <div className="space-y-2">
            {data.awards.map((award, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{award.name}</span>
                <span className="text-gray-600">
                  {award.issuer} {award.date && `• ${award.date}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.languages?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Languages</h2>
          <div className="flex flex-wrap gap-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="font-medium">{lang.name}</span>
                <span className="text-gray-600"> • {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}