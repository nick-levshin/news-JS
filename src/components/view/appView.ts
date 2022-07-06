import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    _news: News;
    _sources: Sources;

    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    drawNews(data: INews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { source: string }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
