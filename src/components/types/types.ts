import IArticle from '../interfaces/IArticle';
import ISource from '../interfaces/ISource';

export type SourceRes = {
    sources: ISource[];
    status: 'ok' | 'error';
};

export type NewsRes = {
    articles: IArticle[];
    status: 'ok' | 'error';
    totalResults: number;
};

export type Options<T> = {
    [key: string]: T;
};
