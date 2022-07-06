import { ISource } from '../types/types';

export default interface ISources {
    draw(data: ISource[]): void;
}
