let btn = document.getElementById("btn");


window.onscroll = function(){
    if (window.scrollY >= 500) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}




let mainPhoto = document.getElementById("main-photo");
let imgs = document.querySelectorAll(".imgs img");

// for (i = 0; i <= imgs.length; i++) {
//     imgs[i].onclick = function(){
//         mainPhoto.src = this.src
//     }
// }

function img(src){
    mainPhoto.src = src;
}

function color(col){
    document.body.style.background = col;
}