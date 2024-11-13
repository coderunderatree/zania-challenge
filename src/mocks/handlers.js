// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { mockData, mockCatImages } from "./mockData";

export const handlers = [
  // Intercept "GET https://example.com/data" requests...
  http.get("/data", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockData);
  }),

  http.get("https://api.thecatapi.com/v1/images/search", () => {
    const randomIndex = Math.round(Math.random() * mockCatImages.length);
    return HttpResponse.json([mockCatImages[randomIndex]]);
  }),
];
