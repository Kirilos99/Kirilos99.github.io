//const fname = 'kirill'
//const lname = 'nikolaev'
//const age = 22
//console.log('name people:' +fname +' ,how old:' + age )//
// alert('name people:' +fname +' ,how old:' + age ) //


// const lastname = prompt ("add family" )
 // alert (fname +  ' '  + lastname )
//const a = 14
//let c = 32
//c = c+a
//console.log(c)

// const isyou = true
// const name = 'kiril'
// const rage = 22
// let x
// null
// console.log(typeof isyou )
// console.log(typeof name )
// console.log(typeof rage )
// console.log(typeof x )
// console.log(typeof null)


//const fullage = 21
//const byear = 1999
//const cyear = 2021

//const isfullage = cyear - byear >= fullage
//console.log(isfullage)


//const cstatus = 'ready'
//if (cstatus === 'ready')
//{
//  console.log(' crossues gotov')
//}
//else if (cstatus === 'pending')
//{
//    console.log(' crossues deatelc9')
//}

//const num1 = 42
//const num2 = '42'
//console.log(num1 === num2)

//const isgot = false
//if (isgot) {
//   console.log('okay')
//}else {
//    console.log('not okay ')
//}
//isgot ? alert('okay') : alert('not okay ')

//function calc(year){
  //  return 2021 - year
//}
//const myage = calc(1999)
//console.log(myage)

//function iabout (name, year) {
//   const age = calc(year)
//    if (age > 0 ) {
//        console.log('ima 4eloveka ' + name + ' ego vozrast ' + age)
//    } else {
//        console.log('eto bydeewee')
//    }
// }
// iabout('kiril', 1998)
// iabout('riki', 2022)

// const cars = ['mazda', 'bmw', 'audi']
// const cars = new Array('mazda', 'bmw', 'audi')
//console.log(cars.length)
//console.log(cars[1])
//cars[0] = 'porsh'
//cars[cars.length] = 'mazda'
//console.log(cars)

//const cars = ['mazda', 'bmw', 'audi']
//for(let i = 0; i < cars.length; i++) {
//    const car = cars[i]
//    console.log(car)
//}
//for (let car of cars) {
//    console.log(car)

//}

const person = {
    name:'kirill',
    family:'nikki',
    year: 1999,
    languages:['ru','en','de'],
    wife:false,
    greet: function (){
        console.log('greet')
    }
}
console.log(person.name)
const key = 'languages'
console.log(person[key])
person.wife = true
console.log(person)















