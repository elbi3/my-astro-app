//runtime validation - runtime schema

import { z } from "zod";

export const WeatherApiSchema = z.object({
  weather: z.array(
    z.object({
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ).min(1),

  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    humidity: z.number(),
  }),

  clouds: z.object({
    all: z.number(),
  }),

  sys: z.object({
    sunrise: z.number(),
    sunset: z.number(),
  }),
});

export type WeatherApi = z.infer<typeof WeatherApiSchema>;
