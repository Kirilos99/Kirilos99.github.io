const heading = document.getElementById('hello')
//const heading2 =document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('h2') /// vsegda 1 elemnt
const heading3 = heading2.nextElementSibling
console.log(heading3)

// console.dir(heading.textContent)
//krsivie цвета по времени
setTimeout( ()=>{
    addstyle (heading, "javasrcipt top")
},1500)

setTimeout( ()=>{
    addstyle (heading3.children[0], "timofee loh ", 'yellow')
},3000)

setTimeout( ()=>{
    addstyle (heading2, 'stas toje', 'blue', '2rem')
},4500)

function addstyle(node,text,color = 'red', fontsize){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if(fontsize) {
        node.style.fontsize = fontsize
    }
}

heading.onclick = () => {
    if(heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    }   else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}
heading2.addEventListener('dblclick',() => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
    }
})

