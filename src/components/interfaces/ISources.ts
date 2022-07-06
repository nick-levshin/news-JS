import ISource from './ISource';

export default interface INews {
    draw(data: ISource[]): void;
}
