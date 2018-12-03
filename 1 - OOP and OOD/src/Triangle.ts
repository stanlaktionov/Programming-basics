import Shape from './Shape';
import Point from './Point';

type TriangleSides =  {
    s1: number;
    s2: number;
    s3: number;
}

class Triangle extends Shape {
    private _v1: Point;
    private _v2: Point;
    private _v3: Point;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number);
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(...args: any) {
        super();
        if (args.length === 6) {
            this._v1 = new Point(args[0], args[1]);
            this._v2 = new Point(args[2], args[3]);
            this._v3 = new Point(args[4], args[5]);
        } else {
            this._v1 = args[0];
            this._v2 = args[1];
            this._v3 = args[2];
        }
    }

    public toString(): string {
        return `Triangle [v1=${this._v1}, v2=${this._v2}, v3=${this._v3}]`
    }

    private getSidesLength(): TriangleSides {
        const s1 = this._v1.distance(this._v2);
        const s2 = this._v2.distance(this._v3);
        const s3 = this._v3.distance(this._v1);

        return {
            s1,
            s2,
            s3
        }
    }

    getPerimeter(): number {
        const {s1, s2, s3} = this.getSidesLength();
        return s1 + s2 + s3;
    }

    printType(): string {
        const {s1, s2, s3} = this.getSidesLength();

        if (s1 === s2 && s2 === s3) {
            return 'equilateral'
        }

        if (s1 === s2 || s1 === s3 || s2 === s3) {
            return 'isosceles';
        }

        return 'scalene'
    }
}

export default Triangle;