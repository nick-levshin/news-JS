import AppController from '../controller/controller';
import IApp from '../interfaces/IApp';
import { NewsRes, SourceRes } from '../types/types';
import { AppView } from '../view/appView';

class App implements IApp {
    _controller: AppController;
    _view: AppView;

    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this._controller.getNews(e, (data?: NewsRes) => this._view.drawNews(data))
            );
        this._controller.getSources((data?: SourceRes) => this._view.drawSources(data));
    }
}

export default App;
