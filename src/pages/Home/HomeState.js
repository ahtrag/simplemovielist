import React, { useReducer, useEffect } from "react";

const initialState = {
  movieData: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_DATA":
      return { ...state, movieData: action.movieData };
    default:
      throw new Error("Invalid Action");
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://my-json-server.typicode.com/ahtrag/moviedata/movie/")
      .then(res => res.json())
      .then(json => dispatch({ type: "FETCH_MOVIE_DATA", movieData: json }));
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
