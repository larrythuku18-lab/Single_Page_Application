import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';

function App() {
  // 1. State: The 'memory' of our app
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "A sleek personal site." },
    { id: 2, title: "E-commerce App", description: "Built with React and Stripe." }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Logic: Adding a new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // 3. Logic: Filtering projects based on search
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Project Dashboard</h1>
        </header>

        {/* We pass the 'setSearchTerm' function so the child can update the parent's state */}
        <SearchBar onSearchChange={setSearchTerm} />
        
        <ProjectForm onAddProject={addProject} />
        
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;