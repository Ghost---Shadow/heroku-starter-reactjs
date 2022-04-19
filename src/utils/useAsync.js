import { useEffect, useState } from 'react';

const useAsync = (fn) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const inner = async () => {
      setLoading(true);
      try {
        const res = await fn();
        setResponse(res);
        setLoading(false);
      } catch (e) {
        const errorBody = await e.response.json();
        setError(errorBody);
        setLoading(false);
      }
    };
    inner();
  }, []);

  return [response, loading, error];
};

export default useAsync;
