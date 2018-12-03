import Weapon from './Weapon';

class Bow extends Weapon {
    constructor(value: number, weight: number, baseDamage: number, baseDurability: number) {
        super('bow', value, weight, baseDamage, baseDurability);
    }

    polish(): void {
        if (this.durabilityModifier <= 1) {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}

export default Bow;