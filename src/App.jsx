import {useState} from "react"

import NewProject from "./components/NewProject";
import NoProjSel from "./components/NoProjSel";
import Sidebar from "./components/Sidebar";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleStartAddProject(){
        setProjectsState(prev =>{
            return {
                ...prev,
                selectedProjectId:null,
            }
        })
    }

    function handleAddProject(projectData){
        setProjectsState(prev => {
            const projectId = Math.random()
            const newProject = {
                ...projectData,
                id: projectId
            }
            return{
                ...prev,
                selectedProjectId:undefined,
                projects: [...prev.projects, newProject]
            }
        })
    }

    function handleCancelAddProject(){
        setProjectsState(prev =>{
            return {
                ...prev,
                selectedProjectId:undefined,
            }
        })
    }

    let content
    if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    }
    else if(projectsState.selectedProjectId === undefined){
        content = <NoProjSel onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
