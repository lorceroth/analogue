import { AbstractElement } from "./abstractElement";

export class Hand extends AbstractElement {
    private xOuter: number;
    private yOuter: number;
    private xInitOuter: number;
    private yInitOuter: number;
    private xCenter: number;
    private yCenter: number;
    private strokeWidth: number;
    private segments: number;
    private offset: number;
    private radius: number;
    private color: string;

    constructor() {
        super();
        this.$element = document.createElementNS(this.xmlns, 'line');
    }

    setXOuter(xOuter: number): void {
        this.xOuter = xOuter;
        this.$element.setAttributeNS(null, 'x1', xOuter.toString());
    }

    getXOuter(): number {
        return this.xOuter;
    }

    setYOuter(yOuter: number): void {
        this.yOuter = yOuter;
        this.$element.setAttributeNS(null, 'y1', yOuter.toString());
    }

    getYOuter(): number {
        return this.yOuter;
    }

    setXCenter(xCenter: number): void {
        this.xCenter = xCenter;
        this.$element.setAttributeNS(null, 'x2', xCenter.toString());
    }

    getXCenter(): number {
        return this.xCenter;
    }

    setYCenter(yCenter: number): void {
        this.yCenter = yCenter;
        this.$element.setAttributeNS(null, 'y2', yCenter.toString());
    }

    getYCenter(): number {
        return this.yCenter;
    }

    setStrokeWidth(strokeWidth: number): void {
        this.strokeWidth = strokeWidth;
        this.$element.setAttributeNS(null, 'stroke-width', strokeWidth.toString());
    }

    getStrokeWidth(): number {
        return this.strokeWidth;
    }

    setSegments(segments: number): void {
        this.segments = 2 * Math.PI / segments;
    }

    getSegments(): number {
        return this.segments;
    }

    setOffset(offset: number): void {
        this.offset = offset;
    }

    getOffset(): number {
        return this.offset;
    }

    setRadius(radius: number): void {
        this.radius = radius;
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

    setSegmentStep(step: number): void {
        let xNextPos: number = this.xCenter + this.radius * Math.cos((step + this.offset) * this.segments);
        let yNextPos: number = this.yCenter + this.radius * Math.sin((step + this.offset) * this.segments);

        this.setXOuter(xNextPos);
        this.setYOuter(yNextPos);
    }
}