import {useRef, useState} from "react";

export default function ProjectManage({selectedProjectData, onTasksSave}) {
  const {title, description, dueDate, tasks} = selectedProjectData;
  const newTask = useRef();
  const [newTasks, setNewTasks] = useState([]);

  // App 이랑 주고받는 Tasks 의 값이 객체 배열 형태로 오가는지 console log 확인
  // 아래 html 에서 Tasks.map 할 때 문제 없는지 확인
  function saveNewTasks() {
    onTasksSave(
      setNewTasks((prevNewTasks) => {
        return [{
          id: 0,
          task: newTask
        },
          ...prevNewTasks
        ];
      })
    );
  }

  return (
    <section className="float-left grow pt-24 pl-12 pr-52">
      <div className="flex justify-between mb-3">
        <h1 className="text-3xl font-black text-neutral-700">{title}</h1>
        <button className="inline-block align-baseline font-semibold text-neutral-500">Delete</button>
      </div>
      <h2 className="font-semibold text-neutral-400 ">{dueDate}</h2>
      <p className="mt-4 mb-6 text-lg font-semibold text-neutral-500 leading-7">
        {description}
      </p>

      <hr className="mb-6 border-b-2 border-neutral-300" />

      <h1 className="font-bold text-3xl text-neutral-700 mb-2">Tasks</h1>
      <input ref={newTask} type="text" className="inline-block bg-neutral-200 rounded-md w-72 h-8"/>
      <button onClick={saveNewTasks} className="inline-block font-bold text-neutral-500 ml-4 mb-8">Add Task</button>
      {tasks.map((task, key) =>
        <div key={key} className="flex justify-between grow h-20 bg-neutral-100">
          <p className="flex items-center ml-4 font-bold text-neutral-700">{task}</p>
          <button className="inline-block mr-4 font-bold text-neutral-500">Clear</button>
        </div>
      )}
    </section>
  );
}
