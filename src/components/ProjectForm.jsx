import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return alert("Fill out both fields!");
    
    onAddProject({ title, description: desc });
    setTitle(""); // Clear fields after adding
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Add New Project</h2>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title" 
        className="p-2 border rounded"
      />
      <textarea 
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Short Description" 
        className="p-2 border rounded"
      />
      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Create Project
      </button>
    </form>
  );
}
export default ProjectForm;