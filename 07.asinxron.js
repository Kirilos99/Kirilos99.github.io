// event loop

// const timeout = setTimeout(() =>
// {
//     console.log('afkafkk')
//
// }, 2500)

// const timeout = setInterval(() =>
// {
//     console.log('afkafkk')
//
// }, 1000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait )
// }
// delay (() => {
//     console.log('after 2 second')
// }, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise( (resolve, reject) => {


    setTimeout( () => {
        reject('sometimes wrong')
    },wait)
})
    return promise
}

// delay (2500 )
//     .then( () => {
//         console.log("after 2 sec")
// })
//     .catch( err => console.error('Error:', err))
//     .finally(() => console.log("finally"))

const getdata = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 4 , 8, 13
]))
getdata().then(data => console.log(data))

async function asyncex (){
   try {
       await delay(3000)
       const data = await getdata()
       console.log("data:", data)
   }   catch(e) {
       console.log(e)
   }
}
asyncex ()