//safe defaults - fallback data - controlled failure
import type { Weather } from "./types.ts";

export function getWeatherFallback(): Weather {
  return {
    weatherType: "unknown",
    weatherDesc: "Unavailable",
    weatherIcon: "na",

    temp: { k: 0, c: 0, f: 0 },
    tempFeelsLike: { k: 0, c: 0, f: 0 },

    humidity: 0,
    clouds: 0,
    sunrise: 0,
    sunset: 0,
  };
}
