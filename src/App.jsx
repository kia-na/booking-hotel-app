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
import Bookmarks from "./components/addBookmark/singleBookmark/SingleBookmark";
import BookmarksProvider from "./components/context/BookmarkContext";
import SingleBookmark from "./components/addBookmark/singleBookmark/SingleBookmark";

function App() {
  return (
    <div className="font-josefin min-h-screen bg-gray-50">
      <BookmarksProvider>
        <HotelsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/hotels" element={<AppLayout />}>
              <Route index element={<Hotels />} />
              <Route path=":id" element={<SingleHotel />} />
            </Route>
            <Route path="bookmarks" element={<BookmarkLayout />}>
              <Route index element={<BookmarkList />} />
              <Route path=":id" element={<SingleBookmark />} />
              <Route path="add" element={<AddBookmark />} />
            </Route>
          </Routes>
        </HotelsProvider>
      </BookmarksProvider>
    </div>
  );
}

export default App;
