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

});