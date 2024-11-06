import defaultImg from "../assets/no-projects.png";

export default function EmptyProject({ onClick }) {
  return (
    <section className="float-left w-3/4 pt-60">
      <img src={defaultImg} alt="no-projects" className="w-16 h-16 mx-auto object-cover"/>
      <div className="text-center">
        <h2 className="text-2xl text-neutral-700 font-extrabold my-4">No Project Selected</h2>
        <p className="text-neutral-400 font-semibold">Select a project or get started with a new one</p>
        <button
          className="creating bg-neutral-800 font-semibold text-neutral-500 rounded-md px-3 py-1.5 mt-8"
          onClick={onClick}>Create new project</button>
      </div>
    </section>
  );
}