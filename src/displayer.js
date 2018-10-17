
export default class Displayer {

    
    displayPersonnage(personnage, displayArea) {
       /* if (personnage.armor) {
            $(".fight").append("<p> Nom : " + personnage.name + "</p><p>Vie : " + personnage.life + "</p><p> Armor : " + personnage.armor + "</p>")
        } else {
            $(".fight").append("<p> Nom : " + personnage.name + " </p><p>Vie : " + personnage.life + "</p>");
        }*/
        $('.life',displayArea).html(personnage.life);
        $('.armor',displayArea).html(personnage.armor);
        $('.damage',displayArea).html(personnage.damages);
    }
    displayDead(personnage) {
        $(".fight").append("<p>" + personnage.name + " est mort ! Fin de la partie</p>")
    }
    displayAttack(personnage, target) {
        if (personnage.criticalHit()) {
            $(".fight").append("<p>" + personnage.name + " attaque " + target.name + ". coup critique </p>")
        } else {
            $(".fight").append("<p>" + personnage.name + " attaque " + target.name + "</p>")
        }

        
    }
    displayBonus(personnage) {
        if (personnage.lifeBonus()) {
            $(".fight").append("<p>" + personnage.name + " a obtenu un bonus vie </p>")
        } else if (personnage.armorBonus()) {
            $(".fight").append("<p>" + personnage.name + " a obtenu un bonus armure </p>")
        }
    }
}

