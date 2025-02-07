import React from 'react';
import type { ResumeData } from '../../types/resume';
import { Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  experiences: ResumeData['experience'];
  onChange: (experiences: ResumeData['experience']) => void;
}

export function ExperienceForm({ experiences, onChange }: ExperienceFormProps) {
  const handleAdd = () => {
    onChange([
      ...experiences,
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const handleRemove = (index: number) => {
    onChange(experiences.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, updates: Partial<ResumeData['experience'][0]>) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], ...updates };
    onChange(newExperiences);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
      
      {experiences.map((exp, index) => (
        <div key={index} className="p-4 border rounded space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Job Title"
              className="p-2 border rounded"
              value={exp.position}
              onChange={(e) => updateExperience(index, { position: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-2 border rounded"
              value={exp.company}
              onChange={(e) => updateExperience(index, { company: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location (City, State)"
              className="p-2 border rounded"
              value={exp.location}
              onChange={(e) => updateExperience(index, { location: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Start Date (MM/YYYY)"
                className="p-2 border rounded"
                value={exp.startDate}
                onChange={(e) => updateExperience(index, { startDate: e.target.value })}
              />
              <input
                type="text"
                placeholder="End Date (MM/YYYY)"
                className="p-2 border rounded"
                value={exp.endDate}
                onChange={(e) => updateExperience(index, { endDate: e.target.value })}
              />
            </div>
          </div>
          
          <div>
            <textarea
              placeholder="Key responsibilities and achievements (use bullet points starting with action verbs)"
              className="w-full p-2 border rounded h-32"
              value={exp.description}
              onChange={(e) => updateExperience(index, { description: e.target.value })}
            />
            <p className="text-sm text-gray-500 mt-1">
              Start each bullet point with an action verb. Quantify achievements when possible (e.g., "Increased sales by 15%").
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="flex items-center gap-2 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4" /> Remove Experience
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="w-full p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
      >
        + Add Work Experience
      </button>
    </div>
  );
}