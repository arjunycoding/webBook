let submit = $("#submit")
let error = $(".error")
error.hide()
let info = {
    "vidya" : "123",
    "yuvaraj" : "456",
    "adhithya" : "readMe123",
    "arjun" : "101112"
}
function storeLgin(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    localStorage.setItem('username', uname);
    localStorage.setItem('passowrd', pwd);
}
function autoFillLogin(){
    let uname = $("#uname")
    let pwd = $("#pwd")
    uname.val(localStorage.getItem('username'))
    pwd.val(localStorage.getItem('passowrd'))
}
autoFillLogin()
function validateForm(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    console.log(`Username :: ${uname}`)
    console.log(`Password :: ${pwd}`)
    for (const [key, value] of Object.entries(info)) {
        console.log(key + value)
        if(key == uname && value == pwd){
            storeLgin()
            console.log('Sucsees')
            window.location = "webBook.html"
            break
        } else {
            error.show()
    }
    }
}
function autoSubmit(){
    let uname = $("#uname").val()
let pwd = $("#pwd").val()
    if(uname == localStorage.getItem('username') && pwd == localStorage.getItem('passowrd')){
        validateForm()
    } else {
        return
    }
}
autoSubmit()
// let uname = $("#uname").val()
// let pwd = $("#pwd").val()
// // console.log(uname == localStorage.getItem('username') && pwd == localStorage.getItem('passowrd'))
// console.log(`LOCAL SOTRAGE :: username == ${localStorage.getItem('username')}|| password == ${localStorage.getItem('passowrd')}`)
// console.log(uname + pwd )
submit.on("click", validateForm)