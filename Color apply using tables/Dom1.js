// let x = document.getElementById("Header")
// x.innerText = 'Thala Ajith'
// x.style = 'color:red'
// let z = document.getElementsByTagName("nav")

function button(){
    let vennamane = document.getElementById("text")
    vennamane.innerText = 'Amukadhada nu sonna Kekriya?🤦‍♂️'
    vennamane.style.color ='red'
    button()
}

function image(){
    let press = document.getElementById("img")
    press.outerHTMLHTML = ` <img src="./Images/NAZRIYA.jpeg" alt="" height="400px" width="300px" id="img">`
}

function change(){
    let b = document.getElementsByClassName("box")
        b[0].innerText = "welcome"
        b[1].style.cssText = `background: red; color:yellow`
        b[1].innerText = 'Thala'
//         b[2].innerHTML = `<img src="./Images/Thala.jpg" alt="" height="200px" width="200px" id="img">`
    let image = document.querySelector('img')
    image.src = './Images/Thala.jpg'
}   
function dblchange(){
    let image = document.querySelector('img')
    image[2].src = './Images/NAZRIYA.jpeg'
}

function of() {
    let button = document.getElementById("on");
    if (button.innerHTML === "ON") {
        button.innerHTML = "OFF";
        button.style.backgroundColor = "red";
    } else {
        button.innerHTML = "ON";
        button.style.backgroundColor = "green";
    }

    let btn = document.getElementById("on")
    let res = btn.innerHTML
    (res === "ON") ? btn.innerHTML = "OFF" : btn.innerHTML = "ON" ;
}

// function clr(){
//     let c = document.getElementsByClassName("body")
//     c[0].style.cssText = `background: ${prompt("Enter the Color")};`

// }

// let btn = document.getElementsByTagName('button')

// function onOff(){
//     let onOff = btn[0].classList.toggle('box')
//     onOff ? btn[0].innerText = "ON" : btn[0].innerText = "OFF"
// }