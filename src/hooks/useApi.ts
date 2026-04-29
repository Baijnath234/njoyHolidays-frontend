"use client";

import { useCallback, useEffect, useState } from "react";
import { API_CONFIG, getFullUrl } from "@/config/api";

export type FetchStatus = "idle" | "loading" | "success" | "error";

export interface UseApiOptions extends RequestInit {
  baseUrl?: string;
  skipAuth?: boolean;
  enabled?: boolean;
}

export interface UseApiResponse<T> {
  data: T | null;
  status: FetchStatus;
  error: string | null;
  reload: () => Promise<void>;
  loading: boolean;
}

const parseResponseBody = async <T,>(res: Response): Promise<T | null> => {
  if (res.status === 204) {
    return null;
  }

  const text = await res.text();

  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    return text as T;
  }
};

const getErrorMessage = (data: unknown, fallback: string): string => {
  if (typeof data === "string" && data.trim()) {
    return data;
  }

  if (data && typeof data === "object") {
    const value = data as Record<string, unknown>;
    const message = value.message || value.error || value.detail;

    if (typeof message === "string" && message.trim()) {
      return message;
    }
  }

  return fallback;
};

/**
 * Generic API Hook for calling external APIs
 * Handles headers, authentication, and error management
 */
export function useApi<T>(
  url: string,
  options: UseApiOptions = {},
  enabled = true,
): UseApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const {
    baseUrl = API_CONFIG.BASE_URL,
    skipAuth = false,
    enabled: optionsEnabled = true,
    ...fetchOptions
  } = options;
  const fetchOptionsKey = JSON.stringify(fetchOptions);

  const fetchData = useCallback(async () => {
    if (!enabled || !optionsEnabled) {
      return;
    }

    setStatus("loading");
    setError(null);

    if (typeof window === "undefined") {
      setStatus("error");
      setError("API calls can only run in the browser.");
      return;
    }

    try {
      const fullUrl = getFullUrl(url, baseUrl);
      
      // Build headers
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(fetchOptions.headers as Record<string, string> | undefined),
      };

      // Add authentication token if not skipped
      if (!skipAuth) {
        const token = window.localStorage.getItem("token");
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
      }

      const res = await fetch(fullUrl, {
        ...fetchOptions,
        headers,
      });

      const responseData = await parseResponseBody<T>(res);

      if (!res.ok) {
        throw new Error(
          getErrorMessage(responseData, `Fetch failed with status ${res.status}`),
        );
      }

      setData(responseData);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : String(err));
    }
  }, [url, baseUrl, skipAuth, enabled, optionsEnabled, fetchOptionsKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    status,
    error,
    reload: fetchData,
    loading: status === "loading",
  };
}

/**
 * Hook for making direct fetch requests with API configuration
 * Use this for POST, PUT, DELETE operations
 */
export function useFetch() {
  const makeRequest = useCallback(
    async <T,>(
      url: string,
      method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
      body?: unknown,
      options: UseApiOptions = {},
    ): Promise<{ data: T | null; error: string | null; status: number }> => {
      try {
        const fullUrl = getFullUrl(url, options.baseUrl || API_CONFIG.BASE_URL);

        const headers: Record<string, string> = {
          "Content-Type": "application/json",
          ...(options.headers as Record<string, string> | undefined),
        };

        if (!options.skipAuth) {
          const token = window.localStorage.getItem("token");
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
        }

        const res = await fetch(fullUrl, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined,
          ...options,
        });

        const responseData = await parseResponseBody<T>(res);

        if (!res.ok) {
          return {
            data: null,
            error: getErrorMessage(responseData, `Request failed with status ${res.status}`),
            status: res.status,
          };
        }

        return {
          data: responseData,
          error: null,
          status: res.status,
        };
      } catch (err) {
        return {
          data: null,
          error: err instanceof Error ? err.message : String(err),
          status: 0,
        };
      }
    },
    [],
  );

  return { makeRequest };
}

/**
 * Hook for Flight API calls (External RapidAPI)
 */
export function useFlightApi<T>(
  endpoint: string,
  queryParams?: Record<string, string | number>,
  enabled = true,
): UseApiResponse<T> {
  const url = new URL(
    `${API_CONFIG.FLIGHT_API_URL}${endpoint}`,
  );

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  const requestUrl = url.toString();

  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) {
      return;
    }

    setStatus("loading");
    setError(null);

    if (typeof window === "undefined") {
      setStatus("error");
      setError("Flight API calls can only run in the browser.");
      return;
    }

    try {
      const res = await fetch(requestUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_CONFIG.RAPIDAPI_KEY,
          "X-RapidAPI-Host": API_CONFIG.RAPIDAPI_HOST,
        },
      });

      const responseData = await parseResponseBody<T>(res);

      if (!res.ok) {
        throw new Error(
          getErrorMessage(responseData, `Flight API failed with status ${res.status}`),
        );
      }

      setData(responseData);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : String(err));
    }
  }, [requestUrl, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    status,
    error,
    reload: fetchData,
    loading: status === "loading",
  };
}
