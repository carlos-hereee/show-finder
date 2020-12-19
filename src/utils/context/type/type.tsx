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
  // eslint-disable-next-line no-unused-vars
  getShow: (movie: string) => void;
}
