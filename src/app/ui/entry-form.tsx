export default function Form() {
  return (
    <form className="w-full">
      <div className="flex flex-col m-5 w-full items-center">
        <label>Flags</label>
        <textarea rows={6} className="min-w-96 w-3/4 text-slate-950"></textarea>
      </div>
      <div className="flex flex-col m-5 w-full items-center">
        <label>Background Color</label>
        <input></input>
      </div>
      <div className="flex justify-center m-5 w-full">
        <button className="bg-slate-700 p-3 rounded hover:bg-slate-600">Go!</button>
      </div>
    </form>
  )
}

