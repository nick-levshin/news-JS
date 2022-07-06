import { Article } from '../types/types';

export default interface INews {
    draw(data: Article[]): void;
}
