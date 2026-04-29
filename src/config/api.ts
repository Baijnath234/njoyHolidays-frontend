/**
 * API Configuration
 * Centralized API URLs and headers
 * Update these URLs when your backend changes
 */

export const API_CONFIG = {
  // Base URLs for different services
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.1.7:8081",
  PACKAGES_API_URL: process.env.NEXT_PUBLIC_PACKAGES_API_URL || "http://192.168.1.3:8082",
  FLIGHT_API_URL: process.env.NEXT_PUBLIC_FLIGHT_API_URL || "https://sky-scrapper.p.rapidapi.com",
  
  // API Keys (should be moved to env vars in production)
  RAPIDAPI_KEY: process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "YOUR_RAPIDAPI_KEY",
  RAPIDAPI_HOST: process.env.NEXT_PUBLIC_RAPIDAPI_HOST || "sky-scrapper.p.rapidapi.com",
};

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    FORGOT_PASSWORD: "/api/auth/forgot-password",
    RESET_PASSWORD: "/api/auth/reset-password",
    REGISTER: "/api/auth/register",
  },
  
  // Flight endpoints
  FLIGHTS: {
    SEARCH: "/api/v2/flights/searchFlightsComplete",
  },
  
  // Booking endpoints
  BOOKINGS: {
    CREATE: "/api/bookings",
    GET_ALL: "/api/bookings",
    GET_ONE: "/api/bookings/:id",
    UPDATE: "/api/bookings/:id",
    DELETE: "/api/bookings/:id",
  },
  
  // Trips endpoints
  TRIPS: {
    GET_ALL: "/api/trips",
    GET_ONE: "/api/trips/:id",
    CREATE: "/api/trips",
    UPDATE: "/api/trips/:id",
    DELETE: "/api/trips/:id",
  },
  
  // Packages/Tours endpoints (from packages API)
  PACKAGES: {
    GET_ALL: "/api/packages/getAllTourPackage",
    GET_ONE: "/api/packages/:id",
  },
  
  // Users endpoints
  USERS: {
    GET_ALL: "/api/users",
    GET_ONE: "/api/users/:id",
    UPDATE: "/api/users/:id",
    DELETE: "/api/users/:id",
  },
};

export const getFullUrl = (endpoint: string, baseUrl: string = API_CONFIG.BASE_URL): string => {
  return `${baseUrl}${endpoint}`;
};
