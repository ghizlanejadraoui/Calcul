let mynumbers= document.querySelectorAll(`.numbers`)
let myoperators= document.querySelectorAll(`.operators`)
let myinput = document.querySelector(`input`)
let myresault = document.querySelector(`.resault`)
let myAC = document.querySelector(`.Ac`)
let myDelete = document.querySelector(`.delete`)
// * my numbers
mynumbers.forEach(element => {
    element.addEventListener(`click`, ()=>{
        if (element.textContent == `.` && myinput.value.includes(`.`))return
        myinput.value += element.textContent
})
});
// * my operators
myoperators.forEach(element => {
    element.addEventListener(`click`,()=>{
        if(myinput.value.slice(length-1)== `+` || myinput.value.slice(length-1)== `-` || myinput.value.slice(length-1)== `*` || myinput.value.slice(length-1)== `/` )return
        myinput.value += element.textContent
    })
});
// * resault
myresault.addEventListener(`click`,()=>{
    myinput.value = eval(myinput.value)
})
// * my Ac
myAC.addEventListener(`click`,()=>{
    myinput.value=""
})
// * my delete
myDelete.addEventListener(`click`,()=>{
   myinput.value = myinput.value.slice(0,length-1)
})
// * night mode
let mybody= document.querySelector(`body`)
let changemode = document.querySelector(`.changemode`)

const mode = () => {
    mybody.classList.toggle("mode")
    if (mybody.classList.contains("mode")) {
        mybody.style.backgroundColor =`yellow`
    } else {
        mybody.style.backgroundColor =`orange`
    }
}

changemode.addEventListener("click", mode)