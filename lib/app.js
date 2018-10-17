
import Hero from './hero';
import Ennemies from './ennemy';
import Displayer from './displayer';

let Heros = new Hero("Héros", 200, 15, 0);
let minion = new Ennemies("Minion", 10, 10);
let lieutenantMinion = new Ennemies("Lieutenant minion", 30, 30);
let chefMinion = new Ennemies("Chef minion", 100, 100);

let displayer = new Displayer();

// $(document).ready(function () {


$(".hero").append(displayer.displayPersonnage(Heros));
$(".ennemy").append(displayer.displayPersonnage(chefMinion));

$("button").click(function () {

    if (Heros.life > 0 && chefMinion.life > 0) {
        Heros.attack(chefMinion);
        $(".fight").append(displayer.displayAttack(Heros, chefMinion));
        chefMinion.attack(Heros);
        $(".fight").append(displayer.displayAttack(chefMinion, Heros));

        if (Math.floor(Math.random() * 3 + 1) == 2) {
            Heros.armorBonus();
        } else if (Math.floor(Math.random() * 5 + 1) == 4) {
            Heros.lifeBonus();
        };

        $(".hero").append(displayer.displayPersonnage(Heros));
        $(".ennemy").append(displayer.displayPersonnage(chefMinion));
    } else if (Heros.life <= 0) {
        $(".fight").append(displayer.displayDead(Heros));
    } else if (chefMinion.life <= 0) {
        $(".fight").append(displayer.displayDead(chefMinion));
    }
});