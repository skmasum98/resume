import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Linkedin } from 'lucide-react';

export function TraditionalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-[Georgia]">
      {/* Header */}
      <header className="text-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{data.personalInfo.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 text-gray-600 text-sm">
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.email && <span>• {data.personalInfo.email}</span>}
          {data.personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              • <Linkedin className="w-4 h-4" /> {data.personalInfo.linkedin}
            </span>
          )}
          {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{data.personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Work Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <div>
                  <span className="font-semibold">{exp.position}</span>
                  {exp.company && (
                    <span className="text-gray-700">, {exp.company}</span>
                  )}
                  {exp.location && (
                    <span className="text-gray-700">, {exp.location}</span>
                  )}
                </div>
                <div className="text-gray-600 text-sm">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 pl-4 space-y-1">
                {exp.description.split('\n').map((bullet, i) => (
                  <li key={i} className="leading-relaxed">{bullet.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-semibold">{edu.degree}</span>
                  {edu.field && <span>, {edu.field}</span>}
                  {edu.institution && (
                    <span className="text-gray-700">, {edu.institution}</span>
                  )}
                </div>
                <div className="text-gray-600 text-sm">{edu.graduationDate}</div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Skills
          </h2>
          <div className="text-sm text-gray-700">
            {data.skills.join(' • ')}
          </div>
        </section>
      )}

      {/* Certifications */}
      {data.certifications?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 pl-4">
            {data.certifications.map((cert, index) => (
              <li key={index}>
                {cert.name} - {cert.issuer}
                {cert.date && <span> ({cert.date})</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Awards */}
      {data.awards?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Awards & Honors
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 pl-4">
            {data.awards.map((award, index) => (
              <li key={index}>
                {award.name} - {award.issuer}
                {award.date && <span> ({award.date})</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {data.languages?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 mb-2">
            Languages
          </h2>
          <div className="text-sm text-gray-700">
            {data.languages.map((lang, index) => (
              <span key={index}>
                {lang.name} ({lang.proficiency})
                {index < data.languages.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}