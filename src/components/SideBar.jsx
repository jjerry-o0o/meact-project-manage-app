export default function SideBar({ onChangeView, projectData, selectedId, onSelectedProject }) {
  function selectedTitle(projectId) {
    onSelectedProject(projectId);
    onChangeView("Manage");
  }
  return (
    <>
      <aside className="float-left bg-black rounded-tr-lg w-2/12 h-screen pt-14 pl-8 mt-8">
        <div>
          <h2 className="text-white text-lg font-semibold pb-8">YOUR PROJECTS</h2>
          <button
            className="bg-neutral-700 text-neutral-400 py-2 px-3 rounded-md"
            onClick={() => onChangeView("Create")}
          >
            + Add Project
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8 w-5/6">
          {projectData.map(({projectId, title}) =>
            <button key={projectId}
               className={projectId === selectedId ? "text-neutral-400 pl-3 bg-neutral-900" : "text-neutral-400 pl-3"}
               onClick={() => selectedTitle(projectId)}
            >
              {title}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
