class Personnage {
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

class Hero extends Personnage {
    constructor(name, life, damages, armor) {
        super(name, life, damages);
        this.armor = armor;
    }
    armorBonus() {
        this.armor += 20;
    };
    lifeBonus() {
        this.life += 50;
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

class Ennemies extends Personnage {
    constructor(name, life, damages) {
        super(name, life, damages);
    }
}


class Displayer {
    displayPersonnage(personnage) {
        if (personnage.armor) {
            return ("<p> Nom : " + personnage.name + "</p><p>Vie : " + personnage.life + "</p><p> Armor : " + personnage.armor + "</p>")
        } else {
            return ("<p> Nom : " + personnage.name + " </p><p>Vie : " + personnage.life + "</p>");
        }
    }
    displayDead(personnage) {
        return ("<p>" + personnage.name + " est mort ! Fin de la partie</p>")
    }
    displayAttack(personnage, target) {
        if (personnage.criticalHit()) {
            return ("<p>" + personnage.name + " attaque " + target.name + ". coup critique </p>")
        } else {
            return ("<p>" + personnage.name + " attaque " + target.name + "</p>")
        }
    }
    displayBonus(personnage) {
        if (personnage.lifeBonus()) {
            return ("<p>" + personnage.name + " a obtenu un bonus vie </p>")
        } else if (personnage.armorBonus()) {
                return ("<p>" + personnage.name + " a obtenu un bonus armure </p>")
        }
    }
}

let Heros = new Hero("Héros", 200, 15, 0);
let minion = new Ennemies("Minion", 10, 10);
let lieutenantMinion = new Ennemies("Lieutenant minion", 30, 30);
let chefMinion = new Ennemies("Chef minion", 100, 100);

let displayer = new Displayer();


// $(document).ready(function () {


$(".hero").append(displayer.displayPersonnage(Heros));
    $(".ennemy").append(displayer.displayPersonnage(chefMinion))

$("button").click(function () {

    if (Heros.life > 0 && chefMinion.life > 0) {
        Heros.attack(chefMinion);
        $(".fight").append(displayer.displayAttack(Heros, chefMinion));
        chefMinion.attack(Heros);
        $(".fight").append(displayer.displayAttack(chefMinion, Heros));

        if (Math.floor((Math.random() * 3) + 1) == 2) {
            Heros.armorBonus()
        } else if (Math.floor((Math.random() * 5) + 1) == 4) {
            Heros.lifeBonus();
        };

        $(".hero").append(displayer.displayPersonnage(Heros));
        $(".ennemy").append(displayer.displayPersonnage(chefMinion))

    } else if (Heros.life <= 0) {
        $(".fight").append(displayer.displayDead(Heros));

    } else if (chefMinion.life <= 0) {
        $(".fight").append(displayer.displayDead(chefMinion));
    }

});

