export type TvMaze = {
  score: number;
  show: {
    id: number;
    image: { medium: string; original: string };
    language: string;
    name: string;
    summary: string;
    url: string;
  };
};
