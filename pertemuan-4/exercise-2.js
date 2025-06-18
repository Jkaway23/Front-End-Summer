//Array Exercise

let people = ["Greg", "Mary", "Devon", "James"];

//1. for-loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2. forEach()

people.forEach(function (item) {
  console.log(item);
});

//3. Remove Greg

people.shift();
console.log(people);

//4. Remove James

people.pop();
console.log(people);

//5. add Matt

people.unshift("Matt");
console.log(people);

//6. add namaSaya

people.push("Jonathan");
console.log(people);

//7. using for-loop

for (let a = 0; a < people.length; a++) {
  console.log(people[a]);
  if (people[a] == "Mary") {
    break;
  }
}

//8. slice

let output = people.slice(2, 4);
console.log(output);

//9. splice

people.splice(2, 2);
people.splice(2, 2, "Elizabeth", "Artie");
people.push("Jonathan");
console.log(people);

//10. withBob

let withBob = people.concat("Bob");
console.log(withBob);

//Object Exercise

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//11. Tambahkan 'Go'

programming.languages.push("Go");
console.log(programming);

//12. Bracket Notation

programming["difficulty"] = 7;
console.log(programming);

//13. Delete Jokes

delete programming.jokes;
console.log(programming);

//14. add with dot notation

programming.isFun = true;
console.log(programming);

//15. map()

let Output = programming.languages.map(function (item, index) {
  return index + " - " + item;
});

console.log(Output);
