import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { data } from "autoprefixer";

const separatorCSS = "hidden sm:inline border-l-[1px] h-[2rem] border-gray-400";

function Header() {
  const [details, setDetails] = useState({ adult: 0, children: 0, room: 1 });
  const [openOption, setOpenOption] = useState(null);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination" || "")
  );
  const encodedParams = createSearchParams({
    date: JSON.stringify(data),
    destination,
    option: JSON.stringify(details),
  });

  const navigate = useNavigate();
  function handleSearch() {
    console.log("first");
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  }

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="flex flex-col justify-center lg:flex-row items-center pt-4">
      <span
        className="mb-8 md:mr-3 lg:mb-0 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Home
      </span>
      <div className="w-full max-w-[64rem]  lg:w-[80%] xl:min-w-[59rem] xl:w-[60%] min-h-[5rem] rounded-[1.7rem] lg:border-[1px] border-gray-200 flex flex-col sm:flex-row gap-2 md:gap-5 items-center justify-between px-7">
        <span className="w-[100%] sm:w-[50%] flex justify-start gap-2 py-2">
          <IoLocationSharp className="text-red-600 text-3xl" />
          <input
            type="text"
            name="location"
            placeholder="where to go?"
            className="sm:w-[5.5rem] md:w-[80%] lg:w-auto outline-none text-gray-500 bg-inherit"
            onChange={(e) => setDestination(e.target.value)}
          />
        </span>
        <span className={separatorCSS}></span>
        <span
          onClick={() => setOpenDate((prev) => !prev)}
          className="relative w-[100%] sm:text-sm lg:text-[1rem] xl:w-full md:py-3 flex justify-start gap-2 py-2"
        >
          <HiCalendar className={`text-blue-700 text-[1.7rem]`} />
          <span
            onClick={() => setOpenDate((prev) => !prev)}
            className="cursor-pointer flex items-center"
          >
            {`${format(date.startDate, "MM/dd/yy")} to ${format(
              date.endDate,
              "MM/dd/yy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              ranges={[date]}
              onChange={(item) => setDate(item.selection)}
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
              className="absolute top-[4rem] text-sm"
            />
          )}
        </span>
        <span className={separatorCSS}></span>
        <span className=" w-[100%] flex items-center justify-start sm:justify-center gap-3 xl:gap-5 text-sm xl:text-[1rem]">
          <span className="relative">
            <span
              id="dropDown"
              className="cursor-pointer"
              onClick={() => setOpenOption((prev) => !prev)}
            >
              <span>{details.adult} </span>
              adult &bull;
              <span> {details.children} </span>
              children &bull;
              <span> {details.room} </span>
              room
            </span>
            {openOption && (
              <DropDown
                data={details}
                setData={setDetails}
                setOpenOption={setOpenOption}
              />
            )}
          </span>
          <span
            onClick={handleSearch}
            className={`bg-blue-700  p-2  rounded-[.7rem] md:px-3 md:py-[.71rem] md:rounded-2xl cursor-pointer hover:scale-110 transition-all`}
          >
            <IoSearch className="text-white md:text-2xl" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
