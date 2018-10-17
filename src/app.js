import Hero from './hero';
import Ennemies from './ennemy';
import Displayer from './displayer';
import Fight from './fight'


let heros = new Hero("Héros", 200, 15, 0);
let minion = new Ennemies("Minion", 10, 10);
let lieutenantMinion = new Ennemies("Lieutenant minion", 30, 30);
let chefMinion = new Ennemies("Chef minion", 100, 15);
let displayer = new Displayer();
let combat = new Fight();
let turn;





$("button").click(function () {
    displayer.displayPersonnage(heros, $('#hero'));
    displayer.displayPersonnage(chefMinion, $('#ennemy-char'));
    combat.startFight(heros, chefMinion)

});




