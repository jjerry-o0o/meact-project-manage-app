import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";
import {useState} from "react";

function App() {
  const [sectionType, setSectionType] = useState({});
  const [projectData, setProjectData] = useState([]);

  const projectTitles = projectData ? [...projectData.map(({title}) => title)] : [];
  const selectedProject = sectionType.index > -1 ? (
    {
      title: projectData[sectionType.index].title,
      description: projectData[sectionType.index].description,
      dueDate: projectData[sectionType.index].dueDate
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
        dueDate: dueDate
      }, ...prevProjectData
      ];
    });

    setSectionType("Empty");
  }

  return (
    <>
      <div className="flex">
        <SideBar
          onClick={handleSectionType}
          titleList={projectTitles}
          selectedTitle={sectionType.index > -1 && selectedProject.title}
        />
        {sectionType.sectionType === "Create" ? (
          <CreateProject
            onClick={handleSectionType} onSave={saveProjectData}/>
        ) : sectionType.sectionType === "Manage" ? (
          <ProjectManage
            title={selectedProject.title}
            description={selectedProject.description}
            dueDate={selectedProject.dueDate}
          />
        ) : (
          <EmptyProject onClick={handleSectionType}/>
        )}
      </div>
    </>
  );
}


export default App;




