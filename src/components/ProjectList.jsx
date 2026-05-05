-// ProjectList.jsx
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.length > 0 ? (
        projects.map(project => <ProjectCard key={project.id} project={project} />)
      ) : (
        <p className="text-gray-500">No projects found.</p>
      )}
    </div>
  );
}

// ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold uppercase">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
    </div>
  );
}
export default ProjectCard;