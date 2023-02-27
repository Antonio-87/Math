import Daemons from './daemons';

export default class Magician extends Daemons {
    constructor(name, type = 'Magician') {
        super(name, type);
    }
}
