const findTheOldest = function (people) {
  ageList = people.map((person) =>
    person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth
  );
  let maxAge = Math.max(...ageList);
  return people[ageList.findIndex((age) => age == maxAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
