import React from 'react';

export default function Home() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl font-bold">Hi, I'm Hector</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Software Engineer | JavaScript | AWS | React | Node.js
      </p>
      <a href="/projects" className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
        View Projects
      </a>
    </section>
  );
}