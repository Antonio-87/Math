import Mathing from './math';

export default class Magician extends Mathing {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attack = 100;
    }
}
