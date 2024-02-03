import { useEffect, useState } from "react";
export const useFetch = (url, method, headers) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    async function dataFetch() {
      setLoading(true);
      try {
        const res = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = await res.json();
        setLoading(false);
        setResult(data);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setError(true);
      }
    }
    dataFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    result,
  };
};
