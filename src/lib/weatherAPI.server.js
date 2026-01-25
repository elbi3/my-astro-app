export async function openWeatherFetch() {
    // const lat = import.meta.env.PUBLIC_WEATHER_LAT;
    // const lon = import.meta.env.PUBLIC_WEATHER_LON;
    // const apikey = import.meta.env.WEATHER_API_KEY;

        const lat = process.env.WEATHER_LAT;
        const lon = process.env.WEATHER_LON;
        const apikey = process.env.WEATHER_API_KEY;

    if (!lat || !lon || !apikey) {
        console.warn("Missing weather environment variables");
        return null;
    };

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather` +
                    `?lat=${lat}&lon=${lon}&appid=${apikey}`;

    let res;

    try {
        res = await fetch(apiUrl);
    } catch(err){
        console.warn("Weather fetch network error", err);
        return null;
    };

    // const res = await fetch(apiUrl,
    //     {
    //         headers: {
    //             "Cache-Control": "public, max-age=3600",
    //         }
    //     }
    // );

    if(!res.ok) {
        console.warn("Weather fetch failed: ", res.status);
        return null;
    }

    const data = await res.json();

    console.log("In openWeatherFetch, data: ", data);
    // return data; --> instead we are returning a cleaned up data object

    function kelvinToC(k) {
        return Math.round(k - 273.15);
    }

    function kelvinToF(k) {
        return Math.round((k - 273.15) * 9 / 5 + 32);
    }

    return {
        weatherType : data.weather[0].main.toLowerCase(), //"clouds"
        weatherDesc : data.weather[0].description, //"few clouds" & matches the icon description:
        weatherIcon : data.weather[0].icon, //"02d"
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
        weatherHumidity : data.main.humidity, //74
        visibility : data.visibility, //10000
        wind : data.wind.speed, //2.06
        clouds : data.clouds.all, //20
        sunrise: data.sys.sunrise, //1769269494
        sunset: data.sys.sunset, //1769302652
    };
}