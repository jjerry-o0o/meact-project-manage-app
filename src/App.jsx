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
  const projectData = useRef([]);
  // const [projectData, setProjectData] = useState([]);

  const projectTitles = projectData ? [...projectData.current.map(({title}) => title)] : [];

  // console.log("2 : "+projectTitles.toString());

  function handleCreating() {
    if (event.target.classList.contains('creating')) {
      setIsCreatingProject(true);
    } else {
      if (event.target.classList.contains('saveBtn'))
        // saveProjectData();

      setIsCreatingProject(false);
    }
  }

  function saveProjectData({title, description, dueDate}) {
    // const {title, description, dueDate} = event;
    console.log(title, description, dueDate);
    // console.log(event.target.title + " : " + event.target.description + " : " + event.target.dueDate);
    projectData.current.push({
      title: title,
      description: description,
      dueDate: dueDate
    });
    console.log("1 : "+projectData.current[0].title);
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




