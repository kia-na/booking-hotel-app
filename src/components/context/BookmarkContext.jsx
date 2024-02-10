/* eslint-disable react/prop-types */
import axios from "axios";

import { createContext, useContext, useState } from "react";

const BASE_URL = "http://localhost:3000/bookmarks/";
const bookmarkContext = createContext();

export default function BookmarksProvider({ children }) {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getAllBookmarks() {
    setIsLoading(true);
    try {
      const { data } = axios.get(BASE_URL);
      setBookmarksData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  }

  function addNewBookmark(newBookmark) {
    try {
      const { data } = axios.post(BASE_URL, newBookmark);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <bookmarkContext.Provider
      value={{ addNewBookmark, getAllBookmarks, isLoading, bookmarksData }}
    >
      {children}
    </bookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(bookmarkContext);
}
