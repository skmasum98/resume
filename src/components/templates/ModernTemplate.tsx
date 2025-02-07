import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <div className="bg-blue-600 text-white p-8">
        <div className="flex items-center gap-8">
          {data.personalInfo.profilePicture && (
            <img
              src={data.personalInfo.profilePicture}
              alt={data.personalInfo.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          )}
          <div>
            <h1 className="text-4xl font-bold">{data.personalInfo.name}</h1>
            <p className="text-xl mt-2">{data.personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 mt-4">
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
      </div>

      <div className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Professional Summary</h2>
          <p className="text-gray-700">{data.personalInfo.summary}</p>
        </section>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <div className="text-gray-600">
                    {exp.company} {exp.location && `• ${exp.location}`} | {exp.startDate} - {exp.endDate}
                  </div>
                  <ul className="mt-2 text-gray-700 list-disc pl-4 space-y-1">
                    {exp.description.split('\n').map((bullet, i) => (
                      <li key={i}>{bullet.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                  <div className="text-gray-600">
                    {edu.institution} | {edu.graduationDate}
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
              <div className="flex flex-col gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {data.certifications?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Certifications</h2>
                <div className="space-y-2">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold">{cert.name}</div>
                      <div className="text-sm text-gray-600">
                        {cert.issuer} {cert.date && `• ${cert.date}`}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.awards?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Awards</h2>
                <div className="space-y-2">
                  {data.awards.map((award, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold">{award.name}</div>
                      <div className="text-sm text-gray-600">
                        {award.issuer} {award.date && `• ${award.date}`}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.languages?.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Languages</h2>
                <div className="space-y-2">
                  {data.languages.map((lang, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded flex justify-between">
                      <span>{lang.name}</span>
                      <span className="text-gray-600">{lang.proficiency}</span>
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