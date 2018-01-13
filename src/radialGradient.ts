import { AbstractElement } from './abstractElement';

export class RadialGradient extends AbstractElement {
    private $gradient: Element;
    
    constructor(id: string) {
        super();
        this.$element = document.createElementNS(this.xmlns, 'defs');
        this.$gradient = document.createElementNS(this.xmlns, 'radialGradient');
        this.$gradient.setAttribute('id', id);
        this.$element.appendChild(this.$gradient);
    }

    addStop(offset: number, color: string): void {
        let stop = document.createElementNS(this.xmlns, 'stop');
        stop.setAttributeNS(null, 'offset', offset.toString() + '%');
        stop.setAttributeNS(null, 'stop-color', color);
        this.$gradient.appendChild(stop);
    }
}