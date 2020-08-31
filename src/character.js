/* eslint-disable func-names */
function Character(config) {
  this.name = config.name;
  this.health = config.health;
  this.maxHealth = config.maxHealth;
  this.dialogue = config.dialogue;
  this.level = 1;
  this.baseAttack = 0;
  this.baseDefense = 0;
}

Character.prototype = {
  get isAlive() {
    return this.health > 0;
  },
  _takeDamage: function (damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  },
  get attackTotal() {
    const attack = this.level + this.baseAttack
    return attack;  
  },
  get defenseTotal() {
    const defense = this.level + this.baseDefense
    return defense;  
  },
  _heal: function (health) {
    this.health += health;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  },
  speak: function () {
    return this.dialogue;
  },
};

module.exports = Character;
