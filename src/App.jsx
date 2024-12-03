import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

let PROJECT_ID = 0;

function App() {
  const [viewMode, setViewMode] = useState("Empty");
  const [projectData, setProjectData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
console.log({projectData});
  function handleViewMode(view) {
    setViewMode(view);
  }

  function saveProjectData(title, description, dueDate) {
    setProjectData((prevProjectData) => {
      return [{
        projectId: PROJECT_ID === 0 ? PROJECT_ID : ++PROJECT_ID,
        title,
        description,
        dueDate,
        tasks: []
      },
        ...prevProjectData
      ];
    });

    setViewMode("Empty");
  }

  function updateProjectData(description, tasks) {
    console.log({description, tasks})

    setProjectData((prevProjectData) => {
      prevProjectData.map((project) => {
        if (project.projectId === selectedProjectId)
          return [{
            description: description,
            tasks: tasks,
            ...project
          }]
      });
    });

    setViewMode("Empty");
  }



  // function saveProjectData({title, description, dueDate}) {
  //   setProjectData((prevProjectData) => {
  //     return [{
  //       projectId: PROJECT_NO,
  //       title: title,
  //       description: description,
  //       dueDate: dueDate,
  //       tasks: []
  //     }, ...prevProjectData
  //     ]
  //   });
  //
  //   setSectionType("Empty");
  //   PROJECT_NO++;
  // }

  // function saveProjectTasks(newTasks){
  //   setProjectData((prevProjectData) => {
  //     return prevProjectData.map((data) => {
  //       if (data.projectId === selectedProject.projectId)
  //         return {
  //           ...data,
  //           tasks: newTasks
  //         };
  //     });
  //   });
  // }

  return (
    <>
      <div className="flex">
        <SideBar
          onChangeView={handleViewMode}
          projectData={projectData}
          selectedId={selectedProjectId}
          onSelectedProject={setSelectedProjectId}
        />
        {viewMode === "Create" ? (
          <CreateProject
            onChangeView={handleViewMode}
            onSave={saveProjectData}
          />
        ) : viewMode === "Manage" ? (
          <ProjectManage
            selectedProjectData={projectData.find((data) => data.projectId === selectedProjectId)}
            onUpdateProject={updateProjectData}
          />
        ) : (
          <EmptyProject onChangeView={handleViewMode}/>
        )}
      </div>
    </>
  );
}


export default App;




