import IComparable from './IComparable';

const INITIAL_ID = 0;
let initialId = INITIAL_ID;

abstract class Item implements IComparable {
    id: number;
    value: number;
    name: string;
    weight: number;

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        this.id = initialId++;
    };

    static numberOfItems(): number {
        return initialId;
    }

    static reset(): void {
        initialId = INITIAL_ID;
    }

    compareTo(other: Item): number {
        if(this.value === other.value) {
            return this.name.toLowerCase() > other.name.toLowerCase() ? 1 : -1;
        }

        return this.value > other.value ? 1 : -1;
    }

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    abstract use():any;
}

export default Item;