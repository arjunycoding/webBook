let badge1 = $("#badge1");
let unlock = $("#unlock");
let proflieBtn = $("#proflieBtn");
let proflie = $("#porfile");
let page = $("#page");
let homeBtn = $("#homeBtn");
proflie.hide()
badge1.hide()
function showBadge(){
    badge1.show()
    unlock.hide()
}
function showProflie(){
    proflie.show()
    page.hide()
}
function showHome(){
    proflie.hide()
    page.show()
}
unlock.on("click", showBadge)
proflieBtn.on("click", showProflie)
homeBtn.on("click", showHome)