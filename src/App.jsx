import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import EmptyProject from "./components/EmptyProject.jsx";
import ProjectManage from "./components/ProjectManage.jsx";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        {/*<EmptyProject />*/}
        {/*<CreateProject />*/}
        <ProjectManage />
      </div>

    </>
  );
}

export default App;




