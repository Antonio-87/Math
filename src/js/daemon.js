import Mathing from './math';

export default class Daemon extends Mathing {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attack = 100;
    }
}
