import Item from './Item';

abstract class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    isConsumed(): boolean {
        return this.consumed;
    }

    setConsumed(consumed: boolean) {
        this.consumed = consumed;
    }

    isSpoiled(): boolean {
        return this.spoiled;
    }

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
        this.consumed = false;
    }

    abstract eat(): string;

    use(): string {
        if (!this.spoiled && !this.consumed) {
            return this.eat();
        }

        if (this.spoiled) {
            return `You eat the ${this.name}. You feel sick`
        }
        //If consumed
        return `There is nothing left of the ${this.name} to consume.`;
    }
}

export default Consumable;