let lat = "47.579444";
let lon = "-122.311389";

// saving for params placement:
// let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}`;
export async function openWeatherFetch() {
    const apikey = import.meta.env.WEATHER_API_KEY;
    // let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
    console.log("apikey: ", apikey);

    const res = await fetch(apiUrl);
    const data = await res.json();
// don't forget to make a cleaner function!
    console.log("In openWeatherFetch, data: ", data);
    return data;
}