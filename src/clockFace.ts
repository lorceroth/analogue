import { AbstractElement } from "./abstractElement";

export class ClockFace extends AbstractElement {
    private $face: Element;
    private $defs: Element;
    private $gradient: Element;
    private $from: Element;
    private $to: Element;

    private xPos: number;
    private yPos: number;
    private strokeWidth: number;
    private radius: number;
    private color: string;

    constructor() {
        super();
        this.$element = document.createElementNS(this.xmlns, 'g');
        this.$face = document.createElementNS(this.xmlns, 'circle');
        this.$element.appendChild(this.$face);
        this.createGradient();
    }

    createGradient(): void {
        this.$defs = document.createElementNS(this.xmlns, 'defs');
        this.$gradient = document.createElementNS(this.xmlns, 'radialGradient');
        this.$gradient.setAttribute('id', 'clock--gradient');

        this.$from = document.createElementNS(this.xmlns, 'stop');
        this.$from.setAttributeNS(null, 'offset', '0%');
        this.$from.setAttributeNS(null, 'stop-color', this.color);
        this.$gradient.appendChild(this.$from);

        this.$to = document.createElementNS(this.xmlns, 'stop');
        this.$to.setAttributeNS(null, 'offset', '100%');
        this.$to.setAttributeNS(null, 'stop-color', 'transparent');
        this.$gradient.appendChild(this.$to);

        this.$defs.appendChild(this.$gradient);
        this.$element.appendChild(this.$defs);
        this.$element.appendChild(this.$face);
    }

    setXPos(xPos: number): void {
        this.xPos = xPos;
        this.$face.setAttributeNS(null, 'cx', xPos.toString());
    }

    getXPos(): number {
        return this.xPos;
    }

    setYPos(yPos: number): void {
        this.yPos = yPos;
        this.$face.setAttributeNS(null, 'cy', yPos.toString());
    }

    getYPos(): number {
        return this.yPos;
    }

    setStrokeWidth(strokeWidth: number): void {
        this.strokeWidth = strokeWidth;
        this.$face.setAttributeNS(null, 'stroke-width', strokeWidth.toString());
    }

    getStrokeWidth(): number {
        return this.strokeWidth;
    }

    setRadius(radius: number): void {
        this.radius = radius;
        this.$face.setAttributeNS(null, 'r', radius.toString());
    }

    getRadius(): number {
        return this.radius;
    }

    setColor(color: string): void {
        this.color = color;
        this.$face.setAttributeNS(null, 'stroke', color);
        this.$from.setAttributeNS(null, 'stop-color', color);
        this.$face.setAttributeNS(null, 'fill', 'url(#clock--gradient)');
    }

    getColor(): string {
        return this.color;
    }
}