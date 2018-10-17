
export default class Displayer {
    displayPersonnage(personnage) {
        if (personnage.armor) {
            return "<p> Nom : " + personnage.name + "</p><p>Vie : " + personnage.life + "</p><p> Armor : " + personnage.armor + "</p>";
        } else {
            return "<p> Nom : " + personnage.name + " </p><p>Vie : " + personnage.life + "</p>";
        }
    }
    displayDead(personnage) {
        return "<p>" + personnage.name + " est mort ! Fin de la partie</p>";
    }
    displayAttack(personnage, target) {
        if (personnage.criticalHit()) {
            return "<p>" + personnage.name + " attaque " + target.name + ". coup critique </p>";
        } else {
            return "<p>" + personnage.name + " attaque " + target.name + "</p>";
        }
    }
    displayBonus(personnage) {
        if (personnage.lifeBonus()) {
            return "<p>" + personnage.name + " a obtenu un bonus vie </p>";
        } else if (personnage.armorBonus()) {
            return "<p>" + personnage.name + " a obtenu un bonus armure </p>";
        }
    }
}