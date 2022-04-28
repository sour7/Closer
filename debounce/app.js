function debounce(func,delay){
    let timer
    return function(...args){
    clearTimeout(timer)
     timer= setTimeout(()=>{
        func.call(this,...args);
        }, delay)
        
    }

}

// for search box
let myInput= document.getElementById("input-event");

function result(e){
    console.log("Result is", e.target.value)
}
let ans= debounce(result, 300)

myInput.addEventListener("input",ans)

// for button

let mybtn= document.getElementById('btn')
function clickMe(e){
    console.log("button clicked")
}
let btnRes=debounce(clickMe,300)

mybtn.addEventListener('click', btnRes)