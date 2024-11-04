import SideBar from './components/SideBar.jsx';
import CreateProject from "./components/CreateProject.jsx";
import defaultImg from './assets/no-projects.png';
import EmptyProject from "./components/EmptyProject.jsx";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        {/*<EmptyProject />*/}
        <CreateProject />
      </div>

    </>
  );
}

export default App;




