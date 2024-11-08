import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useRef, useState} from "react";

let PROJECT_DATA = [
  {
    title : null,
    description : null,
    dueDate : null
  }
]

function App() {
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const projectData = useRef(PROJECT_DATA);
  // const [projectData, setProjectData] = useState([]);

  const projectTitles = projectData ? [...projectData.map(({title}) => title)] : [];

  console.log(projectTitles);

  function handleCreating() {
    if (event.target.classList.contains('creating')) {
      console.log("2 : " + isCreatingProject);
      setIsCreatingProject(true);
    } else {
      if (event.target.classList.contains('saveBtn'))
        saveProjectData();

      setIsCreatingProject(false);
    }
  }

  function saveProjectData() {
    projectData.current;
    console.log(event.target['title']);
/*    setProjectData((prevProjectData) => {
      return [
        {
          title: title,
          description: description,
          dueDate: dueDate
        },
        ...prevProjectData
      ];
    });*/
  }

  return (
    <>
      <div className="flex">
        <SideBar
          onClick={handleCreating}
          // projectList={}
        />
        {isCreatingProject ? (
          <CreateProject ref={projectTitles} onClick={handleCreating} onSave={saveProjectData} />
        ) : (
          <EmptyProject onClick={handleCreating} />
        )}

        {/*<ProjectManage />*/}
      </div>

    </>
  );
}

export default App;




