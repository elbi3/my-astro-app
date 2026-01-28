
export const prerender = false; //forces SSR

export async function GET() {
    const API_KEY = import.meta.env.WEATHER_API_KEY;
    const LAT = import.meta.env.WEATHER_LAT;
    const LON = import.meta.env.WEATHER_LON;


  const ok = !!API_KEY && !!LAT && !!LON;

  return new Response(
    JSON.stringify({
      status: ok ? "ok" : "error",
      env: {
        WEATHER_API_KEY: !!API_KEY, //confirms binding without exposing value
        WEATHER_LAT: !!LAT,
        WEATHER_LON: !!LON,
      },
      runtime: "cloudflare",
      timestamp: new Date().toISOString(),
    }),
    {
      status: ok ? 200 : 500,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", //don't cache health checks
      },
    }
  );
};
