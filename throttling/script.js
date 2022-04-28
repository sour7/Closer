const throttle=(func, limit)=>{
    let flag= true;
    return function(...args){
        if(flag){
            func.call(this,...args)
            flag=false;
           setTimeout(()=>{
               flag= true
           }, limit)
        }
       
    }
}

// throttle for input-box

let myInput= document.getElementById('search-box')

function searchfun(el){
     console.log("Searching your res. in interval of 1 sec:",el.target.value)
}
let ans = throttle(searchfun, 1000)

myInput.addEventListener('input',ans)



// throttle for button
let myBtn=document.getElementById('btn');
let res=()=>{
   console.log("throttle button clicked instantly for first time then after the interval of 5 sec")
}
let btnRes= throttle(res,2000)
myBtn.addEventListener('click', btnRes)

