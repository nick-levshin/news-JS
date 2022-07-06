import { NewsRes, SourceRes } from '../types/types';

export default interface IAppController {
    getSources(callback: (data?: SourceRes) => void): void;
    getNews(e: Event, callback: (data?: NewsRes) => void): void;
}
