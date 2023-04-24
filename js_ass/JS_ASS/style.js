document.querySelector("h2").style.color = "red";
document.querySelector("h2").style.textAlign = "center";

let resim = document.querySelector(".resim");


let ses=document.querySelector('.ses')

//! Ara butonu tiklandiginda ses calsin

document.querySelector('.ara').onclick=()=>{
    resim.src='./assets/img.gif'
     ses.play()
     ses.volume=0.1
}

//! baglat butonu tiklandiginda resim degissin

document.querySelector('.baglat').onclick=()=>{
    resim.src='./assets/birds.gif'
    ses.pause()

}

//! konus butonu tiklandiginda..

document.querySelector('.konus').onclick=()=>{
    resim.src='./assets/bird.gif'
    ses.pause()
}


//! mouse ile uzerine gelince

resim.addEventListener('mouseover',()=>{
    resim.src='./assets/aslan1.jpeg'
})

resim.addEventListener('mouseout',()=>{
resim.src='./assets/aslan2.jpeg'
})

