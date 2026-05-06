import React, { useState } from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Portfolio Website', description: 'A sleek personal site built with modern UI patterns.' },
    { id: 2, title: 'E-commerce App', description: 'Integrated payment flows using React and Stripe.' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-shell">
      <div className="app-container">
        <header className="app-header">
          <span className="app-tag">Junior developer dashboard</span>
          <h1 className="app-title">Project Dashboard</h1>
          <p className="app-subtitle">
            Track your latest work, add new ideas, and search your project list with a clean, modern interface.
          </p>
        </header>

        <section className="hero-panel">
          <div>
            <p className="hero-label">Create and manage your ideas</p>
            <h2 className="hero-title">Simple, polished, and easy for a junior developer project.</h2>
          </div>
          <SearchBar onSearchChange={setSearchTerm} />
        </section>

        <ProjectForm onAddProject={addProject} />

        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;