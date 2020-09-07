// Objects

// collection of properties (features that it has)
// & methods (work that it does)

// properties - variables
// methods - functions

// let avenger = {
//   name: "Thor",
//   age: 1500,
//   weapons: ["Mjolnir", "Stormbreaker", "Thunder"],
//   address: {
//     planet: "Asgard",
//     home: "Apratment",
//   },

//   printWeapon: function () {
//     this.weapons.forEach(function (weapon) {
//       console.log(weapon);
//     });

//     console.log(this.address);
//   },
// };

// avenger.printWeapon();

// console.log(avenger.address.planet);

// let avengers = [
//   {
//     name: "Thor",
//     age: 1500,
//   },
//   {
//     name: "Captain America",
//     age: 100,
//   },
//   {
//     name: "Ironman",
//     age: 43,
//   },
// ];

// for (let i = 0; i < avengers.length; i++) {
//   console.log(avengers[i].name);
// }

// avengers.forEach(function (avenger) {
//   console.log(avenger.name);
// });

demo = {
  name: "Laptop",
  printName: () => {
    console.log(this);
  },
};

demo.printName();
