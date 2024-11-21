import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

let PROJECT_ID = 0;

function App() {
  // viewMode 에서
  const [viewMode, setViewMode] = useState("Empty");
  // projectData 에서 projectId, title, description, dueDate, tasks 관리
  const [projectData, setProjectData] = useState([]);
  // selectedProjectId 에서 사용자가 선택한 프로젝트의 projectId 값 관리
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function handleViewMode(view) {
    setViewMode(view);
  }

  function saveProjectData(title, description, dueDate) {
    console.log("projectId : "+PROJECT_ID);
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
          projectData={projectData}//.map(({projectId, title}) => ([{projectId, title}]))}
          // selectedTitle={selectedProjectIndex > -1 && selectedProject.title}
        />
        {viewMode === "Create" ? (
          <CreateProject
            onChangeView={handleViewMode}
            onSave={saveProjectData}
          />
        ) : viewMode === "Manage" ? (
          <ProjectManage
            // selectedProjectData={selectedProject}
            // onTasksSave={saveProjectTasks}
          />
        ) : (
          <EmptyProject onChangeView={handleViewMode}/>
        )}
      </div>
    </>
  );
}


export default App;




