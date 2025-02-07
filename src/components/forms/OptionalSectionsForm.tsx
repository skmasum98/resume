import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Trash2 } from 'lucide-react';

interface OptionalSectionsFormProps {
  data: Pick<ResumeData, 'certifications' | 'awards' | 'languages'>;
  onChange: (updates: Partial<Pick<ResumeData, 'certifications' | 'awards' | 'languages'>>) => void;
}

export function OptionalSectionsForm({ data, onChange }: OptionalSectionsFormProps) {
  // Certifications
  const addCertification = () => {
    onChange({
      certifications: [
        ...(data.certifications || []),
        { name: '', issuer: '', date: '' },
      ],
    });
  };

  const removeCertification = (index: number) => {
    onChange({
      certifications: data.certifications?.filter((_, i) => i !== index),
    });
  };

  const updateCertification = (index: number, updates: Partial<ResumeData['certifications'][0]>) => {
    const newCertifications = [...(data.certifications || [])];
    newCertifications[index] = { ...newCertifications[index], ...updates };
    onChange({ certifications: newCertifications });
  };

  // Awards
  const addAward = () => {
    onChange({
      awards: [...(data.awards || []), { name: '', issuer: '', date: '' }],
    });
  };

  const removeAward = (index: number) => {
    onChange({
      awards: data.awards?.filter((_, i) => i !== index),
    });
  };

  const updateAward = (index: number, updates: Partial<ResumeData['awards'][0]>) => {
    const newAwards = [...(data.awards || [])];
    newAwards[index] = { ...newAwards[index], ...updates };
    onChange({ awards: newAwards });
  };

  // Languages
  const addLanguage = () => {
    onChange({
      languages: [...(data.languages || []), { name: '', proficiency: '' }],
    });
  };

  const removeLanguage = (index: number) => {
    onChange({
      languages: data.languages?.filter((_, i) => i !== index),
    });
  };

  const updateLanguage = (index: number, updates: Partial<ResumeData['languages'][0]>) => {
    const newLanguages = [...(data.languages || [])];
    newLanguages[index] = { ...newLanguages[index], ...updates };
    onChange({ languages: newLanguages });
  };

  return (
    <div className="space-y-8">
      {/* Certifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
        
        {data.certifications?.map((cert, index) => (
          <div key={index} className="p-4 border rounded space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Certification Name"
                className="p-2 border rounded col-span-2"
                value={cert.name}
                onChange={(e) => updateCertification(index, { name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Date (MM/YYYY)"
                className="p-2 border rounded"
                value={cert.date}
                onChange={(e) => updateCertification(index, { date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                className="p-2 border rounded col-span-3"
                value={cert.issuer}
                onChange={(e) => updateCertification(index, { issuer: e.target.value })}
              />
            </div>

            <button
              type="button"
              onClick={() => removeCertification(index)}
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addCertification}
          className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          + Add Certification
        </button>
      </div>

      {/* Awards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Awards & Honors</h3>
        
        {data.awards?.map((award, index) => (
          <div key={index} className="p-4 border rounded space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Award Name"
                className="p-2 border rounded col-span-2"
                value={award.name}
                onChange={(e) => updateAward(index, { name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Date (MM/YYYY)"
                className="p-2 border rounded"
                value={award.date}
                onChange={(e) => updateAward(index, { date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Granting Organization"
                className="p-2 border rounded col-span-3"
                value={award.issuer}
                onChange={(e) => updateAward(index, { issuer: e.target.value })}
              />
            </div>

            <button
              type="button"
              onClick={() => removeAward(index)}
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addAward}
          className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          + Add Award
        </button>
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
        
        {data.languages?.map((lang, index) => (
          <div key={index} className="p-4 border rounded space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Language"
                className="p-2 border rounded"
                value={lang.name}
                onChange={(e) => updateLanguage(index, { name: e.target.value })}
              />
              <select
                className="p-2 border rounded"
                value={lang.proficiency}
                onChange={(e) => updateLanguage(index, { proficiency: e.target.value })}
              >
                <option value="">Select Proficiency</option>
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Professional">Professional</option>
                <option value="Conversational">Conversational</option>
                <option value="Basic">Basic</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => removeLanguage(index)}
              className="flex items-center gap-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addLanguage}
          className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          + Add Language
        </button>
      </div>
    </div>
  );
}