'use strict';

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + 1);

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + 'knows ' + f));
  }
}
