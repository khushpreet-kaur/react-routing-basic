import './ManageProjects.css'
import { Link } from 'react-router-dom';
export default function ManageProjects() {
    const projects = JSON.parse(localStorage.getItem('projects'))
    
    return (
      <div>
        {projects.map(project => (
          <div className="projectsList">{project.projectName}
            <Link className="App-link" to={`/projects/edit/${project.projectName}`}> Edit </Link>
          </div>
        ))}
      </div>
    );
  }