import { TvMaze } from "../../../data/tvmaze";
import { IS_LOADING, SET_ERROR, GET_SHOW_SUCCESS } from "../type";

interface ActionType {
  type: string;
  payload: any;
}

export const reducer = (state: TvMaze, action: ActionType): TvMaze => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case GET_SHOW_SUCCESS:
      return { ...state, isLoading: false, showFinder: action.payload };
    default:
      return state;
  }
};
