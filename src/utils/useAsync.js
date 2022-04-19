import { useEffect, useState } from 'react';

const useAsync = (fn) => {
  // [response, loading, error]
  const [triplet, setTriplet] = useState([null, null, null]);

  useEffect(() => {
    const inner = async () => {
      setTriplet([null, true, null]);
      try {
        const res = await fn();
        setTriplet([res, false, null]);
      } catch (e) {
        const errorBody = e.response;
        setTriplet([null, false, errorBody]);
      }
    };
    inner();
  }, [fn]);

  return triplet;
};

export default useAsync;
