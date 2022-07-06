import { IArticle } from '../types/types';

export default interface INews {
    draw(data: IArticle[]): void;
}
