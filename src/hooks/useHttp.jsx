import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  const sendRequest = useCallback(async (config, passDataFromHttp) => {
    setIsLoading(true);
    setError(null);
    setIsAdded(true);

    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      });

      if (!response.ok) {
        throw new Error('something went wrong !!!');
      }

      const data = await response.json();

      passDataFromHttp(data); // przekazanie tych danych do funkcji
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    setIsAdded(false);
  }, []);

  return {
    isAdded: isAdded,
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
