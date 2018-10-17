import Displayer from './displayer';
import turn from './app'

let displayer = new Displayer();

export default class Fight {
   
    strike(fighter, target) {
        if (fighter.life > 0 && target.life > 0) {
            fighter.attack(target);
            displayer.displayAttack(fighter, target);
            // $(".fight").append(displayer.displayAttack(fighter, target));
            target.attack(fighter);
            displayer.displayPersonnage(fighter, $('#hero'));
            displayer.displayPersonnage(target, $('#ennemy-char'));
            // $(".fight").append(displayer.displayAttack(target, fighter));

            if(this.isGetLifeBonus()){
                fighter.addLifeBonus(50);
            }
            if(this.isGetArmorBonus()){
                fighter.addArmorBonus(50);
            }
    
            // $(".hero").append(displayer.displayPersonnage(fighter));
            // $(".ennemy").append(displayer.displayPersonnage(target))

        } else if (fighter.life <= 0) {
            clearInterval(this.fightInterval);
            $(".fight").append(displayer.displayDead(fighter));

        } else if (target.life <= 0) {
            clearInterval(this.fightInterval);
            $(".fight").append(displayer.displayDead(target));
        }
    }

    startFight(fighter, target){
        this.fightInterval = setInterval( () => this.strike(fighter, target) , 1000);
    }

    isGetLifeBonus(){
        if (Math.floor((Math.random() * 5) + 1) == 4) {
             return true;
        }else{
            return false;
        }
    }

    isGetArmorBonus(){
        return Math.floor((Math.random() * 3) + 1) == 2;
    }
}
