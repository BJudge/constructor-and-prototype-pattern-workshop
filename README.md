# Encapsulation with the constructor and prototype pattern

## Instructions

At a high level, this week is about building an effective process for learning unfamiliar language features and patterns.  In this workshop, you'll practice using this process to understand some code that uses the constructor and prototype pattern.

### Learning objectives

1. Describe what a constructor function does.  Describe what a constructor function's prototype does.
2. Write a constructor function and prototype to encapsulate some behaviour.
3. Explain the strengths and weaknesses of the constructor and prototype pattern as a way to encapsulate behaviour.

### Getting visibility

A great way to understand code is to first tighten the loop, then get visibility.  In this workshop, we'll practice getting visibility.  As you go through the workshop, use `console.log()` to inspect the values of:

* Variables
* Parameters
* Function return values

### Investigate the CountModel code sample (20 mins)

* Pair up.

* Clone this repo.

* Open the `index.html` file in your web browser.

* Open the browser console.

* You should see `hello!`.

* Open `index.js` in your text editor.

* Paste the code for question 1 (below) into `index.js`.

* Play around with the code using the techniques for getting visibility. Answer the questions that are in comments.

* Discuss your answers with your pair partner.

* Swap driver and navigator.  Continue with the next question.

### Plenary (20 mins)

We'll come back together for a short plenary.  We'll show our code and discuss it.

## Questions

### Question 1

```js
// What happens if you rename CountModel to countmodel? Does this have any ramifications?

function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());
```

### Question 2

```js
function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  // What happens if you rename `set` to `_set` (and change
  // `countModel.set(5)` below to `countModel._set(5)`)?
  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());
```

### Question 3

```js
function CountModel() {
  this._count = 0;

  // What happens if you uncomment the line below. Why does this happen?
  // return {};
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());
```

### Question 4

```js
function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

// What happens if you omit the `new` keyword in the next line? Why?
var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());
```

### Question 5

```js
function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();

// What happens if you add this code? Why?
// countModel.set = function() {
//   return "hello";
// };

countModel.set(5);

console.log("count is", countModel.count());
```

### Question 6

```js
function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());

// Bonus research project. Can you find the property name below that
// makes the statement log `true`?
// console.log(countModel["???"] === CountModel.prototype);
```

## Resources

- [JavaScript constructors, prototypes and the new keyword](https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword) (Pivotal blog)
