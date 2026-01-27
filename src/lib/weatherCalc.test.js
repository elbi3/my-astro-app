import { assert, describe, expect, test } from 'vitest';
import weatherCalc from './weatherCalc.js';

describe("weatherCalc", () => {
    it("detects cloudy weather", () => {
        expect(weatherCalc("overcast clouds")).toBe("cloudy");
    });

    it("detects rain", () => {
        expect(weatherCalc("light rain")).toBe("wet");
    });

    it("defaults to clear", () => {
        expect(weatherCalc("clear sky")).toBe("clear");
    });
});

