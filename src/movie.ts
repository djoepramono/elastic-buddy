import { AnyObject } from './core-lib';

export type Movie = {
  title: string,
  year: number,
  tag: string
}

type IsMovieTypeGuard = (anyObject: AnyObject) => anyObject is Movie;

export const isMovie: IsMovieTypeGuard = (anyObject): anyObject is Movie => {
    return (anyObject as Movie).title !== undefined && (anyObject as Movie).year !== undefined && (anyObject as Movie).tag !== undefined;
};
