import { WeatherApiSchema } from "./schema.ts";
import { transformWeather } from "./transform.ts";
import { getWeatherFallback } from "./fallback.ts";

const WEATHER_API_KEY = import.meta.env.WEATHER_API_KEY;
const WEATHER_LAT = import.meta.env.WEATHER_LAT;
const WEATHER_LON =  import.meta.env.WEATHER_LON;

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${WEATHER_LAT}&lon=${WEATHER_LON}&appid=${WEATHER_API_KEY}`;

export async function fetchWeather() {
    const res = await fetch(apiUrl);
    const data: unknown = await res.json();

    const parsed = WeatherApiSchema.safeParse(data);
  console.log("parsed: ", parsed);
    if (!parsed.success) {
        console.warn("Weather API validation failed:");
        console.warn(parsed.error.format()); //console.warn for “we recovered but you should know”
        return getWeatherFallback();
    }

    if (!parsed.data.weather[0]) {
        console.warn("Weather array empty after validation");
        return getWeatherFallback();
    }

  return transformWeather(parsed.data);
}

fetchWeather().then((weather) => {
  console.log("SAFE WEATHER OBJECT:");
  console.log(weather);
});
