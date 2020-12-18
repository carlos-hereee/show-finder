export interface TvMaze {
  isLoading: boolean;
  error: string;
  showFinder: {
    score: number;
    show: {
      id: number;
      image: { medium: string; original: string };
      language: string;
      name: string;
      summary: string;
      url: string;
    }[];
  }[];
  getShow: (movie: string) => void;
}
