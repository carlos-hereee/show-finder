import { TvMaze } from "../../../data/tvmaze";
import { IS_LOADING, SET_ERROR, GET_SHOW_SUCCESS } from "../type";

interface ShowFinder {
  score: number;
  show: {
    id: number;
    image: {
      medium: string;
      original: string;
    };
    language: string;
    name: string;
    summary: string;
    url: string;
  };
}

type ActionType =
  | { type: typeof IS_LOADING; payload: boolean }
  | { type: typeof SET_ERROR; payload: string }
  | { type: typeof GET_SHOW_SUCCESS; payload: ShowFinder[] };

// eslint-disable-next-line import/prefer-default-export
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
