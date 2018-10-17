import Personnage from './personnage';

export default class Hero extends Personnage {
    constructor(name, life, damages, armor) {
        super(name, life, damages);
        this.armor = armor;
    }
    armorBonus() {
        this.armor += 20;
    }
    lifeBonus() {
        this.life += 50;
    }
    getDamages(damages) {
        if (damages <= this.armor) {
            this.armor = this.armor - damages;
        } else if (damages > this.armor) {
            this.life = this.life + this.armor - damages;
            this.armor = 0;
        }
    }
}