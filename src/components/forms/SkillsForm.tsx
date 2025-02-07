import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SkillsFormProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

export function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState('');

  const handleAdd = (skill: string) => {
    if (skill.trim()) {
      onChange([...skills, skill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemove = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill}
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a skill"
          className="flex-1 p-2 border rounded"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAdd(newSkill);
            }
          }}
        />
        <button
          type="button"
          onClick={() => handleAdd(newSkill)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Press Enter or click Add to add a skill. Consider grouping skills by category (e.g., Technical Skills, Soft Skills).
      </p>
    </div>
  );
}