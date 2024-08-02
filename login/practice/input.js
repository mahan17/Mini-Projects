function fullName(event){
    let fname = document.getElementsByName('fnm')[0].value

    let lname = document.getElementsByName('lnm')[0].value
    let fulName = document.getElementsByClassName('result')[0]

    fulName.innerText = `Full Name is ${fname} ${lname}`
    event.preventDefault()
}