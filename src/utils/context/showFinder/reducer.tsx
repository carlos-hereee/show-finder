import { TvMaze, AllShowFinder } from "../../type/type";

type ActionType =
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "GET_SHOW_SUCCESS"; payload: AllShowFinder[] }
  | { type: "GET_SHOW_ALL_SUCCESS"; payload: AllShowFinder[] };

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state: TvMaze, action: ActionType): TvMaze => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "GET_SHOW_SUCCESS":
      return { ...state, isLoading: false, showFinder: action.payload };
    case "GET_SHOW_ALL_SUCCESS":
      return { ...state, isLoading: false, allShowFinder: action.payload };
    default:
      return state;
  }
};
