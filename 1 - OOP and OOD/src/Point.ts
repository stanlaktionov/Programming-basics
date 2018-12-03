class Point {
    private _x: number;
    private _y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number) {
        this._x = x || 0;
        this._y = y || 0;
    }

    get x(): number {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y(): number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    toString(): string {
        return `(${this._x}, ${this._y})`;
    }

    private calcultaeDistance(x1: number, x2: number, y1: number, y2: number): number {
        return Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
    }

    public distance(): number;
    public distance(x: number, y: number): number;
    public distance(point: Point): number;
    public distance(point?: Point | number, y?: number): number {
        const selfX = this._x;
        const selfY = this._y;

        if (point instanceof Point) {
            const pointX = point.x;
            const pointY = point.y;

            return this.calcultaeDistance(selfX, pointX, selfY, pointY);
        }

        const pointX = point || 0;
        const pointY = y || 0;

        return this.calcultaeDistance(selfX, pointX, selfY, pointY);
    }
}

export default Point;