import AppController from '../controller/controller';
import AppView from '../view/appView';

export default interface IApp {
    _controller: AppController;
    _view: AppView;
    start(): void;
}
