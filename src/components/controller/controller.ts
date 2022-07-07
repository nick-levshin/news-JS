import IAppController from '../interfaces/IAppController';
import { NewsRes, SourceRes } from '../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader implements IAppController {
    getSources(callback: (data?: SourceRes) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data?: NewsRes) => void): void {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target !== newsContainer) {
            if ((target as Element).classList.contains('source__item')) {
                const sourceId = (target as Element).getAttribute('data-source-id') as string;
                if ((newsContainer as Element).getAttribute('data-source') !== sourceId) {
                    (newsContainer as Element).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as Element).parentNode as Element;
        }
    }
}

export default AppController;
