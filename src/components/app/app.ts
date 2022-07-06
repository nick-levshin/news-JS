import AppController from '../controller/controller';
import { NewsRes, SourceRes } from '../types/types';
import { AppView } from '../view/appView';

class App {
    _controller: AppController;
    _view: AppView;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this._controller.getNews(e, (data?: NewsRes) => this._view.drawNews(data))
            );
        this._controller.getSources((data?: SourceRes) => this._view.drawSources(data));
    }
}

export default App;
