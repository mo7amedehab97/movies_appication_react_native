import React, { useState, createContext } from "react";
const Context = createContext();
function ContextProvider({ children }) {
  const [status, setStatus] = useState("Home");
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [genreID, setGenreID] = useState(28);
  const [genreMovie, setGenreMovie] = useState([]);
  const [genreName, setGenreName] = useState("Action");
  const [searchResult, setSearchResult] = useState([]);
  const [searchWord, setSearchWord] = useState([]);
  const [singleMovie, setSingleMovie] = useState([]);
  const [savedMovie, setSavedMovie] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  return (
    <Context.Provider
      value={{
        status,
        setStatus,
        category,
        setCategory,
        data,
        setData,
        genreID,
        setGenreID,
        genreMovie,
        setGenreMovie,
        genreName,
        setGenreName,
        searchResult,
        setSearchResult,
        searchWord,
        setSearchWord,
        singleMovie,
        setSingleMovie,
        savedMovie,
        setSavedMovie,
        savedIds,
        setSavedIds,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
