// const sq = function (x) {
//   return x * x;
// };

// // const sqArrow = (x) => {
// //   return x * x;
// // }

// const sqArrow = (x) => x * x;


// console.log(sqArrow(4));


// const n = 'Juka Buka';

// const gfn = (x) => {
//   return x.split(' ')[0];
// }
// console.log(gfn(n));

// const gfn2 = (x) => x.split(' ')[1];
// console.log(gfn2(n));


// const add = function (a, b) {
//   console.log(arguments); //wszystkie argumenty przekazane do funkcji
//   return a + b;
// }

const add = (a, b) => {
  return a + b;
}

// console.log(add(55, 2, 23434));

// const user = {
//   name: 'Paw',
//   cities: ['Berlin', 'Dublin'],
//   print: function () {
//     //console.log(this.name);
//     const that = this;

//     // this.cities.forEach(function (city) { //this nie dostępne w tej funkcji
//     //   console.log(that.name + 'city ' + city)
//     // });
//     this.cities.forEach((city) => { //this dostępne w arrow function
//       console.log(this.name + ' city ' + city)
//     });
//   }
// }
// user.print();

const user = {
  name: 'Paw',
  cities: ['Berlin', 'Dublin', 'Londek'],
  print() {
    return this.cities.map((city) => this.name + ' city ' + city);
  }
}
console.log(user.print());
