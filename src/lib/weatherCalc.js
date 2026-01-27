export default function weatherCalc(weatherType) {
    const d = weatherType.toLowerCase();//already lowercased in cleaner portion of api call

    if(d.includes("thunder")) return "storm";
    if(d.includes("rain") || d.includes("drizzle")) return "wet";
    if(d.includes("snow")) return "snow";
    if(d.includes("fog") || d.includes("mist") || d.includes("haze")) return "fog";
    if(d.includes("cloud")) return "cloudy";

    return "clear";

}