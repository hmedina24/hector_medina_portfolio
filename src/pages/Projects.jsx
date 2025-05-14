import React from 'react';

const projects = [
  {
    title: 'E-Commerce Store',
    description: 'A full-stack application with React and Node.js',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Site',
    description: 'Personal website built with Tailwind and React Router',
    tech: ['React', 'TailwindCSS'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-700">
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-sm my-2">{proj.description}</p>
            <div className="flex gap-2 text-sm text-blue-500">
              {proj.tech.map((tech, i) => <span key={i}>#{tech}</span>)}
            </div>
            <div className="mt-4">
              <a href={proj.github} target="_blank" className="mr-4">GitHub</a>
              <a href={proj.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}