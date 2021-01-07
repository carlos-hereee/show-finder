import React, { createContext, useReducer } from "react";
import { TvMaze } from "../../type/type";
import { client } from "../../axios";
import { reducer } from "./reducer";

const initialState: TvMaze = {
  isLoading: false,
  error: "",
  showFinder: [],
  allShowFinder: [],
  activeShow: "",
  getShow: () => null,
  getAllShow: () => null,
};
const ShowFinderContext = createContext<TvMaze>(initialState);
const ShowFinderState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShow = async (movie: string) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const response = await client.get(`search/shows?q=${movie}`);
      dispatch({ type: "GET_SHOW_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Could not find the movie" });
    }
  };
  const getAllShow = async (page: number) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const response = await client.get(`shows?page=${page}`);
      dispatch({ type: "GET_SHOW_ALL_SUCCESS", payload: response.data });
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
        allShowFinder: state.allShowFinder,
        activeShow: state.activeShow,
        getShow,
        getAllShow,
      }}
    >
      {children}
    </ShowFinderContext.Provider>
  );
};

export { ShowFinderContext, ShowFinderState };
