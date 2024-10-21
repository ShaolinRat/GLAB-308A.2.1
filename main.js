// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["small hat", "sunglasses"],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}`);
//   },
// };

// for (let i = 0; i < adventurer.inventory.length; i++) {
//   console.log(adventurer.inventory[i]);
// }

class Character {
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}`);
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    // Adventureres have specialized roles
    if (ROLES.includes(role)) {
      this.role = role;
    } else {
      console.log("Roles can only be Fighter, Healer, or Wizard");
    }
    // Every adventurer starts with a bed and 50 gold coins
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

const robin = new Adventurer("Robin", "Tank");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
// robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank", "Flea");
// robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
console.log(robin.companion);
console.log(robin.companion.companion);

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");
