let a = document.getElementsByTagName("td")[0];
let b = document.getElementsByTagName("td")[1];
let c = document.getElementsByTagName("td")[2];
let d = document.getElementsByTagName("td")[3];
let e = document.getElementsByTagName("td")[4];
let f = document.getElementsByTagName("td")[5];

function color() {
    let enteredColor = prompt("Enter a Color").toLowerCase();
    if (enteredColor == "blue") {
        a.style.backgroundColor = "blue";
        a.style.color = "white";
        a.style.boxShadow = '2px 5px 5px 5px black'
    } 
    else if (enteredColor == "green") {
        b.style.backgroundColor = "green";
        b.style.color = "white";
        b.style.boxShadow = '2px 5px 5px 5px black'
    } 
    else if (enteredColor === "orange") {
        c.style.backgroundColor = "orange";
        c.innerText = "Orange";
    } else if (enteredColor === "yellow") {
        d.style.backgroundColor = "yellow";
        d.innerText = "Yellow";
    } else if (enteredColor === "red") {
        e.style.backgroundColor = "red";
        e.innerText = "Red";
    } else if (enteredColor === "black") {
        f.style.backgroundColor = "black";
        f.style.color = "white"
    } else {
        alert("Invalid color entered. Please enter one of the specified colors.");
    }

// ! Using switch case
    // switch(enteredColor){
    //     case ("blue"):
    //         a.style.backgroundColor = "blue";
    //         a.innerText = "Blue";
    //     break;
    //     case ('green'):
    //         b.style.backgroundColor = "green";
    //         b.innerText = 'Green';
    //     break;
    //     case('orange'):
    //         c.style.backgroundColor = "orange";
    //         c.innerText = "Orange";
    //     break;
    //     case('yellow'):
    //         d.style.backgroundColor = "yellow";
    //         c.innerText = "Yellow";
    //     break;
    // }
}
