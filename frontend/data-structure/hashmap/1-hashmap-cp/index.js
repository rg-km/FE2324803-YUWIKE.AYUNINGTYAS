function ageDistribution(persons) {
  let result = new Map();
  const ageDistribution = groupByAge(persons);
  for (let [key, value] of ageDistribution) {
    result.set(key, value.length);
  }
  // TODO: answer here
  return result;
}

function groupByAge(persons) {
  let result = new Map();
  // TODO: answer here
  for (let person of persons) {
    let age = person.age;
    if (result.has(age)) {
      result.set(age, [...result.get(age), person]);
    } else {
      result.set(age, [person]);
    }
  }
  return result;
}

let people = [
  { name: "Bob", age: 21 },
  { name: "Sam", age: 28 },
  { name: "Ann", age: 21 },
  { name: "Joe", age: 22 },
  { name: "Ben", age: 28 },
];

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
  ageDistribution,
  groupByAge,
};
