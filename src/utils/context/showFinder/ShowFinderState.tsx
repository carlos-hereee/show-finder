import React, { createContext, useReducer } from "react";
import { TvMaze } from "../../type/type";
import { client } from "../../axios";
import { reducer } from "./reducer";

const initialState: TvMaze = {
  isLoading: false,
  error: "",
  showFinder: [],
  getShow: () => null,
};
const ShowFinderContext = createContext<TvMaze>(initialState);

const ShowFinderState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getShow = async (movie: string) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const response = await client.get(`search/shows?q=${movie}`);
      console.log("response", response.data);
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
