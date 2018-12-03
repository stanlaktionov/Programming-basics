import IItemComparator from './IItemComparator';
import Item from './Item';

class ItemWeightComparator implements IItemComparator {
    compare(first: Item, second: Item): number {
        if (first.weight === second.weight) {
            return first.compareTo(second);
        }

        return first.weight > second.weight ? 1 : -1;
    }
}

export default ItemWeightComparator;