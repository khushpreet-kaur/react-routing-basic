import { useState } from "react"

export default function AddProject() {
    let [projectName, setProjectName] = useState("")

    let projects = []
    function addProject() {
        let project = {
            projectName: projectName
        }
        console.log(project)
        let existingProjects = localStorage.getItem('projects')
        if(existingProjects) {
            projects = JSON.parse(existingProjects)
            projects.push(project)
        }
        else {
            projects.push(project)
        }
        localStorage.setItem('projects', JSON.stringify(projects))
    }
    return (
      <div>
        <input type="text" placeholder="enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)}></input>
        <button onClick={addProject}>Add</button>
      </div>
    )
  }
  