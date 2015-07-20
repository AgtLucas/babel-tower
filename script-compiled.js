'use strict';

var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + 1;
});

nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});

var bob = {
  _name: 'Bob',
  _friends: [],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + 'knows ' + f);
    });
  }
};
