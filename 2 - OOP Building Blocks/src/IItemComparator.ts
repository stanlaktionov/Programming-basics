import IComparable from './IComparable';

interface IItemComparator {
    compare(first: IComparable, second: IComparable): number;
}

export default IItemComparator;