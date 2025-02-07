import React from 'react';
import type { ResumeData } from '../types/resume';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { OptionalSectionsForm } from './forms/OptionalSectionsForm';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  return (
    <div className="space-y-8 bg-white rounded-lg shadow-lg p-6">
      <PersonalInfoForm
        data={data.personalInfo}
        onChange={(personalInfo) => onChange({ ...data, personalInfo })}
      />

      <hr />

      <ExperienceForm
        experiences={data.experience}
        onChange={(experience) => onChange({ ...data, experience })}
      />

      <hr />

      <EducationForm
        education={data.education}
        onChange={(education) => onChange({ ...data, education })}
      />

      <hr />

      <SkillsForm
        skills={data.skills}
        onChange={(skills) => onChange({ ...data, skills })}
      />

      <hr />

      <OptionalSectionsForm
        data={data}
        onChange={(updates) => onChange({ ...data, ...updates })}
      />
    </div>
  );
}