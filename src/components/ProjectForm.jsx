/* eslint-disable react/prop-types */

import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      return alert('Fill out both fields!');
    }

    onAddProject({ title, description: desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h2>Add New Project</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="form-input"
      />
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Short Description"
        className="form-textarea"
      />
      <button type="submit" className="primary-button">
        Create Project
      </button>
    </form>
  );
}
export default ProjectForm;