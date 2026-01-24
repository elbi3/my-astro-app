export default function sunlightCalc(sunrise, sunset, timeNow=0){
	//JavaScript uses ms, so adjust Unix timestamps:
	const sunriseMs = sunrise * 1000;
	const sunsetMs = sunset * 1000;
	const dayLength = sunsetMs - sunriseMs;
	// const now = Date.now();
    const now = timeNow;
    console.log("sunrise: ", sunrise * 1000);
    console.log("sunset: ", sunset * 1000);
    console.log("Date.now: ", now);
	const MIN = 60 * 1000;
	const DAWN_DURATION = 45 * MIN;
	const MORNING_DURATION = 90 * MIN;
	const DUSK_DURATION = 45 * MIN;
	const PRE_SUNSET_GOLDEN = 90 * MIN;
	const dawnStart = sunriseMs - DAWN_DURATION;
	const morningEnd = sunriseMs + MORNING_DURATION;
	const duskStart = sunsetMs - PRE_SUNSET_GOLDEN;
	const duskEnd = sunsetMs + DUSK_DURATION;

    let phase = "";
	if(now < dawnStart) {
        phase = "night"
        console.log("phase: ", phase);
        return phase;
    };
	if(now < sunriseMs){
        phase = "dawn"
        console.log("phase: ", phase);
        return phase;
    } 
	if(now < morningEnd) {
        phase = "morning"
        console.log("phase: ", phase);
        return phase;
    }
	if(now < duskStart) {
        phase = "afternoon"
        console.log("phase: ", phase);
        return phase;
    } 
	if(now < sunsetMs) {
        phase = "dusk"
        console.log("phase: ", phase);
        return phase;
    } 
	if(now < duskEnd) {
        phase = "dusk"
        console.log("phase: ", phase);
        return phase;
    } 
	return "night";
};

const sunriseTest = 1768665064;
const sunsetTest = 1768697237
let result = sunlightCalc(sunriseTest, sunsetTest);
console.log("Result: ", result);