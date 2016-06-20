// Soon, you'll learn how to break your code into separate files.

function Sheep(name) {
  this._name = name;
};

Sheep.prototype = {
  name: function() {
    return this._name;
  }
};

function Pen() {
  this._sheep = [];
};

Pen.prototype = {
  add: function(sheep) {
    this._sheep.push(sheep);
  },

  // How could you use `map` to rewrite this function?
  listNames: function() {
    var names = [];
    for (var i = 0; i < this._sheep.length; i++) {
      names.push(this._sheep[i].name());
    }

    return names;
  }
};

var pen = new Pen();

pen.add(new Sheep("Mary"));
pen.add(new Sheep("Lauren"));
pen.add(new Sheep("Isla"));
pen.add(new Sheep("Sam"));

console.log(pen.listNames());
