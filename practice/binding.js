/*
  - Implicit Binding
  - Explicit Binding
  - new Binding
  - window Binding
*/

// Implicit Binding

// Example 01
var me = {
  name: 'Daniel',
  age: 24,
  // sayName: function() {
  //   console.log(this.name);
  // },
}

// me.sayName();

// Example 02
var you = {
  name: 'Anibal',
  age: 13,
}

var sayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  }
}

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();

// Example 03
var Person = function(name, age) {
  return {
    name,
    age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Adelia',
      sayName: function() {
        console.log(this.name);
      }
    }
  }
}

var anali = Person('Anali', 3);
anali.sayName();
anali.mother.sayName();

// Explicit Binding
// call, apply, bind
var sayName = function(lang1, lang2, lang3) {
  console.log(`My name is ${this.name} and I know ${lang1}, ${lang2} and ${lang3}`);
}

var languages = ['Javascript', 'Python', 'Golang'];

var adelia = {
  name: 'Adelia',
  age: 40,
}

// sayName.apply(adelia, languages);
// sayName.call(adelia, languages[0], languages[1], languages[2]);
var newSayName = sayName.bind(adelia, languages[0], languages[1], languages[2]);
newSayName();

// new Binding
var Animal = function(color, name, type) {
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window Binding
var sayAge = function() {
  'use strict'; // with this, code will throw an error
  console.log(this.age);
}

var me = {
  age: 24,
}

sayAge();
window.age = 30;
sayAge();