# API Integration Guide

This document explains how to use the centralized API system in the njoyHolidays frontend.

## Overview

The API system is centralized to make it easy to change API endpoints and configurations without modifying components. All API calls should go through the hooks provided in `src/hooks/useApi.ts`.

## File Structure

- `src/config/api.ts` - API configuration (URLs, endpoints, keys)
- `src/hooks/useApi.ts` - API hooks for making requests
- `src/hooks/useAuthFetch.ts` - Legacy hook (can be replaced with `useApi`)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Main API Base URL
NEXT_PUBLIC_API_BASE_URL=http://192.168.1.7:8081

# Flight API (RapidAPI)
NEXT_PUBLIC_FLIGHT_API_URL=https://sky-scrapper.p.rapidapi.com
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
NEXT_PUBLIC_RAPIDAPI_HOST=sky-scrapper.p.rapidapi.com
```

## Available Hooks

### 1. `useApi<T>(url, options, enabled)`
Generic hook for GET requests with automatic header management.

**Usage:**
```tsx
"use client";

import { useApi } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function MyComponent() {
  const { data, loading, error, reload } = useApi(
    API_ENDPOINTS.TRIPS.GET_ALL,
    { method: "GET" }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* Render data */}</div>;
}
```

### 2. `useFetch()`
Hook for making POST, PUT, DELETE, and other requests.

**Usage:**
```tsx
"use client";

import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function MyComponent() {
  const { makeRequest } = useFetch();

  const handleCreate = async () => {
    const { data, error, status } = await makeRequest(
      API_ENDPOINTS.TRIPS.CREATE,
      "POST",
      {
        title: "New Trip",
        destination: "Paris"
      }
    );

    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Created:", data);
    }
  };

  return <button onClick={handleCreate}>Create Trip</button>;
}
```

### 3. `useFlightApi<T>(endpoint, queryParams, enabled)`
Specialized hook for RapidAPI Flight searches.

**Usage:**
```tsx
"use client";

import { useFlightApi } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function FlightSearch() {
  const { data: flights, loading, error } = useFlightApi(
    API_ENDPOINTS.FLIGHTS.SEARCH,
    {
      originSkyId: "airport_lhr",
      destinationSkyId: "airport_cdg",
      date: "2024-06-15"
    }
  );

  if (loading) return <div>Searching flights...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* Render flights */}</div>;
}
```

## Updating API Configuration

### When API Base URL Changes

Edit `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-new-api.com",
  // ... rest of config
};
```

### When Adding New Endpoints

Add them to `API_ENDPOINTS` in `src/config/api.ts`:

```typescript
export const API_ENDPOINTS = {
  // ... existing endpoints
  HOTELS: {
    GET_ALL: "/api/hotels",
    GET_ONE: "/api/hotels/:id",
    SEARCH: "/api/hotels/search",
  },
};
```

### When Changing Authentication Headers

Edit the `useApi` hook in `src/hooks/useApi.ts`:

```typescript
// Add custom header
const headers: Record<string, string> = {
  "Content-Type": "application/json",
  "X-Custom-Header": "value",
  // ... rest of headers
};
```

## Hook Features

All hooks automatically handle:
- ✅ Common headers (Content-Type, Authorization)
- ✅ Authentication token retrieval from localStorage
- ✅ Error handling and status management
- ✅ Loading states
- ✅ Type safety with TypeScript generics

## Examples

### Example 1: Fetch Bookings
```tsx
import { useApi } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function BookingsList() {
  const { data: bookings, loading, error } = useApi(
    API_ENDPOINTS.BOOKINGS.GET_ALL
  );

  return (
    <div>
      {bookings?.map((booking) => (
        <div key={booking.id}>{booking.title}</div>
      ))}
    </div>
  );
}
```

### Example 2: Create a Booking
```tsx
import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function CreateBooking() {
  const { makeRequest } = useFetch();

  const handleSubmit = async (formData) => {
    const { data, error } = await makeRequest(
      API_ENDPOINTS.BOOKINGS.CREATE,
      "POST",
      formData
    );

    if (error) {
      console.error(error);
    } else {
      console.log("Booking created:", data);
    }
  };

  return <form onSubmit={handleSubmit}>{/* Form fields */}</form>;
}
```

### Example 3: Update a User
```tsx
import { useFetch } from "@/hooks/useApi";
import { API_ENDPOINTS } from "@/config/api";

export function UpdateUser() {
  const { makeRequest } = useFetch();

  const updateUser = async (userId, userData) => {
    const endpoint = API_ENDPOINTS.USERS.UPDATE.replace(":id", userId);
    
    const { data, error } = await makeRequest(
      endpoint,
      "PUT",
      userData
    );

    return { data, error };
  };

  return <div>{/* Component */}</div>;
}
```

## Troubleshooting

### API Key Issues
- Ensure `NEXT_PUBLIC_RAPIDAPI_KEY` is set in `.env.local`
- Never commit real API keys to Git
- Use environment variables for sensitive data

### CORS Issues
- If calling external APIs, ensure CORS is enabled on backend
- Consider using a proxy for development

### Authentication Issues
- Verify token is stored in localStorage under key "token"
- Check token expiration
- Ensure Authorization header is being sent correctly

## Best Practices

1. **Always use endpoint constants** from `API_ENDPOINTS`
2. **Use environment variables** for URLs and keys
3. **Add error handling** in components using try-catch
4. **Type your responses** using TypeScript generics
5. **Keep api.ts updated** when backend changes
6. **Test API calls** in development before deployment
7. **Use `skipAuth: true`** for public endpoints

## Migration from Old Fetch Calls

### Before:
```tsx
const res = await fetch("http://192.168.1.7:8081/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
});
```

### After:
```tsx
const { makeRequest } = useFetch();
const { data, error } = await makeRequest(
  API_ENDPOINTS.AUTH.LOGIN,
  "POST",
  { email, password }
);
```

## Support

For more information about the API system, check:
- `src/config/api.ts` - Configuration
- `src/hooks/useApi.ts` - Hook implementations
- `.env.example` - Environment variables template
