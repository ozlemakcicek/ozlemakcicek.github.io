//! 1.Aufgabe

// const note= +prompt("Notunuzu giriniz..:")

// let score=0;
// if(note>0 && note<=25){
// console.log("note=FF");}
//  else if(note>25 && note<=45){
//  console.log("note=DD");}
//  else if(note>65 && note<=75){
//  console.log("note=CC");}
//   else if(note>75 && note<=90){
//  console.log("note=BA");}
//   else if(note>90 && note<=100){
//  console.log("note=AA");}
//  else{
//     alert("hatali giris")
//  }



//! 2.Aufgabe

// const month=prompt("ay ismi giriniz..:");


// switch (month) {
//     case 'Januar':
//        console.log('1');
//    break;     

//         case 'Februar':
//   console.log('2');

//   break;       
//   case 'March':
//    console.log('3');
//  break;
//         case 'April':
//     console.log('4');
//  break;
//         case 'Mai':
//  console.log('5');
//  break;
//         case 'June':
//    console.log('6');
//  break;
//         case 'July':
//    console.log('7');
//  break;
//         case 'August':
//     console.log('8');
//  break;
//         case 'September':
//      console.log('9');
//  break;
//         case 'October':
//     console.log('10');
//  break;
//         case 'November':
//      console.log('11');
//  break;
//         case 'Dezember':
// console.log('12');

        
//         break;

//     default:
//         console.log("tanimlanmis degil");
//         break;
// }


 //! 3.Aufgabe


//  const num1= +prompt("1.sayiyi giriniz lutfen..:")
//  const num2= +prompt("2. sayiyi giriniz lutfen..:")
//  const num3= +prompt("3. sayiyi giriniz lutfen..:")
//  const islem= prompt("+,* islemlerinden birini seciniz lutfen..:")


//  let sonuc=0;
//  if(num1>num2 && num1>num3){
//  console.log("max.num is num1");}

// else if(num2>num1 && num2>num3){
// console.log("max.num is num2");}

// else { alert("max.num is num3")
// }

//  if(num1<num2 && num1<num3){
//  console.log("min.num is num1");}

// else if(num2<num1 && num2<num3){
// console.log("min.num is num2");}

// else { alert("min.num is num3")

// }


//  if(islem == "+"){
//  sonuc=num1+num2+num3;}

//  else if(islem == "*"){
//  sonuc=num1*num2*num3;}

//  else{
//     alert("hatali giris")
//  }
// console.log(sonuc);



//! 4.Aufgabe

// const num= +prompt("sayi giriniz lutfen..:")
// num%2 == 0? console.log('cift'): console.log('tek');
 
 
//************************************************** */

//! 2.Part 1 Aufgabe
// let devam;
// let nott;
// let nottAdet=0;
// let toplam=0;
// do {
//     nott=+prompt('notunuzu giriniz')
// devam=prompt('devam etmek istiyorsaniz e/E giriniz')
// nottAdet++
// toplam+= nott
// } while (devam.toUpperCase ()!='Q');

// console.log('ortalama..:',toplam/nottAdet);


       

// //! 2.Aufgabe

// let rastgele=Math.ceil(Math.random()*20)
// let hak=5;
// while (hak>0){
//     const tahmin=+prompt('bir sayi tahmin ediniz')
//     hak--;
// if (tahmin==rastgele) {

//          console.log('tebrikler bildiniz');
//       oyun2=prompt('devam etmek istiyormusunuz?E/H')

//  if(oyun2.toUpperCase()=='E'){
//     let rastgele = Math.ceil(Math.random() * 20);
//     let hak = 5;
//  }else{break}



// }else if(tahmin<rastgele){
//     console.log('Arttir');
//     console.log(hak,'hakkiniz kaldi');
// }
// else{
//     console.log('Azalt');
//     console.log(hak,'hakkiniz kaldi');
// }
// if(hak==0){
//     console.log('oyun bitti');
//     oyun3=prompt('devam etmek istiyormusunuz?E/H')
//     if(oyun3.toUppercase()=='E'){
//         let rastgele = Math.ceil(Math.random() * 20);
//         let hak = 5;
//     }else{break}
// }
// }









//************************************************* */

//! 3.Part 1.Aufgabe

// function ucgenAlan(taban,yukseklik) {
//     let alan =(taban*yukseklik)/2;
//     return alan;
// }

// let hesap=ucgenAlan(2,4);
// console.log(hesap);

// //?aynisini birde arrow yontemi ile yapalim
// const ucgenAlan=(taban,yukseklik)=> (taban*yukseklik)/2;
// let hesap1= ucgenAlan(2,4);
// console.log(hesap1);


// //!2.Aufgabe

// const kareAl=(kenar)=>kenar*kenar;
// const kupAl=(kenar)=>kenar*kenar*kenar;
// const usAl=(taban,us)=>taban**us

// let kareAlani=kareAl(3);
// console.log(kareAlani);

// let kupAlani=kupAl(4);
// console.log(kupAlani);

// let usSonuc=usAl(2,3);
// console.log(usSonuc);

// //! 3.Aufgabe
// const artikYil=function(year){
//     return(year%4 ===0 && year%100 !==0 || year%400 ===0);
// }
// console.log(artikYil(1800));




//!! 4.PART 1.Aufgabe


//?? fiyatlar dizisinde her bir fiyata 10% zam yapalim.ForEach kullanilmali ve kalici degisiklik yapilmali

// const fiyatlar=[100,250,50,89];


// fiyatlar.forEach((f,i)=>

// {
  
//   fiyatlar[i]+=f*1.1
// });
// console.log(fiyatlar);


//! 2.Aufgabe

//?? fiyatlar dizisindeki fiyati 90 dan buyuk olan degerleri consola tek tek yazdiriniz

// const fiyatlar2 = [100, 250, 50, 89];

// const buyukOlanlar=fiyatlar2.filter((x)=>
// x>90)
//  console.log(buyukOlanlar);

 //! 3.Aufgabe
 
 //?? fiyatlar dizisindeki fiyati 110 dan kucuk olan degerlere 10% artis yapin ve bu degerleri konsola tek tek bastiriniz

//  const fiyatlar3 = [100, 250, 50, 89];
//  fiyatlar3
//  .filter((x)=>x<110)
//  .map((y)=>y*1.1)
//  .forEach((z)=>
//  console.log(z.toFixed(2)))


 //! 4.Aufgabe

 //?? maaslar dizisinde 4000 den dusuk olan maaslara 50% zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

//  const maaslar=[3000,5000,4000,6000,6500];
//  const zamliMaas= maaslar.filter((d)=>d<4000)
//  .map((d)=>d*1.5)



//  console.log(zamliMaas);


 //! 5.Aufgabe

 //?? Maasi 4000 den buyuk olanlara 25% zam yaparak sonuclari consol dayazdiralim

//  const maaslar2 = [3000, 5000, 4000, 6000, 6500];
//  const zammM=maaslar.filter((d)=>d>4000)
//  .map((d)=>d*1.25)


//  console.log(zammM);
 

//*************************************************** */

