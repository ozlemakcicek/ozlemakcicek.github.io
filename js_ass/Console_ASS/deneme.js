//* ekrana 10 kere MERHABA yazdiran program

// for (let i = 1; i < 11; i++) {
//   console.log(i, "MERHABA");
// }

//* 1den N e kadar olan sayilarin toplami
//* N ne peki? ya isteyecegiz ya da belirtecegiz.
//?prompt ile istedigimiz sayilari const ile degiskene atariz

// const N = +prompt("Bir N i giriniz..");
// let toplam = 0;
// for (let i = 1; i <= N; i++) {
//   toplam = toplam + i;
//   toplam += i;
//   console.log(toplam); // icerde yazsaydik her defasinda toplayip yazacakti.dongunun icinde cunku.disarda sadece toplami verir
// }
// console.log(toplam);

//* Disaridan girilen sayinin Asal olup olmadigini tesbit ederek sonucu yazdiran programi yazdiriniz.

//?asal sayilar 1 e ve sadece kendisine bolunebilen sayilardir.en kck asal sayi 2 dir.bir sayinin asal olup olmadigini anlamak icin kendisinden kucuk sayilara bolunup bolunmedigine bakariz.
//? mesela 7 icin 2,3,4,5,6 ya bolunuyormu diye bakariz.bolunurse asal degil

// const sayi = +prompt("bir sayi giriniz");
// let asal = true;

// for (let i = 2; i < sayi; i++) {
//   if (sayi % i == 0) {
//     //*if sartini verdikten sonra sonucu yazdirmak icin bir degiskene atamamiz lazim disarda.basepractise olarak true ya esitlenir.herkesin asal oldugunu varsayariz
//     asal = false;
//   }
// }
// console.log(asal == true ? "asaldir" : "asal degildir");

//*icerde console.log yazsaydik her dondugu sayida cevap yazardi.
//*true icin ==true demeye gerek yok aslinda .sadece asal yazsak da onu true olarak kabul eder.

//? 0-100 arasinda 7 adet rastgele tamsayi ureten kodu for dongusu ile yazniz

//random ile sayi tutmasi demek 0-1 arasi sayi demek .biz bunu 0-100 arasinda istedigi icin 100 ile carparak o araliktan tutmasini istiyoruz.ama yine de virgullu olur.o nedenle en yakin tam sayiya yuvarladiyecegiz round ile.

// for (let i = 0; i <=7 ; i++) {

//    const rastgele=  Math.round( Math.random()*100)
//    console.log(rastgele);

// }

//*While icin 1-100 arasinda bir sayi giriniz.aksi durumlarda error msj verip, tekrar sayi isteiyniz

//?while da yukarida istiyor sonra sarti koy.
//? bi disarda bi icerde istiyoruz.
//? do.. while da ise once yap sart olana kadar surekli iste

// let sayi= + prompt('bir sayi giriniz')

// while (sayi<1 || sayi>100) {

//     console.error('hatali giris')
//     sayi=+prompt('tekrar sayi giriniz')
// }
// console.log('tebrikler');

//* let ile istiyoruz sayiyi cunku icerde hata olunca tekrar isteyecegiz.const calismaz.
//* while da iceriye daha cok olumsuz durumu yaziyoruz

//??? Do-While    ?//

//? while sarti devam ettigi muddtce do nun icine tekrar girer.disari muhakkak tanimlama yapmaliyiz let ile.sarta bakmaksizin hemen ypiyor.en az bir kere yazdiriyor.do{} icinde yazdirir while() icinde

//*Do- While icin 1-100 arasinda bir sayi giriniz.aksi durumlarda alert msj verip, tekrar sayi isteiyniz

// let number;
// do{
//     number=+prompt('bir number giriniz')
// alert(number)
// }

// while(number<1 || number>100)

// console.log('donguden ciktiniz');

//?? kullanicida Vize ve Final notlarini isteyen ve vizenin 40% + finalin60% sini alarak gecme notunu
//? hesaplayan programi yaziniz.Program her hesaplamadan sonra tekrar baskasi icin hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not isteyecek ve islemleri tekrar edecektir

// let devam;
// do {
//     let vize=+prompt('Vize notunu giriniz..:')
//     let final=+prompt('Final notunu giriniz..:')

//     let gecmeNotu= vize*0.4 + final*0.6
//     console.log(gecmeNotu);
//     devam=promt('devam etmek istiyorsani e/E giriniz')

// } while (
//     devam.toUppercase=='E'
// );
// console.log('ciktik');

//*soruya cevabi e/E seklinde icin .toUppercase ile yapilir.neye donsun istersen onu yaziyorsun.
//* ne yaplmak isteniyorsa herseyi do icinde yaz.While da sarti yaz sadece.disina da yazdir diyoruz.
//* while do nun disinda o.i. do da tanimlanan degsikeni gostermez.o nedenle en yukarda bos tanimlayip do da sadece ismini orta mali yapiyoruz

//? klavyeden q karakteri girilene kadar sayi girisi yapan programi döngu kullanarak yaziniz.
//* 5 kere falan deseydi for kullanirdik

// let sayi1;
// do {
//      sayi1=prompt('bir sayi giriniz..:')

// } while (sayi1!='q');
// console.log('yanlis giris yapildi');

//?? Program 1-20 arasinda rastgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak)
//? de bilmesini istexecke.Her yanlista hakkini bir dusurecek ve ARTTIR/ AZALT diyerek kullaniciyi
//? yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa 'üzgünuz bilemediniz' eger bildi ise'tebrikler bildiniz yazacaktir

// const rastgele=Math.ceil( Math.random()*20)
// console.log(rastgele);
// // ne tuttugunu gorelim diye yazdirdik
// let hak=5;

// while (hak>0) {

//     const tahmin=+prompt('sayi tahmin ediniz')
//     hak--
// // her tahminde hakki bir dusurelim

//     if (tahmin==rastgele) {
//         console.log('Tebrikler bildiniz');
//         break;

//     } else if(tahmin>rastgele){

//         console.log('Azalt');
//         console.log(hak,'hakkiniz kaldi');
//     }

//      else {
//         console.log('Arttir');
//         console.log(hak,'hakkiniz kaldi');
//       }
//         if(hak==0){
//         console.log('oyunu kaybettiniz');}
//   }

// oyunu kaybettiniz ifadesinin her defasinda degilde sarta bagli yazmasi lazim
// o nedenle hak==0 olursa yazsin demeliyiz.Bunu icerde de disarda da yazablrz

//?? 3 kisinin yaslarinin ortalamasini veren programi declaration yontemi ile yaziniz
// function yasHesabi(ad, tarih) {

//    return 2023-tarih
// }

// const ozlem=yasHesabi('Ozlem',1983);
// const murat=yasHesabi('Murat',1980);
// const ihsaneren=yasHesabi('IhsanEren',2009);
// const esadeymen=yasHesabi('EsadEymen',2012);
// const mesudasim=yasHesabi('MesudAsim',2014);
// console.log('Benim ailemin yas ortalamasi..:',(ozlem+murat+ihsaneren+esadeymen+mesudasim)/5 );

//? dogum tarihini verip yasini hesaplayan programi yaz

// function yas(isim,tarih) {

//     console.log(`Benim ismim ${isim} ve ben ${2023-tarih} yasindayim`);
// }
// yas('ozlem',1983)

// //? tek cift sorgulamasi

// const kontrol=function(sayi) {
//     return sayi%2==0?'cift':'tek'
// }

// console.log(kontrol(5));// yada alert(kontrol(5)) yazarsin

//?  3 sayi arasindan en buyuk sayiyi bul

// let buyukBul = function (sayi1, sayi2, sayi3) {

//   let enbuyuk;
//     if (sayi1 > sayi2 && sayi1 > sayi3) {
//     enbuyuk = sayi1;
//   } else if (sayi2 > sayi1 && sayi2 > sayi3) {
//     enbuyuk = sayi2;
//   }else{
//     enbuyuk=sayi3
//   }
//   return enbuyuk
// };
// console.log(buyukBul(3, 5, 9));

//??? ic ice fonksiyonlar.ucgenin alani, cevresi ve us alma ile alakali fonksiyonlari ayni anda gorelim.

// uc fonksiyonu ayri ayri yazalim sonra da bu ucunu gerektigi zaman cagiran baska bir fonksiyon yazalim

// const alanBul = function (s1, s2) {
//   return s1 * s2;
// };

// const cevreBul = function (s1, s2) {
//   return (s1 + s2) * 2;
// };

// const usBul = function (s1, s2) {
//   return s1 ** s2;
// };

// const hesapla = function (secim, v1, v2) {
//   let sonuc;
//   if (secim == "alan") {
//     sonuc = alanBul(v1, v2);
//   } else if (secim == "cevre") {
//     sonuc = cevreBul(v1, v2);
//   } else if (secim == "us") {
//     sonuc = usBul(v1, v2);
//   }

//   return sonuc;
// };

// console.log("alanin sonucu..:", hesapla("alan", 3, 4));
// console.log("cevrenin sonucu..:", hesapla("cevre", 3, 4));
// console.log("us almanin sonucu..:", hesapla("us", 3, 4));

//?? 3ün kati mi diye kontrol et.Arrow yontemi ile

// const katMi=(x)=>x%3==0? '3un katidir':'3un kati degildir'

// console.log(katMi(23));

//?? yas hesaplama

// const yashesapla=(tarih)=>2023-tarih

// console.log(yashesapla(1983));

//? degisen yillara gore yas hesabi

// const yasHesabi=(tarih)=>new Date().getFullYear()-tarih

// console.log(yasHesabi(1983));
// console.log(new Date().getHours());

//? silindirin hacmini hesaplama

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(hacimHesapla(4, 5));

//? sirasi verilen FIBONACCI TERIMLERINI bulmak

// const fibonacciNumber = (n) => {
//   let fibosol = 1;
//   let fibosag = 1;
//   let yenifibo = 0;

//   for (let i = 1; i < n - 1; i++) {
//     yenifibo = fibosol + fibosag;
//     fibosol = fibosag;
//     fibosag = yenifibo;
//   }
//   return fibosag;
// };
// console.log(fibonacciNumber(7));

//? Fibonacci terimlerinin ilk 5 tanesinin toplamini dondur

// const fibonacciNumber2 = (n) => {
//   let fibosag = 1;
//   let fibosol = 1;
//   let yenifibo = 0;
//   let toplam = 2; // ilk 1 1 sayilmiyor 2 den basliyor toplamaya

//   for (let i = 1; i < n - 1; i++) {
//     yenifibo = fibosol + fibosag;
//     fibosol = fibosag;
//     fibosag = yenifibo;
//     toplam += fibosag;
//   }

//   return `fibosag:${fibosag} toplam:${toplam}`;
// };
// alert(fibonacciNumber2(5));

// //*ya da ayri ayri return ve consol.log da gostereblrz
// //*return yenifibo
// //* console.log(toplam)

//!ARRAY

//?? bir dizideki pozitif ve negatif sayilarin toplamini hesaplayan programi for dongusu ile yaziniz.topla adinda bir fonksiyonda hesaplamayi yapiniz

const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (dizi) => {
  let pozitifler = 0;
  let negatifler = 0;

  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < 0) {
      negatifler += dizi[i];
    } else {
      pozitifler += dizi[i];
    }
  }

  console.log(`Dizinin negatif sayilarinin toplami..:${negatifler}`);
  console.log(`Dizinin pozitif sayilarinin toplami..:${pozitifler}`);
};
topla(dizi);

//?? bir dizideki tum elemanlarin toplamini bulan programi for in ile yapiniz.

const dizi2 = [12, 3, -5, 64, -24, 52];
let toplam2 = 0;
let sonuc = 0;

for (let i in dizi2) {
  sonuc += dizi[i];
}
console.log(`Tum elemanlarin toplaminin sonucu..:${sonuc}`);

//?? Iki ayri dizideki eslesen indis elemanlari birlestirerek ayri bir diziye saklayan uygulamayi FOR IN ile yaziniz.

const isimler = ["Ali", "Veli", "Özlem", "Murat"];
const soyisimler = ["Kaya", "Ari", "Cal", "Akcicek"];

const birlestir = (x, y) => {
  let isimVeSoyisimler = [];

  for (let i in isimler) {
    isimVeSoyisimler[i] = `${x[i]} ${y[i]}`;
  }
  return isimVeSoyisimler;
};
console.log(birlestir(isimler, soyisimler));

//?? dizideki lemanlarin toplamini bulan programi FOR OF ile yaziniz.

const dizi3 = [12, 3, -5, 64, -24, 52];
let topl = 0;

for (let item of dizi3) {
  topl += item;
}
console.log(topl);

//?? dizideki elemanlari birlestirerek tek bir String haline getiren uygulamayi FOR OF ile yaziniz

let arabalar = ["BMW", "Audi", "Volvo"];

let sonucc = "";

for (let araba of arabalar) {
  sonucc += araba + "";
}
console.log(sonucc);

//? bir dizideki elemanlarin herbirini ayri ayri yazdiran uygulamayi forEach methodu ile yaziniz

let ögrenciler = ["John", "Ali", "Ahmet"];

ögrenciler.forEach((k) => {
  console.log(k);
});

//?? dizideki elemanlarin toplamini bularak bunu yazdiran uygulamayi FOR EACH methodu ile yaziniz

const dizi5 = [65, 44, 12, 4, -20, 19];
let toplamm = 0;

dizi5.forEach((a) => {
  toplamm += a;
});

console.log(toplamm);

//?? belirtilen dizinin her bir elemaninin 5 katini alarak ayri bir dizide saklayan uygulamayi forEach() methodu ile yaziniz

const dizi6 = [-5, 24, -13, 7];
const yeniDizi = [];

dizi6.forEach((d, i) => {
  yeniDizi[i] = d * 5;
});

console.log(yeniDizi);

//??? bir dizideki elemanlarin 5 katini alarak yeni bir diziye kaydeden uygulamayi map() methodu ile yapiniz

const sayilar = [3, 7, 17, 5, 67, 2, 0];

const yepyeni = sayilar.map((s) => 
  s * 5
);
console.log(yepyeni);


//??bir dizideki butunisimleri buyuk harfe donusturen uygulamayi yaziniz

const isiml=['Ali','Veli','ozlem', 'murat'];

const yesyeni=isiml.map((x)=>x.toUpperCase());
console.log(yesyeni);


//?? tlfiyatlar dizisindeki fiyatlarin Euro ve dolar karsiliklarini hesaplatarak yeni dizilere kaydediniz

const Euro=20;
const Dolar=18;
const fiyatlar=[100,150,200,50,60];

const euroFiyat=fiyatlar.map((x)=>
(x/Euro).toFixed(2))

const dolarFiyat=fiyatlar.map((y)=>
(y/Dolar).toFixed(2))

console.log(euroFiyat);
console.log(dolarFiyat);



//?? tl fiyatlar dizisindeki urunlere zam yapilmak isteniyor.fiyati 100tl den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapilmak isteniyor.ayrica zamli olan yeni degerleri ornekteki gibi diziye saklamak istiyoruz

const fiyatlar2 = [100, 150, 200, 50, 60];

const zamliFiyat=fiyatlar.map(
    (d,i)=>{
        if (d>100){
return `Ürün Fiyati.${i+1} : ${(d*1.1).toFixed(2)}`
        }else{
            return`Ürün fiyati.${i+1} : ${(d*1.15).toFixed(2)}`;
        }
    }
)
console.log(zamliFiyat);


//?? Koordinatlar dizisindeki negatif koordinatlari alip yeni bir dizide saklayan uygulamayi filter() ile yapiniz

const koordinatlar=[-100, 150, -32, 43, -20];
negatifKoordinatlar=koordinatlar.filter((x)=>x<0);console.log(negatifKoordinatlar);



//?? koordinatlar dizisindeki negatif koordinatlari secererk bunlari pozitife cevirirp alt alta konsola yazdiran uygulamayi yaziniz

const koordinatlar2=[-100, 150, -32, 43, -20];
koordinatlar2
.filter((x)=>x<0)
.map((t)=>t*-1)
.forEach((y)=>
console.log(y))
    

//??? Bireyler dizisindeki kisilerdn adi belirtlen harf ile baslayanlari secerek ayri bir diziye saklayan uygulamayi yaziniz.

const bireyler=['Murat','Ozlem','Ihsan','Esad','Mesud']
const basHarfeGoreSec=function(harf){
    const h=harf.toUpperCase();
    const filtrelenmis=bireyler.filter((t)=>
    t.startsWith(h)).map((t)=>t)
    return filtrelenmis;
}
console.log(basHarfeGoreSec('m'));
console.log(basHarfeGoreSec('E'));



///???? koordinatlar dizisindeki degerlerin toplamini hesaplayarak konsola bastiran uygulamayi reduce() yontemi ile yaziniz

const koordinatlar3 = [-100, 150, -32, 43, -20];
const toplm=koordinatlar3.reduce(function(x,y){
return x+y});

console.log(toplm);



//?? koordinatlar dizisindeki degerlerin toplamini, ara degerleri de gostererek konsola bastiran uygulamayi reduce() ile yaziniz.

const koordinatlar4= [-100, 150, -32, 43, -20];

const tpl=koordinatlar4.reduce(function(x,y,i){
    console.log(`iterasyon ${i} ${x}`);

    return x+y
})
console.log(tpl);


//???koordinatlar dizisndeki degerlerin ortalamasini hesaplayarak konsola bastiran uygulamayi reduce yontemini kullanarak yaziniz

const koordinatlar5 = [-100, 150, -32, 43, -20];

const ort=koordinatlar.reduce((x,y)=>x+y)/koordinatlar5.length;

console.log('Koordinatlarin oprtalamasi:', ort)


//?? bir firma 3000 tl den az olan maaslara 10% zam yapmak istiyor ve zam yapilan bu kisilere toplam kac tl odenecegini bilmek istiyor.programini yaziniz

const maaslar=[3000,2891,3500,4200,7000,2500]

const zamliMaas= maaslar.filter((x)=>x<3000)
.map((x)=>x*1.10)
.reduce((x,y)=>x+y)

console.log(zamliMaas.toFixed(2));