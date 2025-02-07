import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function CreativeTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="p-8">
        <div className="flex items-center gap-8 mb-8">
          {data.personalInfo.profilePicture && (
            <img
              src={data.personalInfo.profilePicture}
              alt={data.personalInfo.name}
              className="w-40 h-40 rounded-lg object-cover shadow-lg transform -rotate-3"
            />
          )}
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              {data.personalInfo.name}
            </h1>
            <p className="text-2xl mt-2 text-gray-600">{data.personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
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
          </div>
        </div>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-lg transform rotate-1">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">About Me</h2>
          <p className="text-gray-700">{data.personalInfo.summary}</p>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1">
            <h2 className="text-2xl font-bold mb-6 text-purple-600">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                <div className="text-purple-600 font-medium">
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

          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree} in {edu.field}
                  </h3>
                  <div className="text-purple-600">
                    {edu.institution} | {edu.graduationDate}
                  </div>
                </div>
              ))}
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full text-purple-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {data.certifications?.length > 0 && (
              <section className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Certifications</h2>
                <div className="space-y-2">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="p-2 bg-purple-50 rounded">
                      <div className="font-semibold">{cert.name}</div>
                      <div className="text-sm text-purple-600">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.awards?.length > 0 && (
              <section className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Awards</h2>
                <div className="space-y-2">
                  {data.awards.map((award, index) => (
                    <div key={index} className="p-2 bg-purple-50 rounded">
                      <div className="font-semibold">{award.name}</div>
                      <div className="text-sm text-purple-600">
                        {award.issuer} {award.date && `• ${award.date}`}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.languages?.length > 0 && (
              <section className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Languages</h2>
                <div className="space-y-2">
                  {data.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between p-2 bg-purple-50 rounded">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-purple-600">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}