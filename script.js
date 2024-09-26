"use strict";

// when you don't realize it's a sports analogy until you read about the goalkeeper lol
class Player {
    #speed;
    #stamina;
    constructor(name, x, y, xv, yv) {
        this.name = name ?? "player";
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.xv = xv ?? 0;
        this.yv = yv ?? 0;
        this.position = [this.x, this.y];
        this.velocity = [this.xv, this.yv];
        this.skills = {
            "jump": true,
            "duck": false
        }
        this.#speed = 10;
        this.#stamina = 100;
    }

    get speed() {
        return this.#speed;
    }

    set speed(speed) {
        this.#speed = typeof speed === "number" ? speed : this.#speed;
    }

    get stamina() {
        return this.#stamina;
    }

    

    set stamina(stamina) {
        this.#stamina = typeof stamina === "number" ? stamina : this.#stamina;
    }

    displayInfo() {
        for (const key in this) {
            console.log(key, ": ", this[key]);
        }
    }
}

class GoalKeeper extends Player {
    constructor(name, x, y, xv, yv) {
        super(name, x, y, xv, yv);
        this.saves = "none";
    }
    
    makeSave() {
        this.saves = "wow a thing";
    }
}

const player1 = new Player("jim");
const player2 = new Player("bob");
const player3 = new Player();
const goalKeeper = new GoalKeeper("joe");

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
console.log(player1.speed);
player1.speed = 100;
console.log(player1.speed);

console.log(goalKeeper.saves);
goalKeeper.makeSave();
console.log(goalKeeper.saves);
goalKeeper.displayInfo();