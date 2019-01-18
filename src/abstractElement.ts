import { Configurable } from './configurable';

export abstract class AbstractElement extends Configurable {
    readonly xmlns: string = 'http://www.w3.org/2000/svg';

    protected $element: Element;

    getElement(): Element {
        return this.$element;
    }
}