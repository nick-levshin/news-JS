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

export type ISource = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    country: string;
    language: string;
};

export type IArticle = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
};
