const person = {
    name:'kirill',
    age:22,
    isprogrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3 )]: 'Computed key',
    greet (){
        console.log("greet from person")
    },
    info (){
        console.info('imia 4eloveka:', this.name)
    }
}
// console.log(person.name)
// console.log(person)
// person.greet()
// person.age++
// console.log(person)
//person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// const{name, age} = person
// console.log(name, age)

// console.log(person)
// for (let key in person){
//     console.log(key)
//     console.log(person[key])
// }

// const keyss = Object.keys(person)
// console.log(keyss)

// person.info()

const logger = {
    keys(obj){
        console.log('object keys:', Object.keys(this))
    }
    keysandval (){
        Object.keys(this).forEach( key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }
}

// const bound = logger.keys.bind(person)
// bound()
//
// logger.keys.call(person)




















