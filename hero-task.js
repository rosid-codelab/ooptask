class Hero {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  // Method to attack another hero
  attackOtherHero(otherHero) {
    console.log(`${this.name} attacks ${otherHero.name} for ${this.attack} damage.`);
    otherHero.takeDamage(this.attack);
  }

  // Method to take damage from an attack
  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes damage and now has ${this.health} health points.`);
  }

  // Method to heal another hero
  healOtherHero(otherHero, amount) {
    console.log(`${this.name} heals ${otherHero.name} for ${amount} health points.`);
    otherHero.receiveHealing(amount);
  }

  // Method to receive healing
  receiveHealing(amount) {
    this.health += amount;
    console.log(`${this.name} receives healing and now has ${this.health} health points.`);
  }
}

// Creating two hero objects
const hero1 = new Hero("Hero 1", 100, 20);
const hero2 = new Hero("Hero 2", 120, 18);

// Hero 1 attacks Hero 2
hero1.attackOtherHero(hero2);

// Hero 2 heals Hero 1
hero2.healOtherHero(hero1, 15);

// Hero 2 attacks Hero 1
hero2.attackOtherHero(hero1);

// Hero 1 heals Hero 2
hero1.healOtherHero(hero2, 10);
// Hero 2 attacks Hero 1 again
hero2.attackOtherHero(hero1);

// Hero 1 attempts to heal Hero 2, but Hero 2 has full health
hero1.healOtherHero(hero2, 30);

// Hero 2 attacks Hero 1 once more
hero2.attackOtherHero(hero1);