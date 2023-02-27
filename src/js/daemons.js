import Unit from './unit';

export default class Daemons extends Unit {
    constructor(name, type) {
        super(name, type);
        this.stoneded = false;
    }

    setAttack(position) {
        if (position > 0 && position <= 5) {
            if (this.stoneded === false) {
                this.attack = 100 - 10 * (position - 1);
            } else {
                this.attack = (100 - 10 * (position - 1)) - (Math.log2(position) * 5);
            }
        } else if (position <= 0) {
            this.attack = 100;
        } else if (position > 5) {
            this.attack = 60;
        }
    }

    stonedChange() {
        this.stoneded = !this.stoneded;
    }
}
