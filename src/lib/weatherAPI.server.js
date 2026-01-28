import { getEnv } from "astro/env/server";

const API_KEY = getEnv("WEATHER_API_KEY");
const LAT = getEnv("WEATHER_LAT");
const LON = getEnv("WEATHER_LON");

console.log("Weather env check: ", {
    apiKey: !!API_KEY,
    lat: LAT,
    lon: LON,
});

if(!API_KEY || !LAT || !LON) {
    console.warn(" ⚠️ Missing weather env vars", {
        hasKey: !!API_KEY,
        hasLat: !!LAT,
        hasLon: !!LON,
    });   
}

export async function openWeatherFetch() {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather` +
                    `?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    let res;
    try {
        res = await fetch(apiUrl, {
            cf: {
                cacheTtl: 60 * 60,
                cacheEverything: true,
            },
        });

    } catch(err){
        console.error("Weather fetch network error", err);
        return null;
    }

    if(!res.ok) {
        console.warn("Weather fetch failed: ", res.status);
        return null;
    }

    const data = await res.json();

    // return data; --> instead we are returning a cleaned up data object

    if (!data?.weather?.[0] || !data?.main) {
        console.warn("Unexpected weather API shape", data);
        return null;
    }

  const kelvinToC = (k) => Math.round(k - 273.15);
  const kelvinToF = (k) => Math.round((k - 273.15) * 9 / 5 + 32);

    return {
        weatherType : String(data.weather[0].main).toLowerCase(), //"clouds"
        weatherDesc : String(data.weather[0].description), //"few clouds" & matches the icon description:
        weatherIcon : String(data.weather[0].icon), //"02d"
        temp: {
            k: Math.round(data.main.temp),
            c: kelvinToC(data.main.temp),
            f: kelvinToF(data.main.temp)
        },
        tempFeelsLike: {
            k: Math.round(data.main.feels_like),
            c: kelvinToC(data.main.feels_like),
            f: kelvinToF(data.main.feels_like)
        },
        weatherHumidity : Number(data.main.humidity), //74
        visibility : Number(data.visibility), //10000
        wind : Number(data.wind.speed), //2.06
        clouds : Number(data.clouds.all), //20
        sunrise: Number(data.sys.sunrise), //1769269494
        sunset: Number(data.sys.sunset), //1769302652
    };
}