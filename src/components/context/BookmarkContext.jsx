/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/bookmarks";
const bookmarkContext = createContext();

export default function BookmarksProvider({ children }) {
  const [bookmarksData, setBookmarksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllBookmarks() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(BASE_URL);
        // console.log(data);
        setBookmarksData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert(error.message);
      }
    }
    getAllBookmarks();
  }, []);

  async function addNewBookmark(newBookmark) {
    try {
      const { data } = await axios.post(BASE_URL, newBookmark);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteBookmark(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (err) {
      alert(err.message);
    }
  }

  const [currBookmark, setCurrBookmark] = useState({});

  async function getCurrBookmark(id) {
    setIsLoading(true);
    try {
      const { data } = await axios(`${BASE_URL}/${id}`);
      setCurrBookmark(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  }

  return (
    <bookmarkContext.Provider
      value={{
        addNewBookmark,
        isLoading,
        bookmarksData,
        setBookmarksData,
        deleteBookmark,
        getCurrBookmark,
        currBookmark,
      }}
    >
      {children}
    </bookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(bookmarkContext);
}
