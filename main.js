let submit = document.getElementById("submit")
let info = {
    "vidya":"123"
}
function validateForm(){
    let uname = document.getElementById("uname").value
    let pwd = document.getElementById("pwd").value
    console.log(`Username :: ${uname}`)
    console.log(`Password :: ${pwd}`)
    for (const [key, value] of Object.entries(info)) {
        console.log(key + value)
        if(key == uname && value == pwd){
            window.location = "main.html"
        } else {
            console.log("failed")
        }
    }
}
// const test = {a: 1, b: 2, c: 3};
submit.addEventListener("click", validateForm)