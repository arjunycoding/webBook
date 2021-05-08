let badge1 = $("#badge1");
let unlock = $("#unlock");
let proflieBtn = $("#proflieBtn");
let proflie = $("#porfile");
let page = $("#page");
let homeBtn = $("#homeBtn");
let save = $("#save")
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
function saveProfilePic(){
    localStorage.setItem("profilePicture", proflieBtn.html())
}
function addProfilePic(){
    if(typeof(localStorage.getItem("profilePicture")) == 'string'){
        proflieBtn.html(localStorage.getItem("profilePicture"))
    } else {
        proflieBtn.html("<img src = 'images/profile.png'/>");
    }
}
unlock.on("click", showBadge)
proflieBtn.on("click", showProflie)
homeBtn.on("click", showHome)

let porfilePictures = []
console.log(porfilePictures)
for(let i = 0; i < 7; i++){
    porfilePictures.push(`#avatar${i}`)
    console.log(porfilePictures)
}
porfilePictures.shift()
for(let i = 0; i < 7; i++){
    $(porfilePictures[i]).on("click", function(){
        let image = $(this);
        proflieBtn.html('<img src="'+ image.attr("src") +'" width="50"></br> Porfile');
        console.log(image)
  });
}
save.on("click", saveProfilePic)
addProfilePic()