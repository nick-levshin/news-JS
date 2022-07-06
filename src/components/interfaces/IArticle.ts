import INews from './ISource';

export default interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: INews;
    title: string;
    url: string;
    urlToImage: string;
}
