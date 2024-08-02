let a = document.getElementsByTagName("button")
let b = document.getElementsByTagName("body")

function off(){
    let onOff = a[0].classList.toggle("switch");
    onOff ? a[0].innerText = "ON" : a[0].innerText = "OFF"
}
function dayNight(){
    let dayNight = a[1].classList.toggle("day");

    //! Using ternary operator
    dayNight ? (a[1].innerHTML = "NIGHT") (document.body.style.cssText = `background: black; color:white`) 
    : (a[1].innerHTML = "DAY") (document.body.style.cssText = `background: white; color:black`)
    
    //! using (if else) condition
    // if(dayNight){
    //     a[1].innerHTML = "NIGHT"
    //     document.body.style.cssText = `background: black;
    //                                     color:white`
    // }
    // else{
    //     a[1].innerHTML = "DAY"
    //     document.body.style.cssText = `background: White`
    // }   
}

