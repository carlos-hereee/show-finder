import React, { createContext, useReducer } from "react";
import axios from "axios";
import { TvMaze } from "../../../data/tvmaze";
import { reducer } from "./reducer";

const initialState: TvMaze = {
  isLoading: false,
  error: "",
  showFinder: [
    {
      score: 0,
      show: {
        id: 0,
        image: { medium: "", original: "" },
        language: "",
        name: "",
        summary: "",
        url: "",
      },
    },
  ],
  getShow: () => null,
};
const ShowFinderContext = createContext<TvMaze>(initialState);

const ShowFinderState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShow = async (movie: string) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const response = await axios.get(`/search/shows?q=${movie}`);
      dispatch({ type: "GET_SHOW_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Could not find the movie" });
    }
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
