import IArticle from './IArticle';

export default interface INews {
    draw(data: IArticle[]): void;
}
