import { AbstractElement } from './abstractElement';

export class Bolt extends AbstractElement {
    private xPos: number;
    private yPos: number;
    private radius: number;
    private color: string;

    constructor() {
        super();
        this.$element = document.createElementNS(this.xmlns, 'circle');
    }

    setXPos(xPos: number): void {
        this.xPos = xPos;
        this.$element.setAttributeNS(null, 'cx', xPos.toString());
    }

    getXPos(): number {
        return this.xPos;
    }

    setYPos(yPos: number): void {
        this.yPos = yPos;
        this.$element.setAttributeNS(null, 'cy', yPos.toString());
    }

    getYPos(): number {
        return this.yPos;
    }

    setRadius(radius: number): void {
        this.radius = radius;
        this.$element.setAttributeNS(null, 'r', radius.toString());
    }

    getRadius(): number {
        return this.radius;
    }

    setColor(color: string): void {
        this.color = color;
        this.$element.setAttributeNS(null, 'stroke', color);
    }

    getColor(): string {
        return this.color;
    }
}