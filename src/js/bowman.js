import Mathing from './math';

export default class Bowman extends Mathing {
    constructor(name, type = 'Bowman') {
        super(name, type);
        this.attack = 100;
    }
}
