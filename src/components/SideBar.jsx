export default function SideBar({ onClick, titleList, selectedTitle }) {
  return (
    <>
      <aside className="float-left bg-black rounded-tr-lg w-2/12 h-screen pt-14 pl-8 mt-8">
        <div>
          <h2 className="text-white text-lg font-semibold pb-8">YOUR PROJECTS</h2>
          <button
            className="creating bg-neutral-700 text-neutral-400 py-2 px-3 rounded-md"
            onClick={() => onClick("Create", -1)}
          >
            + Add Project
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-8 w-5/6">
          {titleList.map(({projectId, title}) =>
            <button key={projectId}
               className={title === selectedTitle ? "manage text-neutral-400 pl-3 bg-neutral-900" : "manage text-neutral-400 pl-3"}
               onClick={() => onClick("Manage", projectId)}
            >
              {title}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
