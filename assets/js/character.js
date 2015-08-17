
function Character(name, options) {
  this.name = name;
  options = options || {};
  var hitPoints = options.hitPoints || {};
  this.technique = options.technique || {};

  this.takeDamage = function(damage) {hitPoints -= damage; };

  this.getAttackStrength = function(techniqueName) {
  if (this.technique[techniqueName]) {
    return this.technique[techniqueName];
  }

  return damage;
};


  this.getHealth = function() {return hitPoints;};
}


 var attack = function(hostile, technique) {

    hostile.trigger('attacked', this.getAttackStrength(technique));
  }
}, Backbone.Events);

goku = new Character({hitpoints: 25000, technique: {h2h: 2500, KaiokenX4: 8700, Kamehameha: 9001 }});
frieza = new Character({hitpoints: 18000, technique: {h2h: 1750, deathBeam: 7900, muttersSomethinBoutYoMomma: 17500}});
frieza.on('attacked', function(amount) {
  if (amount > 10) {
    return 'Pathetic...';
  }
});

goku.attack(Frieza, 'h2h');
frieza.attack(Goku, 'deathBeam');

console.log('character: ', goku.getHealth());
console.log('enemy: ', friezade.getHealth());
