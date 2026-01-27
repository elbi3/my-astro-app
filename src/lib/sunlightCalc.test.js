import { assert, describe, expect, test } from 'vitest';
import sunlightCalc from "./sunlightCalc.js";

describe("my sunlightCalc function", () => {

  let sunriseJan24 = 1769269494; 
  let sunsetJan24 =  1769302652;
  //for the third optional variable to replace "Date.now()":
  let dateNowAfternoonJan24 =  1769292398558; //2pmish
  let earlyMorning = (sunriseJan24 * 1000) - 1;
//night (v1)
//dawn
  it("returns time before sunrise", () => {
    expect(sunlightCalc(sunriseJan24, sunsetJan24, earlyMorning)).toBe("dawn");
  });
//morning
  it("returns time before dusk", () => {
    expect(sunlightCalc(sunriseJan24, sunsetJan24, dateNowAfternoonJan24)).toBe("afternoon");
  });
//afternoon
//dusk (v1)
//dusk (v2)
//night(v2)


//sad paths?
});


// saving original function just in case
// function sunlightCalc(sunrise, sunset){
// 	//JavaScript uses ms, so adjust Unix timestamps:
// 	const sunriseMs = sunrise * 1000;
// 	const sunsetMs = sunset * 1000;
// 	const dayLength = sunsetMs - sunriseMs;
// 	const now = Date.now();
// 	const MIN = 60 * 1000;
// 	const DAWN_DURATION = 45 * MIN;
// 	const MORNING_DURATION = 90 * MIN;
// 	const DUSK_DURATION = 45 * MIN;
// 	const PRE_SUNSET_GOLDEN = 90 * MIN;
// 	const dawnStart = sunriseMs - DAWN_DURATION;
// 	const morningEnd = sunriseMs + MORNING_DURATION;
// 	const duskStart = sunsetMs - PRE_SUNSET_GOLDEN;
// 	const duskEnd = sunsetMs + DUSK_DURATION;

// 	if(now < dawnStart) return "night";
// 	if(now < sunriseMs) return "dawn";
// 	if(now < morningEnd) return "morning";
// 	if(now < duskStart) return "afternoon";
// 	if(now < sunsetMs) return "dusk";
// 	if(now < duskEnd) return "dusk";
// 	return "night";
// };