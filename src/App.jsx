import {useState} from "react"

import NewProject from "./components/NewProject";
import NoProjSel from "./components/NoProjSel";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    })

    function handleSelectProject(id){
        setProjectsState(prev =>{
            return {
                ...prev,
                selectedProjectId:id,
            }
        })
    }

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

    const selectedProject = projectsState.projects.find(project =>project.id ===projectsState.selectedProjectId)
    let content = <SelectedProject project={selectedProject}/>

    if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    }
    else if(projectsState.selectedProjectId === undefined){
        content = <NoProjSel onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
