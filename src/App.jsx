import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

let PROJECT_NO = 0;
const PROJECT_DATA = [
  {
    projectId: null,
    title: null,
    description: null,
    dueDate: null,
    tasks: []
  }
];

function App() {
  const [sectionType, setSectionType] = useState({});
  const [projectData, setProjectData] = useState(PROJECT_DATA);
console.log("1 : "+ projectData.map((data) => data.toString()));
  const projectTitles = projectData
    ? projectData.map(({projectId, title}) => ({projectId, title}))
    : [];

  const selectedProjectIndex = sectionType.index;
  const selectedProject = selectedProjectIndex > -1 ? (
    {
      projectId: projectData[selectedProjectIndex].projectId,
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




