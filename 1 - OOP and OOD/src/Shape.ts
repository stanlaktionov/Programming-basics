abstract class Shape {
    protected _color: string;
    protected _filled: boolean;

    get color() {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }

    get filled() {
        return this._filled;
    }

    set filled(filled: boolean) {
        this._filled = filled;
    }

    protected constructor();

    protected constructor(color: string, filled: boolean);

    protected constructor(color?: string, filled?: boolean) {
        this._color = color || 'green';
        this._filled = filled || true;
    }

    public toString(): string {
        return `A Shape with color of ${this._color} and ${this._filled ? 'filled' : 'not filled'}`;
    }

    abstract getPerimeter(): number;
}

export default Shape;