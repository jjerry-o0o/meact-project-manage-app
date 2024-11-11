export default function CreateProject({ onClick, onSave }) {


  function handleSubmit(event) {
    const projectInputData = {
      title : event.target.title.value,
      description : event.target.description.value,
      dueDate : event.target.dueDate.value,
    }

    onSave(projectInputData);
  }

  return (
    <section className="float-left grow pt-32 pl-12 pr-52">
      <form onSubmit={handleSubmit}>
        <div className="text-end space-x-2">
          <button
            className="border border-neutral-300 rounded-md w-20 py-1.5"
            type="button" onClick={onClick}
          >
            Cancel
          </button>
          <button
            className="saveBtn text-white bg-black rounded-md w-20 py-1.5"
            // type="button" onClick={() => onSave(event)}
          >
            Save
          </button>
        </div>

        <div>
          <h2 className="text-neutral-500 font-semibold mb-1">TITLE</h2>
          <input type="text" name="title" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-8 mb-4"/>
          <h2 className="text-neutral-500 font-semibold mb-1">DESCRIPTION</h2>
          <textarea name="description" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-20 mb-4"></textarea>
          <h2 className="text-neutral-500 font-semibold mb-1">DUE DATE</h2>
          <input type="date" name="dueDate" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-8"/>
        </div>
      </form>
    </section>
  );
}