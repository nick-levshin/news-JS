export type SourceRes = {
    sources: Source[];
    status: 'ok' | 'error';
};

export type NewsRes = {
    articles: Article[];
    status: 'ok' | 'error';
    totalResults: number;
};

export type Options<T> = {
    [key: string]: T;
};

export type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    country: string;
    language: string;
};

export type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
};
