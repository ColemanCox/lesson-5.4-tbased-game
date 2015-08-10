

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

};

  this.getHealth = function() {return hitPoints;};

}

Character.prototype.defensive = function(badguy, technique) {
  this.takeDamage(badguy.getAttackStrength(technique));
};

var goku = new Character('Goku', {hitpoints: 25000, technique: {h2h: 2500, KaiokenX4: 8700, Kamehameha: 9001 }});

var party = [
 goku,
 new Character('Vegeta', {hitpoints: 19000, technique: {h2h: 2000, BigBangAttack: 8000, FinalFlash: 8999 }}),
 new Character('Mr. Satan', {hitpoints: 500, technique:{h2h: 50, SuckerPunch: 100, CowerInFear: -50 }}),
 new Character('Frieza', {hitpoints: 18000, technique: {h2h: 1750, deathBeam: 7900, muttersSomethinBoutYoMomma: 17500}}),
 new Character('Cell', {hitpoints: 20000, technique:{h2h: 2300, QuickSrtrike: 8000, Kamehameha: 8800 }}),
 new Character('Buu', {hitpoints: 26000, technique: {h2h:2750, deathBall: 9000, ArmBreak: 11000}})
];

party.forEach(function(partyMember) {
  console.log(partyMember.name);
});

