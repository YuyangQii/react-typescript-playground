import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    // fetch(url).then(res => res.json()).then(data => setData(data))
    
    async function getData() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("fetch failed");
        }

        const result = await res.json();

        // console.log(result);
        setData(result);
      } catch (err: any) {
        console.log(err);
        
        setError("something went wrong");
      }
      setLoading(false);
    }

    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}