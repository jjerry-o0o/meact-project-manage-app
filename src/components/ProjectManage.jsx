import {useState} from "react";

let TASK_NO = 0;

export default function ProjectManage({selectedProjectData, onTasksSave}) {
  const {projectId, title, description, dueDate, tasks} = selectedProjectData;
  const [isEditing, setIsEditing] = useState(false);
  const [editDesc, setEditDesc] = useState(null);
  const [newTasks, setNewTasks] = useState([]);

  function handleSaveNewTasks() {
    setNewTasks((prevTasks) => {
      return []
    });
  }

    return (
    <section className="float-left grow pt-24 pl-12 pr-52">
      <div className="flex justify-between mb-4">
        <div className="flex items-end">
          <h1 className="w-fit text-3xl font-black text-neutral-700 mr-6">{title}</h1>
          <h2 className="w-fit font-semibold text-neutral-400">{dueDate}</h2>
        </div>

        <div className="flex">
          <button className="inline-block font-semibold text-neutral-500 border border-neutral-300 rounded-md w-20 h-fit py-1.5 mr-1"
                  onClick={onTasksSave}
          >
            Update
          </button>
          <button className="inline-block font-semibold text-red-900 border border-red-900 rounded-md w-20 h-fit py-1.5"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex items-end mt-4">
        {isEditing ? (
          <textarea
            className="w-[40rem] h-[72px] bg-neutral-200 border-neutral-300 pt-1"
          >
            {description}
          </textarea>
        ) : (
          <p className="w-[40rem] font-semibold text-neutral-500 leading-6">
            {description}
          </p>
        )}
        <button
          className="font-bold text-neutral-500 border-b-2 border-neutral-300 h-fit ml-3"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save Description" : "Edit Description"}
        </button>
      </div>

      <hr className="mt-4 mb-6 border-b-2 border-neutral-300" />

      <h1 className="font-bold text-3xl text-neutral-700 mb-2">Tasks</h1>
      <input type="text" className="inline-block bg-neutral-200 rounded-md w-72 h-8"/>
      <button className="inline-block font-bold text-neutral-500 ml-4 mb-8">Add Task</button>
      {newTasks.length > 0 ? newTasks.map((task, key) =>
        <div key={key} className="flex justify-between grow h-20 bg-neutral-100">
          <p className="flex items-center ml-4 font-bold text-neutral-700">{task}</p>
          <button className="inline-block mr-4 font-bold text-neutral-500">Clear</button>
        </div>
      ) : undefined}
    </section>
  );
}
