// const name = "kirill"
// const age = 22
// function getage() {
//     return age
// }
// const outp = 'provet my nick ' + name + ' my vozrast ' + age + ' let.'
// const outp = `provet my nick ${name} and my vozrast ${getage()} let `
// console.log(outp)

// const outp = `
//  <div> this is div </div>
//  <p>this is o </p>
// `
// console.log(outp)

// const name = "kirill"
// console.log(name.toUpperCase())
// console.log(name.toLocaleLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('h'))
// console.log(name.startsWith('k'))
// console.log(name.endsWith('ill'))
// console.log(name.repeat(3))
// const strong = '      riki       '
// console.log(strong.trim())
// console.log(strong.trimLeft())
// console.log(strong.trimRight())

function logperson(s, name, age) {
    if (age < 0){
        age = "not born"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`

}
const pname = "Kirill"
const page = 22
const pname2 = "maxim"
const page2 = -23
const output = logperson` uma: ${pname}, vozrast: ${page} !`
const output2 = logperson` uma: ${pname2}, vozrast: ${page2} !`

console.log(output)
console.log(output2)