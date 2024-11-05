export default function ProjectManage() {
  return (
    <section className="float-left grow pt-24 pl-12 pr-52">
      <div className="flex justify-between mb-3">
        <h1 className="text-3xl font-black text-neutral-700">Project Name</h1>
        <button className="inline-block align-baseline font-semibold text-neutral-500">Delete</button>
      </div>
      <h2 className="font-semibold text-neutral-400 ">Jun 16, 2024</h2>
      <p className="mt-4 mb-6 text-lg font-semibold text-neutral-500 leading-7">Project Description<br/>Project Description<br/>Project Description</p>

      <hr className="mb-6 border-b-2 border-neutral-300" />

      <h1 className="font-bold text-3xl text-neutral-700 mb-2">Tasks</h1>
      <input type="text" className="inline-block bg-neutral-200 rounded-md w-72 h-8"/>
      <p className="inline-block font-bold text-neutral-500 ml-4 mb-8">Add Task</p>
      <div className="flex justify-between grow h-20 bg-neutral-100">
        <p className="flex items-center ml-4 font-bold text-neutral-700">Task_1 blah blah ~</p>
        <button className="inline-block mr-4 font-bold text-neutral-500">Clear</button>
      </div>
    </section>
  );
}