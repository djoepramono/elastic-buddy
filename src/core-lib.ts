export type AnyObject = Record<string, unknown>;
export type ErrorOr<T> = Error | T;

export type IsErrorTypeGuard<T> = (errorOrT: ErrorOr<T>) => errorOrT is Error;
export const isError: IsErrorTypeGuard<AnyObject> = (errorOrT): errorOrT is Error => {
    return (errorOrT as Error).message !== undefined && errorOrT.name !== undefined;
};
