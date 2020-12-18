import axios from "axios";
import React, { createContext, useReducer } from "react";
// import { axiosWithAuth, client } from "../../axios";
import { TvMaze } from "../../../data/tvmaze";
import { IS_LOADING, SET_ERROR, GET_SHOW_SUCCESS } from "../type";
import { reducer } from "./reducer";

const initialState = {
  isLoading: false,
  error: "",
  showFinder: [{ score: 0, show: [] }],
  getShow: () => null,
};
const ShowFinderContext = createContext<TvMaze>(initialState);

const ShowFinderState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShow = (movie: string) => {
    dispatch({ type: IS_LOADING, payload: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${movie}`)
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        dispatch({ type: GET_SHOW_SUCCESS, payload: res });
      })
      .catch((error) =>
        dispatch({ type: SET_ERROR, payload: "Could not find the movie" })
      );
  };
  return (
    <ShowFinderContext.Provider
      value={{
        error: state.error,
        isLoading: state.isLoading,
        showFinder: state.showFinder,
        getShow,
      }}
    >
      {children}
    </ShowFinderContext.Provider>
  );
};

export { ShowFinderContext, ShowFinderState };
