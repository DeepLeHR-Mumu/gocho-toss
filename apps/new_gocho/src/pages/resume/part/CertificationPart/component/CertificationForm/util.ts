import { useEffect, useState } from "react";

export const useQueryDebounce = (value: string, delay = 200) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setDebounceValue(value);
      setIsChanged(true);
    }, delay);

    return () => {
      clearTimeout(handler);
      setIsChanged(false);
    };
  }, [value, delay]);

  return { debounceValue, isChanged };
};
