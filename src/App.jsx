import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

function App() {
  const [projectData, setProjectData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [sectionType, setSectionType] = useState("Empty");

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
        projectId: PROJECT_NO,
        title: title,
        description: description,
        dueDate: dueDate,
        tasks: []
      }, ...prevProjectData
      ]
    });

    setSectionType("Empty");
    PROJECT_NO++;
  }

  function saveProjectTasks(newTasks){
    setProjectData((prevProjectData) => {
      return prevProjectData.map((data) => {
        if (data.projectId === selectedProject.projectId)
          return {
            ...data,
            tasks: newTasks
          };
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
            onTasksSave={saveProjectTasks}
          />
        ) : (
          <EmptyProject onClick={handleSectionType}/>
        )}
      </div>
    </>
  );
}


export default App;




