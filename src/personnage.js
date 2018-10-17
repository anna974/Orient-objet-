export default class Personnage {
    constructor(name, life, damages) {
        this.name = name;
        this.life = life;
        this.damages = damages;
    }

    attack(target) {
        if (this.criticalHit()) {
            console.log(target.name + " life :", target.life);
            target.getDamages(this.damages * 2)
            console.log(this.name + " attaque " + target.name + ". coup critique de 2 fois " + this.damages + " " + target.name + " life :", target.life)
        } else {
            console.log(target.name + " life :", target.life);
            target.getDamages(this.damages)
            console.log(this.name + " attaque " + target.name + " de " + this.damages + " " + target.name + " life :" + target.life)
        }
    }

    getDamages(damages) {
        if (this.dodge()) {
            console.log(this.name + " a évité le coup !");
        } else {
            this.life -= damages;
        }
    }

    criticalHit() {
        return (Math.floor((Math.random() * 2) + 1) === 2);
    }
    dodge() {
        return (Math.floor((Math.random() * 2) + 1) === 1);
    }
}

