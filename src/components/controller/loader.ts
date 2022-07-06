import { NewsRes, Options, SourceRes } from '../types/types';

class Loader {
    _baseLink: string;
    _options: Options<string>;

    constructor(baseLink: string, options: Options<string>) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Options<string> },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options<string>, endpoint: string) {
        const urlOptions = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: NewsRes | SourceRes) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: NewsRes | SourceRes) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
