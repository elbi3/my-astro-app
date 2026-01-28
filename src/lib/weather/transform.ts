//API -> domain model

import type { WeatherApi } from "./schema.ts";
import type { Weather } from "./types.ts";

const kelvinToC = (k: number) => Math.round(k - 273.15);
const kelvinToF = (k: number) =>
  Math.round((k - 273.15) * (9 / 5) + 32);

export function transformWeather(api: WeatherApi): Weather {
    const [primaryWeather] = api.weather;
    // TypeScript still doesn't *know* it's defined,
    // so we assert once, right here.
    if (!primaryWeather) {
        throw new Error("Weather array unexpectedly empty after validation");
    }
  return {
    weatherType: primaryWeather.main.toLowerCase(), //api.weather[0] to primaryWeather
    weatherDesc: primaryWeather.description,
    weatherIcon: primaryWeather.icon,

    temp: {
      k: Math.round(api.main.temp),
      c: kelvinToC(api.main.temp),
      f: kelvinToF(api.main.temp),
    },

    tempFeelsLike: {
      k: Math.round(api.main.feels_like),
      c: kelvinToC(api.main.feels_like),
      f: kelvinToF(api.main.feels_like),
    },

    humidity: api.main.humidity,
    clouds: api.clouds.all,
    sunrise: api.sys.sunrise,
    sunset: api.sys.sunset,
  };
}
