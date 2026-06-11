console.log("HELLO EVERYONE")
const a = 10;
console.log(a)
const b = "string";
console.log(b)
const arr = [1,2.1,"interesting",true]
console.log(arr)
arr[1]=3.2
console.log(arr[1])
arr.push(4)
console.log(arr)
arr.pop(arr)
console.log(arr)

function example(){
    console.log(" I AM LEARNING FULLSTACK")
}
const first = document.getElementById("ptag")
first.innerHTML ="paragraph"

const input = document.getElementById("input")
const output = document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const ptag = document.createElement("h1")
ptag.textContent = " some text"
document.body.appendChild(ptag)
ptag.remove()