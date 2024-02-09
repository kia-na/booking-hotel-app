function AddBookmark() {
  return (
    <div>
      <h3 className="font-bold text-lg md:text-[1.5rem] mb-3">
        Bookmark New Location
      </h3>
      <div className="flex flex-col items-start justify-between gap-1 mb-3">
        <span className="font-extralight">City Name</span>
        <input
          type="text"
          defaultValue={"h"}
          className="bg-inherit w-full py-1 px-2 font-extralight text-slate-600 outline-none rounded-lg border-[1px] border-slate-600"
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-1">
        <span className="font-extralight">Country</span>
        <input
          type="text"
          defaultValue={"h"}
          className="bg-inherit w-full py-1 px-2 font-extralight text-slate-600 outline-none rounded-lg border-[1px] border-slate-600"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="bg-inherit py-1 px-3 cursor-pointer font-extralight text-[.9rem] border-[1px] border-slate-500 rounded-lg">
          &larr; Back
        </span>
        <span className="bg-blue-700 py-1 px-3 text-[.9rem] text-white font-extralight rounded-lg cursor-pointer">
          Add
        </span>
      </div>
    </div>
  );
}

export default AddBookmark;
