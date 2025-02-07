import React from 'react';
import { Upload } from 'lucide-react';
import type { ResumeData } from '../../types/resume';

interface PersonalInfoFormProps {
  data: ResumeData['personalInfo'];
  onChange: (data: ResumeData['personalInfo']) => void;
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...data,
          profilePicture: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
      
      <div className="flex items-center gap-4">
        {data.profilePicture ? (
          <img
            src={data.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
        )}
        <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload Photo
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border rounded"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Professional Title"
          className="p-2 border rounded"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 border rounded"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-2 border rounded"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location (City, State)"
          className="p-2 border rounded"
          value={data.location}
          onChange={(e) => onChange({ ...data, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="LinkedIn Profile URL (Optional)"
          className="p-2 border rounded"
          value={data.linkedin || ''}
          onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
        />
      </div>

      <div>
        <textarea
          placeholder="Professional Summary (3-4 sentences highlighting your key strengths and career goals)"
          className="w-full p-2 border rounded h-32"
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
        />
        <p className="text-sm text-gray-500 mt-1">
          Focus on your key strengths and what you bring to the table. Keep it concise and impactful.
        </p>
      </div>
    </div>
  );
}