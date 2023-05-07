//* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector(".top-banner form span");
const list = document.querySelector(".cities");

//location
const locate = document.querySelector("#locate");

//language
const clearAllButton = document.querySelector("#clear-all");
const langButton = document.querySelector("#lang");
const searchEl = document.querySelector("#search");

let units = "metric"; // default olarak imperial(f) Kelvin derece doner
let lang = "en";

let url; //api url
let cities = [];




//asagidakileri 1 kez yazip localStorage e kaydediyoruz ve yoruma aliyoruz.asil biz asagidakini kullanacagiz


// const apiKey="15d5ebe5cb320007963e8c229c7d55c8"
// localStorage.setItem("apiKey",
// EncryptStringAES("15d5ebe5cb320007963e8c229c7d55c8"))

const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
console.log(apiKey);


locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;

    getWeatherDataFromApi();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    const cityName = input.value;
    // console.log(cityName);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
    // console.log(url);

    getWeatherDataFromApi();
  }
  form.reset();
});

langButton.addEventListener("click", (e) => {
  // console.log(e.target);  // nereye tikladigimizi gosterir
  if (e.target.id == "de") {
    lang = "de";
    input.setAttribute("placeholder", "🔍 Suche nach einer Stadt");
    searchEl.innerHTML = "SUCHE";
    clearAllButton.innerHTML = "Alles löschen";
  } else if (e.target.id == "en") {
    lang = "en";
    input.setAttribute("placeholder", "🔍 Search for a city");
    searchEl.innerHTML = "SEARCH";
    clearAllButton.innerHTML = "Clear All";
  } else if (e.target.id == "clear-all") {
    list.innerHTML = "";
    cities = [];
  }
});

const getWeatherDataFromApi = async () => {
  try {
    const res = await fetch(url).then((res) => res.json()); //fetch ile istek
    // console.log(res); //fetch api donen veri

    // const res=await axios(url) // axios ile istek
    // console.log(res);  // axios ile donen veri
    //Data Destruction

    const { main, name, weather, sys } = res; //fetch

    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //alternatif

    //li olusturma

    if (cities.indexOf(name) == -1) {
      // ayni isim girince listeye eklemesin istedik
      cities.unshift(name);

      const resultData = document.createElement("li");
      resultData.classList.add("city");
      resultData.setAttribute("id", `${name}`);
      resultData.innerHTML = `<button type='button' class='single-clear-btn'>☑️</button>
            <h2 class="city-name" >
                      <span>${name}</span>
                      <sup>${sys.country}</sup>
                  </h2>
                  <div class="city-temp">${Math.round(
                    main.temp
                  )}<sup>°C</sup></div>
                  <figure>
                      <img class="city-icon" src="${iconUrlAWS}">
                      <!-- <img class="city-icon" src="${iconUrl}"> -->
                      <figcaption>${weather[0].description}</figcaption>
                  </figure>`;

      list.prepend(resultData); //öne ekler yeni girilen sehir listesini
      // list.append(resultData); //sona ekler

      //single clearbutton
      //hem ekrandan hem listeden silmeliyiz.remove ile ekrandan , delete ile listedden sileriz

      const singleClearButton = document.querySelectorAll(".single-clear-btn");
      singleClearButton.forEach((button) => {
        button.addEventListener("click", (e) => {
          // console.log(cities);
          delete cities[cities.indexOf(e.target.closest(".city").id)];
          e.target.closest(".city").remove();
          console.log(cities);
        });
      });
    } else {
      if (lang == "de") {
        msgSpan.innerText = `Sie kennen das wetter fur die ${name} bereits.Bitte suchen sie nach einer anderen Stadt 😉`;
      } else {
        msgSpan.innerText = `You already know the weather for ${name}.Please search for another city😉`;
      }
      setInterval(() => {
        msgSpan.innerText = "";
      }, 3000);
    }
  } catch (error) {
    if (lang == "de") {
      msgSpan.innerText = `Stadt nicht gefunden`;
    } else {
      msgSpan.innerText = `City not found!`;
    }

    setInterval(() => {
      msgSpan.innerText = "";
    }, 5000);
  }
};