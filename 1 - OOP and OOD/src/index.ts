import Triangle from './Triangle';
import Point from './Point';

const triangle: Triangle = new Triangle(new Point(1, 2), new Point(3, 7), new Point(5, 2));

console.log(triangle.printType());
