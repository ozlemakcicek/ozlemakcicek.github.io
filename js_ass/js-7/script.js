
//! Fetch()
// const veriGetir=()=>{
//     fetch("./tv-shows.json")
//     .then((res)=>{
//         if(!res.ok){
//             throw new Error("URL de hata var")
//         }
//         return res.json()
    
//     }).then((veri)=>ekranaBastir(veri))
    


// }
// veriGetir()


// const ekranaBastir=(veri)=>{
//     veri.forEach((eleman) => {
//         document.querySelector('.tvShowList').innerHTML += `
//     <div class="col-md-3"> 
//  <div class="card" >
//    <img src=${eleman.show.image.medium} class="card-img-top">
//    <div class="card-body">
//      <h5 class="card-title">${eleman.show.name}</h5> 
//       <a class= "btn btn-success"  href=${eleman.show.url}>Detaylar</a>
//      <p> </p>
//    </div>
//  </div>
//  </div> `;
        

//     });
// }





//!Async-await

const veriGetir = async () => {
  try {
    const response = await fetch("./tv-shows.json");

    if (!response.ok) {
      throw new Error(`url de hata var ${response.status}`);
    }
    const veri=await response.json();

    ekranaBastir(veri);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("her durumda calis");
  }
};

veriGetir();

const ekranaBastir = (data) => {
  data.forEach((eleman) => {
    document.querySelector('.tvShowList').innerHTML += `<div class="col-md-3"> 
 <div class="card" >
   <img src=${eleman.show.image.medium} class="card-img-top">
   <div class="card-body">
     <h5 class="card-title">${eleman.show.name}</h5> 
      <a class= "btn btn-success"  href=${eleman.show.url}>Detaylar</a>
     <p> </p>
   </div>
 </div>
 </div> `;
  });
};
