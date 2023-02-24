export default class Mathing {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.stoneded = false;
    }

    setAttack(position) {
        if (this.type === 'Magician' || this.type === 'Daemon') {
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
        } else {
            this.attack = 100;
        }
    }

    stonedChange() {
        this.stoneded = !this.stoneded;
    }
}
