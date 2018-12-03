import Item from './Item';

abstract class Weapon extends Item {
    protected MODIFIER_CHANGE_RATE: number = 0.05;
    protected baseDamage: number;
    protected damageModifier: number;
    protected baseDurability: number;
    protected durabilityModifier: number;
    protected effectiveDamage: number;
    protected effectiveDurability: number;

    getBaseDamage(): number {
        return this.baseDamage;
    }

    setBaseDamage(baseDamage: number): void {
        this.baseDamage = baseDamage;
    }

    getBaseDurability(): number {
        return this.baseDurability;
    }

    setBaseDurability(baseDurability: number): void {
        this.baseDurability = baseDurability;
    }

    getDamageModifier(): number {
        return this.damageModifier;
    }

    setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    setDurabilityModifier(durabilityModifier: number) {
        this.durabilityModifier = durabilityModifier;
    }

    constructor(
        name: string,
        value: number,
        weight: number,
        baseDamage: number,
        baseDurability: number,
        damageModifier?: number,
        durabilityModifier?: number,
    ) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = damageModifier || 0;
        this.durabilityModifier = durabilityModifier || 0;
        this.effectiveDamage = this.baseDamage + this.damageModifier;
        this.effectiveDurability = this.baseDurability + this.durabilityModifier;
    }

    getDamage(): number {
        return this.effectiveDamage;
    }

    getDurability(): number {
        return this.effectiveDamage;
    }

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`;
    }

    use(): string {
        if (this.effectiveDurability <= 0) {
            return `You can't use ${this.name}`;
        }

        this.effectiveDurability -= this.MODIFIER_CHANGE_RATE;
        let usageString: string = `You use ${this.name}, dealing ${this.getDamage()}.`;

        if (this.effectiveDurability <= 0) {
            usageString += `${this.name} breaks`;
        }

        return usageString;
    }

    abstract polish(): void;
}

export default Weapon;