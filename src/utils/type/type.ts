/* eslint-disable  */
export interface SingleShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: { average: number | null };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string | null;
      code: string | null;
      timezone: string | null;
    } | null;
  } | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  } | null;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: { self: { href: string }; previousepisode?: { href: string } };
}

export interface TvMaze {
  isLoading: boolean;
  error: string;
  showFinder: SingleShow[];
  page: number;
  activeShow: string;
  activePage: string;
  allShowFinder: SingleShow[];
  getShow: (movie: string) => void;
  getAllShow: (page: number) => void;
}

export interface ToogleShow {
  [key: string]: JSX.Element;
}
