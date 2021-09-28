import { useState } from "react"
import { useParams } from "react-router"

export default function Foo() {
    const {name} = useParams()
    const [projectName, setProjectName] = useState(name)

    return (
      <div>
        <input type="text" placeholder="enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)}></input>
        <button>Add</button>
      </div>
    )
  }
  