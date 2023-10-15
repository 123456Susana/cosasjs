const f=([a,b]=[1,2], {x:c}={x:a+b})=>a+b+c;

console.log(f())

saludar1()
function saludar1(){console.log("holibi")}


const saludar=function(){console.log("holis")}
saludar()

const saludar2=() => {console.log("holis")}
saludar()

const mayuscula=(nombre)=>{ nombre=nombre.toUpperCase() 
    return nombre}
let nombre=mayuscula("susana")
console.log(nombre)

function saludar3(nombre){console.log("hi soy "+ nombre)}
saludar3("susana")
saludar3("estiven")

