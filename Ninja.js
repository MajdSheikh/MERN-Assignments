class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = 0;
        this.speed = 3; 
        this.strength = 3;

    }
    sayName() {
        console.log(this.name);
    }


    showStats() {
        this.speed += 3;
        this.strength += 3;
        console.log(`Ninja's name is ${this.name}, its stringth is ${this.health}, its speed is ${this.speed}, and its current health is ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
