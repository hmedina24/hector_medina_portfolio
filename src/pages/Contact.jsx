import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-6 py-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} className="p-2 border rounded" placeholder="Your name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} className="p-2 border rounded" placeholder="Email" required />
        <textarea name="message" value={form.message} onChange={handleChange} className="p-2 border rounded" placeholder="Message" rows={5} required />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Send</button>
      </form>
    </section>
  );
}