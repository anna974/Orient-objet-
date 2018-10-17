import Personnage from './personnage';


export default class Hero extends Personnage {



    constructor(name, life, damages, armor) {
        super(name, life, damages);
        this.armor = armor;
        this.maxLifeBonus = 70;
    }
    addArmorBonus(bonus) {
        this.armor += bonus;
    };
    addLifeBonus(bonus) {
        if(bonus > this.maxLifeBonus){
            bonus = this.maxLifeBonus;
        }
        this.life += bonus;
    }
    getDamages(damages) {
        if (damages <= this.armor) {
            this.armor = this.armor - damages
        } else if (damages > this.armor) {
            this.life = (this.life + this.armor) - damages;
            this.armor = 0
        }
    }
}

