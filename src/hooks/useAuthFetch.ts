"use client";

import { useCallback, useEffect, useState } from "react";

export type FetchStatus = "idle" | "loading" | "success" | "error";

export function useAuthFetch<T>(
  url: string,
  options: RequestInit = {},
  enabled = true,
) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const optionsKey = JSON.stringify(options);

  const fetchData = useCallback(async () => {
    if (!enabled) {
      return;
    }

    setStatus("loading");
    setError(null);

    if (typeof window === "undefined") {
      setStatus("error");
      setError("Client-side auth fetch can only run in the browser.");
      return;
    }

    try {
      const token = window.localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication token missing.");
      }

      const headers = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string> | undefined),
        Authorization: `Bearer ${token}`,
      };

      const res = await fetch(url, {
        ...options,
        headers,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Fetch failed with status ${res.status}`);
      }

      const responseData = (await res.json()) as T;
      setData(responseData);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : String(err));
    }
  }, [url, enabled, optionsKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, status, error, reload: fetchData };
}
