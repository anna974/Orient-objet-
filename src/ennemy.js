import Personnage from './personnage';

export default class Ennemies extends Personnage {
    constructor(name, life, damages) {
        super(name, life, damages);
    }
}
