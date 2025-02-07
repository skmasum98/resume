import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ResumeForm } from './components/ResumeForm';
import { MinimalTemplate } from './components/templates/MinimalTemplate';
import { ModernTemplate } from './components/templates/ModernTemplate';
import { CreativeTemplate } from './components/templates/CreativeTemplate';
import { ClassicTemplate } from './components/templates/ClassicTemplate';
import { TraditionalTemplate } from './components/templates/TraditionalTemplate';
import type { ResumeData } from './types/resume';
import { Download } from 'lucide-react';

const initialData: ResumeData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    profilePicture: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  awards: [],
  languages: [],
};

const templates = [
  { id: 'traditional', name: 'Traditional', component: TraditionalTemplate },
  { id: 'minimal', name: 'Minimal', component: MinimalTemplate },
  { id: 'modern', name: 'Modern', component: ModernTemplate },
  { id: 'creative', name: 'Creative', component: CreativeTemplate },
  { id: 'classic', name: 'Classic', component: ClassicTemplate },
];

function App() {
  const [data, setData] = useState<ResumeData>(initialData);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!targetRef.current) return;

    try {
      // Create a canvas from the resume content
      const canvas = await html2canvas(targetRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for images
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Calculate dimensions to fit A4
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Add the image to the PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

      // If content exceeds one page, add additional pages
      if (imgHeight > 297) { // A4 height in mm
        let currentHeight = 0;
        const pageHeight = 297;
        
        while (currentHeight < imgHeight) {
          currentHeight += pageHeight;
          if (currentHeight < imgHeight) {
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, -(currentHeight), imgWidth, imgHeight);
          }
        }
      }

      // Save the PDF
      pdf.save(`${data.personalInfo.name || 'resume'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const SelectedTemplate = selectedTemplate.component;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">THEWEBPAL</h1>
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            <div className="flex items-center gap-4">
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-2"
                value={selectedTemplate.id}
                onChange={(e) => {
                  const template = templates.find((t) => t.id === e.target.value);
                  if (template) setSelectedTemplate(template);
                }}
              >
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name} Template
                  </option>
                ))}
              </select>
              <button
                onClick={handleExport}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm data={data} onChange={setData} />
          </div>
          <div 
            className="bg-white shadow-lg rounded-lg" 
            ref={targetRef}
          >
            <SelectedTemplate data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;