import {useState} from "react"

import NewProject from "./components/NewProject";
import NoProjSel from "./components/NoProjSel";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    function handleAddTask(text){
        setProjectsState(prev => {
            const taskId = Math.random()
            const newTask = {
                text:text,
                projectId: prev.selectedProjectId,
                id: taskId
            }
            return{
                ...prev,
                tasks: [...prev.tasks, newTask]
            }
        })
    }

    function handleDeleteTask(id){
        setProjectsState(prev =>{
            return {
                ...prev,
                tasks: prev.tasks.filter(task=> task.id !== id)
            }
        })
    }

    function handleDeleteProject(){
        setProjectsState(prev =>{
            return {
                ...prev,
                selectedProjectId:undefined,
                projects: prev.projects.filter(proj=> proj.id !== prev.selectedProjectId)
            }
        })
    }

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
    let content = <SelectedProject tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={handleDeleteProject}/>

    if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    }
    else if(projectsState.selectedProjectId === undefined){
        content = <NoProjSel onStartAddProject={handleStartAddProject}/>
    }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
