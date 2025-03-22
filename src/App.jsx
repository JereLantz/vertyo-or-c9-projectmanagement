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
            const newProject = {
                ...projectData,
                id: Math.random()
            }
            return{
                ...prev,
                projects: [...prev.projects, newProject]
            }
        })
    }

    console.log(projectsState)

    let content
    if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} />
    }
    else if(projectsState.selectedProjectId === undefined){
        content = <NoProjSel onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
