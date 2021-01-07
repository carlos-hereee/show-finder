/* eslint-disable  */
export interface ShowFinder {
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

export interface TvMaze {
  isLoading: boolean;
  error: string;
  showFinder: ShowFinder[];
  activeShow: "";
  allShowFinder: ShowFinder[];
  getShow: (movie: string) => void;
  getAllShow: (page: number) => void;
}

export interface ToogleShow {
  [key: string]: JSX.Element;
}
