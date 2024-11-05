export default function CreateProject() {
  return (
    <section className="float-left grow pt-32 pl-12 pr-52">
      <div className="text-end space-x-2">
        <button className="border border-neutral-300 rounded-md w-20 py-1.5">Cancel</button>
        <button className="text-white bg-black rounded-md w-20 py-1.5">Save</button>
      </div>
      {/* form tag 사용해야 할 것 같음 */}
      <div>
        <h2 className="text-neutral-500 font-semibold mb-1">TITLE</h2>
        <input type="text" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-8 mb-4"/>
        <h2 className="text-neutral-500 font-semibold mb-1">DESCRIPTION</h2>
        <textarea name="description" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-20 mb-4"></textarea>
        <h2 className="text-neutral-500 font-semibold mb-1">DUE DATE</h2>
        <input type="date" className="bg-neutral-200 border-b-2 border-neutral-300 w-full h-8"/>
      </div>
    </section>
  );
}