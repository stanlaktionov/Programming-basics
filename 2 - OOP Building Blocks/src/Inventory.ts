import Item from './Item';
import ItemComparator from './IItemComparator';

class Inventory {
    items: Array<Item>;

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public toString() {
        return this.items.reduce((acc: string, item: Item) => {
            acc += item.toString() + ',';

            return acc;
        }, '');
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if (comparator) {
            this.items.sort(comparator.compare);
        } else {
            this.items.sort((itemA: Item, itemB: Item) => itemA.compareTo(itemB));
        }
    }
}

export default Inventory;