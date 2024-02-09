import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import LocationList from "./components/locationList/LocationList";
import AppLayout from "./components/appLayout/AppLayout";
import Hotels from "./components/hotels/Hotels";
import SingleHotel from "./components/singleHotel/SingleHotel";
import HotelsProvider from "./components/context/HotelsProvider";
import BookmarkLayout from "./components/bookmarkLayout/BookmarkLayout";
import AddBookmark from "./components/addBookmark/AddBookmark";
import BookmarkList from "./components/bookmarkList/BookmarkList";

function App() {
  return (
    <div className="font-josefin min-h-screen bg-gray-50">
      <HotelsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="bookmarks" element={<BookmarkLayout />}>
            <Route index path="" element={<BookmarkList />} />
            <Route path="add" element={<AddBookmark />} />
          </Route>
        </Routes>
      </HotelsProvider>
    </div>
  );
}

export default App;
