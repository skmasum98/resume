import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Trash2 } from 'lucide-react';

interface EducationFormProps {
  education: ResumeData['education'];
  onChange: (education: ResumeData['education']) => void;
}

export function EducationForm({ education, onChange }: EducationFormProps) {
  const handleAdd = () => {
    onChange([
      ...education,
      {
        institution: '',
        degree: '',
        field: '',
        graduationDate: '',
      },
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(education.filter((_, i) => i !== index));
  };

  const updateEducation = (index: number, updates: Partial<ResumeData['education'][0]>) => {
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], ...updates };
    onChange(newEducation);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Education</h3>
      
      {education.map((edu, index) => (
        <div key={index} className="p-4 border rounded space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Degree Name"
              className="p-2 border rounded"
              value={edu.degree}
              onChange={(e) => updateEducation(index, { degree: e.target.value })}
            />
            <input
              type="text"
              placeholder="Field of Study/Major"
              className="p-2 border rounded"
              value={edu.field}
              onChange={(e) => updateEducation(index, { field: e.target.value })}
            />
            <input
              type="text"
              placeholder="Institution Name"
              className="p-2 border rounded"
              value={edu.institution}
              onChange={(e) => updateEducation(index, { institution: e.target.value })}
            />
            <input
              type="text"
              placeholder="Graduation Date (MM/YYYY)"
              className="p-2 border rounded"
              value={edu.graduationDate}
              onChange={(e) => updateEducation(index, { graduationDate: e.target.value })}
            />
          </div>

          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="flex items-center gap-2 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" /> Remove Education
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
      >
        + Add Education
      </button>
    </div>
  );
}