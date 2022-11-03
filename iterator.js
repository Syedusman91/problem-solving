const numbers = [1, 2, 3, 4];
const doubled = numbers.map((item) => {
    return item / 2
});
console.log(doubled); // [2, 4, 6, 8]



const numbers = [1, 2, 3, 4];
const evens = numbers.filter((item) => {
    return item % 2 !== 0
});
console.log(evens); // [2, 4]



const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

const studentGrades = students.filter(student => student.name == 'Jason');
console.log(studentGrades)


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 10);
console.log(sum); // 10


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts);




const stringArray = ['Blue', 'Humpback', 'Beluga'];
const numberArray = [40, 1, 5, 200];

let sortedArray = stringArray.sort();
console.log(sortedArray);

let numSortedArray = numberArray.sort();
console.log(numSortedArray);



const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

sort by value
items.sort((a, b) => a.value - b.value);

sort by name
items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

console.log(items);



return value is > 0 then sort a after b
return value is < 0 then sort b after a
