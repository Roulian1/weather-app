const main = document.querySelector("main");
const favoriteStore = document.getElementById("fav");
const favoriteBtn = document.getElementById("star");
const result = document.getElementById("result");
const input = document.getElementById("weatherSearch");
const form = document.querySelector("form");
const ul = document.querySelectorAll(".ul-day");
const dayOne = document.getElementById("one");
const dayTwo = document.getElementById("two");
const dayThree = document.getElementById("three");
const dayFour = document.getElementById("four");
const dayFive = document.getElementById("five");
let dataWeather = [];
let dataPicture = [];
var dataFavorite = [];
console.log(favoriteBtn);

async function fetchWeather(city) {
    await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&appid=ce8ef7aee843acadc925a10a20420947`
    )
        .then((res) => res.json())
        .then((data) => (dataWeather = data));
    weatherDisplay();
}
function randomPictures(city) {
    document.body.style.background = `url(https://source.unsplash.com/random/?${city}) center/cover`;
}

function weatherDisplay() {
    //
    // LOGIQUE DE CONTENU INJECTE DYNAMIQUEMENT
    if (dataWeather === null) {
        result.innerHTML = `<h2>Aucun résultat</h2>`;
    } else {
        result.innerHTML = `
        <h2>${dataWeather.city.country}</h2>
        <h3>${dataWeather.city.name}</h3>
        `;
        dayOne.innerHTML = `
        <li>${dataWeather.list[0].dt_txt.slice(0, 10)}</li>
        <li class = "temp">${Math.round(dataWeather.list[0].main.temp)}°</li>
        <li>${dataWeather.list[0].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${
            dataWeather.list[0].weather[0].icon
        }@2x.png" alt=""></li>
        
        `;
        dayTwo.innerHTML = `
        <li>${dataWeather.list[8].dt_txt.slice(0, 10)}</li>
        <li class = "temp">${Math.round(dataWeather.list[8].main.temp)}°</li>
        <li>${dataWeather.list[8].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${
            dataWeather.list[8].weather[0].icon
        }@2x.png" alt=""></li>
        `;
        dayThree.innerHTML = `
        <li>${dataWeather.list[16].dt_txt.slice(0, 10)}</li>
        <li class = "temp">${Math.round(dataWeather.list[16].main.temp)}°</li>
        <li>${dataWeather.list[16].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${
            dataWeather.list[16].weather[0].icon
        }@2x.png" alt=""></li>
        `;
        dayFour.innerHTML = `
        <li>${dataWeather.list[24].dt_txt.slice(0, 10)}</li>
        <li class = "temp">${Math.round(dataWeather.list[24].main.temp)}°</li>
        <li>${dataWeather.list[24].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${
            dataWeather.list[24].weather[0].icon
        }@2x.png" alt=""></li>
        `;
        dayFive.innerHTML = `
        <li>${dataWeather.list[32].dt_txt.slice(0, 10)}</li>
        <li class = "temp">${Math.round(dataWeather.list[32].main.temp)}°</li>
        <li>${dataWeather.list[32].weather[0].description}</li>
        <li><img src="http://openweathermap.org/img/wn/${
            dataWeather.list[32].weather[0].icon
        }@2x.png" alt=""></li>
        `;
    }
    //
    //
    switch (dataWeather.list[0].weather[0].icon) {
        case "01d":
            main.style.background = "url(./img/01d.jpg) center/cover";
            main.style.color = "black";
            document.body.style.background = `url(https://source.unsplash.com/random/?${input.value}) center/cover`;
            break;
        case "02d":
            main.style.background = "url(./img/02d.jpg) center/cover";
            main.style.color = "black";
            document.body.style.background = `url(https://source.unsplash.com/random/?${city}) center/cover`;
            break;
        case "03d":
            main.style.background = "url(./img/03d.jpg) center/cover";
            main.style.color = "black";

            break;
        case "04d":
            main.style.background = "url(./img/04d.jpg) center/cover";
            main.style.color = "black";

            break;
        case "09d":
            main.style.background = "url(./img/09d.jpg) center/cover";
            main.style.color = "black";

            break;
        case "10d":
            main.style.background = "url(./img/10d.jpg) center/cover";
            main.style.color = "black";

            break;
        case "11d":
            main.style.background = "url(./img/11d.jpg) center/cover";
            main.style.color = "black";

            break;
        case "13d":
            main.style.background = "url(./img/13d.jpg) center/cover";
            main.style.color = "black";
            break;
        case "50d":
            main.style.background = "url(./img/50d.jpg) center/cover";
            main.style.color = "black";
            break;
        case "01n":
            main.style.background = "url(./img/01n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "02n":
            main.style.background = "url(./img/02n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });

            break;
        case "03n":
            main.style.background = "url(./img/03n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "04n":
            main.style.background = "url(./img/04n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "09n":
            main.style.background = "url(./img/09n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "10n":
            main.style.background = "url(./img/10n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "11n":
            main.style.background = "url(./img/11n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "13n":
            main.style.background = "url(./img/13n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        case "50n":
            main.style.background = "url(./img/50n.jpg) center/cover";
            main.style.color = "white";

            ul.forEach((el) => {
                el.style.background = "rgba(255, 255, 255, 0.196)";
            });
            break;
        default:
            main.style.background = "rgb(163, 200, 221)";
    }
    //
    // GRAPHIC WITH CHART.JS

    const graph = document.getElementById("graph").getContext("2d");

    let myChart = new Chart(graph, {
        type: "line",
        data: {
            labels: [
                `${dataWeather.list[0].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[1].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[2].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[3].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[4].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[5].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[6].dt_txt.slice(10, 13)}h`,
                `${dataWeather.list[7].dt_txt.slice(10, 13)}h`,
            ],
            datasets: [
                {
                    label: "Températures",
                    data: [
                        `${Math.round(dataWeather.list[0].main.temp)}`,
                        `${Math.round(dataWeather.list[1].main.temp)}`,
                        `${Math.round(dataWeather.list[2].main.temp)}`,
                        `${Math.round(dataWeather.list[3].main.temp)}`,
                        `${Math.round(dataWeather.list[4].main.temp)}`,
                        `${Math.round(dataWeather.list[5].main.temp)}`,
                        `${Math.round(dataWeather.list[6].main.temp)}`,
                        `${Math.round(dataWeather.list[7].main.temp)}`,
                    ],
                    backgroundColor: "white",
                    borderColor: "white",
                    Color: "white",
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                    label: {
                        color: "white",
                    },
                },
            },
        },
    });
    //
    //PERMET D'UPDATE LE GRAPH AVEC UN BOUTON
    const update = document.getElementById("update");
    update.addEventListener("click", () => {
        myChart.destroy();
        myChart = new Chart(graph, {
            type: "line",
            data: {
                labels: [
                    `${dataWeather.list[0].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[1].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[2].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[3].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[4].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[5].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[6].dt_txt.slice(10, 13)}h`,
                    `${dataWeather.list[7].dt_txt.slice(10, 13)}h`,
                ],
                datasets: [
                    {
                        label: "Températures",
                        data: [
                            `${Math.round(dataWeather.list[0].main.temp)}`,
                            `${Math.round(dataWeather.list[1].main.temp)}`,
                            `${Math.round(dataWeather.list[2].main.temp)}`,
                            `${Math.round(dataWeather.list[3].main.temp)}`,
                            `${Math.round(dataWeather.list[4].main.temp)}`,
                            `${Math.round(dataWeather.list[5].main.temp)}`,
                            `${Math.round(dataWeather.list[6].main.temp)}`,
                            `${Math.round(dataWeather.list[7].main.temp)}`,
                        ],
                        backgroundColor: "white",
                        borderColor: "white",
                        Color: "white",
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                        label: {
                            color: "white",
                        },
                    },
                },
            },
        });
    });
}
//
//

//
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchWeather(input.value);
    console.log(input.value);
    randomPictures(input.value);
    weatherDisplay();
});
//
//AJOUT DE FAVORIS ???? --> ONLY ONE ??

favoriteBtn.addEventListener("click", (e) => {
    dataFavorite.unshift(dataWeather.city.name);
    if (dataFavorite.length >= 7) {
        dataFavorite.pop();
    }
    localStorage.city = dataFavorite;

    favoriteStore.innerHTML += `<li class="city">${dataWeather.city.name}</li>`;
});
var newArr = ["Namur", "Porto", "Moscou", "Washington", "Bruxelles", "New Delhi"];
(() => {
    if (localStorage.city) {
        dataFavorite = localStorage.city.split(",");
    } else {
        dataFavorite = newArr;
    }
})();
for (let i = 0; i < dataFavorite.length; i++) {
    favoriteStore.innerHTML += `<li class="city">${dataFavorite[i]}</li>`;
}
window.addEventListener("load", () => {
    fetchWeather("Namur");
    randomPictures("Namur");
    weatherDisplay();
});
let favCity = document.querySelectorAll(".city");
favCity.forEach((city) => {
    city.addEventListener("click", () => {
        console.log(city.textContent);
        randomPictures(city.textContent);
        fetchWeather(city.textContent);
        weatherDisplay();
    });
});
console.log(dataFavorite);