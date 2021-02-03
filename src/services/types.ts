interface IMovieSeriePosterArt {
  url: string;
  width: number;
  height: number;
}
interface IMovieSerieImageObject {
  PosterArt: IMovieSeriePosterArt;
}
export interface IMovieSerieObject {
  title: string;
  description: string;
  programType: string;
  images: IMovieSerieImageObject;
  releaseYear: number;
}

interface IMovieSerieJson {
  total: number;
  entries: Array<IMovieSerieObject>;
}

export interface IResponseMovieSerie {
  err: Boolean;
  data: IMovieSerieJson;
}

export interface IMovieSerieAllData {
  values: Array<Object>;
  err: boolean;
}
