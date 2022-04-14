// function  greet(name) {
//     console.log('privet - ', name )
// }
//
// const greet2 = function greet2(name) {
//     console.log('privet2 - ', name )
//
// }

// greet ('lena')
// greet2( "riki")

//console.log(typeof greet)
//console.dir(greet)

//анонмные фнукции бесконкчное сложение
// let counter = 0
// setInterval(function (){
//     console.log(++counter)
// }, 500)

// 3 стрелочные фнукции
// function  greet(name) {
//     console.log('privet - ', name)
// }
//
// const arrow = (name) =>{
//     console.log('privet - ', name)
// }
//
// const arrow2 = name =>  console.log('privet - ', name)
// arrow('kiril')
// arrow2('kiril')
//
// const pow2 = num => num **2
// console.log(pow2( 5 ))

// 4 параметры по умолчанию
// const sum = (a, b=a*22) => a + b
//
// console.log(sum(41))
// console.log(sum(43))
//
// function sumall(...all) {
//     console.log(all)
// }
// sumall(1 ,2, 3, 4, 5)
//
// function sumall(...all) {
//     let result = 0
//     for(let num of all){
//         result += num
//     }
//     return result
// }
// const res = sumall(1 ,2, 3, 4, 5)
// console.log(res)

// 5 замыкание
// function creatmember(name){
//     return function (lastname){
//         console.log(name + lastname)
//     }
// }
// const logwithname = creatmember("kirill")
// console.log(logwithname('nikolaev'))
// console.log(logwithname('kuznetcov'))