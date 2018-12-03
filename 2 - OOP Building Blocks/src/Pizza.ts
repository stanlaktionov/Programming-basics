import Consumable from './Consumable';

class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza', 0, 0, spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You eat a slice of ${this.name}`;
        } else {
            return '';
        }
    }
}

export default Pizza;