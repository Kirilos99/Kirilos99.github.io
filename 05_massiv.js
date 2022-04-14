const cars = ['mazda', 'ford', 'bmw', 'mecrdez']
// const people = [
//     {name: "kirill", budget: 4200},
//     {name: "vika", budget: 3250},
//     {name: "danil", budget: 6784}
// ]
const fib = [1, 2, 3, 4, 5, 6, 8, 13]


// cars.push('lada')
// cars.unshift("reno")
//
// const firstit = cars.shift()
// const lastit = cars.pop()
// console.log(firstit)
// console.log(lastit)
// console.log(cars)
// console.log(cars.reverse())

//const index = cars.indexOf("bmw")
// let findpeerson
// for (const person of people){
//     if(person.budget === 3250){
//         findpeerson = person
//     }
// }
// console.log(findpeerson)

// const index = people.findIndex(function (person){
//     return person.budget === 3250
// })
// const person = people.find(person => person.budget === 6784)
// console.log(person)

// console.log(cars.includes("bmw!"))
//
// const uppercar = cars.map(car => {
//     return car.toUpperCase()
// })
// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// const powfib = fib.map(pow2)
//  console.log(powfib)
// console.log(uppercar)
// console.log(cars)
// const pow2 = num => num ** 2
// const powfib = fib.map(pow2)
// const filter = powfib.filter(num => {
//     return num >60
// })
// console.log(filter)



// задачаа 1 split
// const text = 'privet,gg wp are you losers'
// const rtext = text.split('').reverse().join('')
// console.log(rtext)


const people = [
    {name: "kirill", budget: 4200},
    {name: "vika", budget: 3250},
    {name: "danil", budget: 6784}
]
const allbudget = people
    .filter(person => person.budget >4000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
},0)
console.log(allbudget)










