//
//
// const person = new Object({
//         name: 'Kiril',
//         age: 22,
//         greet: function () {
//             console.log('greet!')
//         }
// })
//
// Object.prototype.sayhello = function() {
//     console.log('hello!')
// }
// const lena = Object.create(person)
// lena.name ='elena'
//

function hello() {
    console.log('hello', this)
}

const person = {
    name: 'Kiril',
    age: 22,
    sayhello: hello,
    sayhellowindow: hello.bind(window),
    logInfo: function () {
        console.log('name is $(this.name}')
    }
}






