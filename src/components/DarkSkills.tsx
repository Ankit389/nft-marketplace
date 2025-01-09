import React from 'react';

export const DarkSkills = () => {
  const skills = [
    { name: "React.js Development", percentage: 90 },
    { name: "TypeScript Proficiency", percentage: 85 },
    { name: "Web3.js Integration", percentage: 80 },
    { name: "Tailwind CSS Styling", percentage: 75 },
    { name: "Supabase Database Interaction", percentage: 70 }
  ];

  return (
    <div className="bg-[#181A20] p-6 rounded-lg shadow-xl">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-[#F0B90B]">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-[#F0B90B] h-2 rounded-full transition-all duration-500"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};