import { openWeatherFetch } from "../../lib/weatherAPI.server";

export const onRequest = async () => {
  try {
    const weather = await openWeatherFetch();

    if (!weather) {
      return new Response(null, { status: 204 });
    }

    return new Response(JSON.stringify(weather), {
      headers: {
        "Content-Type": "application/json",
        // cache for 1 hour at Cloudflare’s edge
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Weather function error:", err);

    return new Response("Weather fetch failed", {
      status: 500,
    });
  }
};
