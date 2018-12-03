import Weapon from './Weapon';

class Sword extends Weapon {
    private MAX_POLISH_RATE = 0.25;

    constructor(value: number, weight: number, baseDamage: number, baseDurability: number) {
        super('sword', value, weight, baseDamage, baseDurability);
    }

    polish(): void {
        const maxDamageModifier = this.baseDamage * this.MAX_POLISH_RATE;

        if(!(this.damageModifier >= maxDamageModifier)) {
            this.damageModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}

export default Sword;