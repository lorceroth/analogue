export abstract class AbstractElement {
    readonly xmlns: string = 'http://www.w3.org/2000/svg';

    protected $element: Element;

    configure(callback: (config: this) => any): void {
        callback(this);
    }

    getElement(): Element {
        return this.$element;
    }
}