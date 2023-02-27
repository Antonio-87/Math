import Daemons from './daemons';

export default class Daemon extends Daemons {
    constructor(name, type = 'Daemon') {
        super(name, type);
    }
}
