async function load() {
    const response = await fetch('./hindipressclub/data/articles.json');
    const json = await response.json();
    console.log(json);

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            const name = json[key].name;
            const text = json[key].text;
            const textShort = text.substring(0, 150);
            const textRest = text.substring(150, text.length);
            if (json[key].thumbnail) {
                const thumbnail = json[key].thumbnail;
                const temp = `
                <div class="article-card">
                <h1>${name}</h1>
                <img src="${thumbnail}" alt="">
                <div class="article-card-overlay">
                <pre>${textShort}<span id="dots">...</span><span id="more">${textRest}</span></pre><button onclick="myFunction()" id="myBtn">Read more</button>
                </div>
                </div>`;
                document.querySelector('.left').innerHTML += temp;
            }
            else {
                const temp = `
                <div class="article-card">
                <h1>${name}</h1>
                <div class="article-card-overlay">
                <pre>${textShort}<span id="dots">...</span><span id="more">${textRest}</span></pre><button onclick="myFunction()" id="myBtn">Read more</button>
                </div>
                </div>`;
                document.querySelector('.left').innerHTML += temp;
            }
        }
    }
    return json;
}
const loadArticles = load();

function myFunction() {
    var btnText = event.target;
    var parent = btnText.parentElement;
    var p = parent.querySelector('pre');
    var dots = p.querySelector('#dots');
    var moreText = p.querySelector('#more');
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

const API_KEY = `cf80a364109207afb87c87db050a4ceb`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const getWeather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}
getWeather("Pilani")
