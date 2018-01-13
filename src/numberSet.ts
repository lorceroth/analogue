import { AbstractElement } from './abstractElement';

export class NumberSet extends AbstractElement {
    private xCenter: number;
    private yCenter: number;
    private radius: number;
    private segments: number;
    private offset: number;
    private color: string;
    private fontSize: number;
    private fontFamily: string;

    constructor() {
        super();
        this.$element = document.createElementNS(this.xmlns, 'g');
    }

    setXCenter(xCenter: number): void {
        this.xCenter = xCenter;
    }

    getXCenter(): number {
        return this.xCenter;
    }

    setYCenter(yCenter: number): void {
        this.yCenter = yCenter;
    }

    getYCenter(): number {
        return this.yCenter;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setSegments(segments: number): void {
        this.segments = 2 * Math.PI / segments;
    }

    getSegments(): number {
        return this.segments;
    }

    setColor(color: string): void {
        this.color = color;
        this.$element.setAttributeNS(null, 'fill', color);
    }

    getColor(): string {
        return this.color;
    }

    setOffset(offset: number): void {
        this.offset = offset;
    }

    getOffset(): number {
        return this.offset;
    }

    setFontSize(fontSize: number): void {
        this.fontSize = fontSize;
    }

    getFontSize(): number {
        return this.fontSize;
    }

    setFontFamily(fontFamily: string): void {
        this.fontFamily = fontFamily;
    }

    getFontFamily(): string {
        return this.fontFamily;
    }

    drawNumbers(): void {
        for (let i = 0; i < 12; i++) {
            this.$element.appendChild(this.drawNumber(i));
        }
    }

    drawNumber(index: number): Element {
        let number = document.createElementNS(this.xmlns, 'text');
        let xPos: number = this.xCenter + this.radius * Math.cos((index + this.offset) * this.segments);
        let yPos: number = this.yCenter + this.radius * Math.sin((index + this.offset) * this.segments);

        number.innerHTML = (index + 1).toString();
        number.setAttributeNS(null, 'x', xPos.toString());
        number.setAttributeNS(null, 'y', yPos.toString());
        number.setAttributeNS(null, 'font-size', this.fontSize.toString());
        number.setAttributeNS(null, 'font-family', this.fontFamily);
        number.setAttributeNS(null, 'dy', (this.fontSize / 2.5).toString());
        number.setAttributeNS(null, 'text-anchor', 'middle');

        return number;
    }
}