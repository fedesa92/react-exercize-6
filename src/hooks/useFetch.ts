import { useEffect, useState } from "react";

/**
 * Custom hook with generics
 * @param url API URL for retrieve data 
 */
export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
        const fetchData = async () => {
            try {
                const res = await fetch(url, {signal});
                if(res.ok === false){
                    throw new Error(`HTTP error status code: ${res.status}`)
                } else {
                    const json = await res.json() as T
                    setData(json);
                }
            } catch (err) {
                if(err instanceof DOMException && err.name === 'AbortError') {
                    console.warn("Request aborted");
                } else {
                    setError((err as Error).message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => { 
            abortController.abort();
        };
    }, [url])
    return {data, loading, error};
}