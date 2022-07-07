import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'ac98d50ee0fd43c2be200fd0af145bfa',
        });
    }
}

export default AppLoader;
