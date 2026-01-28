export async function openWeatherFetch(env) {
    // const lat = import.meta.env.PUBLIC_WEATHER_LAT;
    // const lon = import.meta.env.PUBLIC_WEATHER_LON;
    // const apikey = import.meta.env.WEATHER_API_KEY;

        // const lat = import.meta.env.WEATHER_LAT;
        // const lon = import.meta.env.WEATHER_LON;
        // const apikey = import.meta.env.WEATHER_API_KEY;
    const lat = env.WEATHER_LAT;
    const lon = env.WEATHER_LON;
    const apikey = env.WEATHER_API_KEY;

  if (!apikey || !lat || !lon) {
    console.error("Missing weather environment variables", {
      hasKey: !!apikey,
      hasLat: !!lat,
      hasLon: !!lon,
    });
    return null;
  }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather` +
                    `?lat=${lat}&lon=${lon}&appid=${apikey}`;

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