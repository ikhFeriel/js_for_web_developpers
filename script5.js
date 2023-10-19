console.log("( Exo 5 )");

function countPeopleByCity(people) {
  const result = people.reduce((cityCount, person) => {
    cityCount[person.city] = (cityCount[person.city] || 0) + 1;
    return cityCount;
  }, {});

  return result;
}

const peopleArray = [
  { name: "me", age: 29, city: "Palm beach" },
  { name: "lakhder", age: 49, city: "Hydra" },
  { name: "saliha", age: 53, city: "Palm beach" },
  { name: "zoubida", age: 61, city: "Hydra" },
  { name: "lazreg", age: 72, city: "Hydra" },
];

const cityCounts = countPeopleByCity(peopleArray);
console.log(peopleArray);
console.log(cityCounts);
