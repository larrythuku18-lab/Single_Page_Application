// ProjectList.jsx
// ProjectList.jsx
/* eslint-disable react/prop-types */

import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <div className="project-grid">
      {projects.length > 0 ? (
        projects.map((project) => <ProjectCard key={project.id} project={project} />)
      ) : (
        <p className="empty-state">No projects found.</p>
      )}
    </div>
  );
}
export default ProjectList;