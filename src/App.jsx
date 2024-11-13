import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

function App() {
  const [sectionType, setSectionType] = useState({});
  const [projectData, setProjectData] = useState([]);

  const projectTitles = projectData ? [...projectData.map(({title}) => title)] : [];
  const selectedProjectIndex = sectionType.index;
  const selectedProject = selectedProjectIndex > -1 ? (
    {
      title: projectData[selectedProjectIndex].title,
      description: projectData[selectedProjectIndex].description,
      dueDate: projectData[selectedProjectIndex].dueDate,
      tasks: projectData[selectedProjectIndex].tasks
    }
  ) : undefined;


  function handleSectionType(sectionType, index) {
    setSectionType(() => {
      return {
        sectionType: sectionType, index: index
      }
    })
  }

  function saveProjectData({title, description, dueDate}) {
    setProjectData((prevProjectData) => {
      return [{
        title: title,
        description: description,
        dueDate: dueDate,
        tasks: []
      }, ...prevProjectData
      ];
    });

    setSectionType("Empty");
  }

  function saveProjectTasks(newTask){
    setProjectData((prevProjectData) => {
      prevProjectData.map((selectedProject, index) => {
        if(selectedProjectIndex === index)
          return {
            ...selectedProject,
            tasks: newTask
          }
      });
    });
  }

  return (
    <>
      <div className="flex">
        <SideBar
          onClick={handleSectionType}
          titleList={projectTitles}
          selectedTitle={selectedProjectIndex > -1 && selectedProject.title}
        />
        {sectionType.sectionType === "Create" ? (
          <CreateProject
            onClick={handleSectionType} onSave={saveProjectData}/>
        ) : sectionType.sectionType === "Manage" ? (
          <ProjectManage
            selectedProjectData={selectedProject}
            onTasksAdd={saveProjectTasks}
          />
        ) : (
          <EmptyProject onClick={handleSectionType}/>
        )}
      </div>
    </>
  );
}


export default App;




