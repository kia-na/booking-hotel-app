import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "../context/BookmarkContext";
import Loader from "../loader/Loader";
import { HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

function BookmarkList() {
  const { isLoading, bookmarksData, deleteBookmark, setBookmarksData } =
    useBookmark();

  function handleDelete(e, id) {
    e.preventDefault();
    deleteBookmark(id);
    setBookmarksData((prev) => prev.filter((item) => item.id !== id));
  }

  if (isLoading) return <Loader />;
  return (
    <div className="pl-2 lg:pl-0 cursor-pointer">
      <h3 className="font-bold text-lg lg:text-2xl mb-3">BookmarkList</h3>
      <div className="h-[48rem] overflow-y-scroll ">
        <div className="flex flex-col gap-4">
          {bookmarksData.map((item) => (
            <Link
              to={`${item.id}`}
              key={item.id}
              className="relative min-h-[3.5rem] flex items-center justify-start gap-2 border-[1px] border-slate-500 rounded-[1rem] py-4 px-3"
            >
              <ReactCountryFlag svg countryCode={item.countryCode} />
              <span className="font-bold">{item.cityName}</span>
              <span className="font-extralight">{item.country}</span>
              <HiTrash
                className="text-red-600 text-lg absolute right-4 top-5 "
                onClick={(e) => handleDelete(e, item.id)}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookmarkList;
