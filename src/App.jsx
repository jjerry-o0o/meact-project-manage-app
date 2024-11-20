import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

function App() {
  // viewMode 에서
  const [viewMode, setViewMode] = useState("Empty");
  // projectData 에서 projectId, title, description, dueDate, tasks 관리
  const [projectData, setProjectData] = useState([]);
  // selectedProjectId 에서 사용자가 선택한 프로젝트의 projectId 값 관리
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  /* [ Component 별 사용자 이벤트 정리 ]
  * Empty           | Add Project 버튼 클릭 -> setViewMode(Create)
  * CreateProject   | Save 버튼 클릭                 -> setViewMode(Empty) , setProjectData(projectId, title, description, dueDate)
  *                 | Cancel 버튼 클릭               -> setViewMode(Empty)
  * SideBar         | Add Project 클릭 -> setViewMode(Create)
  *                 | title 클릭                    -> setViewMode(Manage), setSelectedProjectId
  * ProjectManage   | Delete 클릭                   -> setViewMode(Empty), setProjectData(delete), setSelectedProjectId
  *                 | Update 클릭                   -> setProjectData(description, tasks)
  *                 | add task 클릭                 -> setNewTasks
  *                 | Clear 클릭                    -> setNewTasks
  *
  * [ Component 별 상태, 변수, 함수 정리 ]
  * - App.jsx
  * const     selectedProject   : 선택된 projectData 하나 >> ProjectManage 에 바인딩 할 용도.
  * useState  viewMode          : 사용자에게 보여줄 화면 상태 관리, Empty / Create / Manage
  * useState  projectData       : projectId, title, description, dueDate, tasks 관리
  * useState  selectedProjectId : 사용자가 선택한 프로젝트의 projectId 값 관리
  * handleViewMode()    : setViewMode 만 하는 경우
  * saveProjectData()   : CreateProject 에서 Save 클릭시 setProjectData
  * updateProjectData() : ProjectManage 에서 Update 클릭시 description, tasks >> update
  * deleteProjectData() : ProjectManage 에서 Delete 클릭시 해당 projectData 삭제
  *
  * - SideBar.jsx
  * onChangeView()      : Add Project 클릭시 App 의 handleViewMode 호출
  * onSelectedProject() : title 클릭시 App 의 handleViewMode 호출. selectedProject 변수는 다시 렌더링 되면서 자동 init 됨
  *
  * - EmptyProject.jsx
  * onChangeView()      : Create 클릭시 App 의 handleViewMode 호출
  *
  * - CreateProject.jsx
  * onChangeView()      : Cancel 클릭시 App 의 handleViewMode 호출
  * onSave()            : Save 클릭시 App 의 handleViewMode, saveProjectData 호출
  *
  * - ProjectManage.jsx
  * useState newTasks   : task 상태 관리
  * onChangeView()      : Delete 클릭시 App 의 handleViewMode 호출
  * onUpdateProject()   : Update 또는 Delete 클릭시 App 의 updateProjectData 호출.
  *
  *  */


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




