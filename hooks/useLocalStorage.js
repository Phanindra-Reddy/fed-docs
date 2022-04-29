import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

// export default function useLocalStorage(key, initialValue) {
//   const prefixedKey = PREFIX + key

//   const [value, setValue] = useState(() => {
//     // const jsonValue = localStorage.getItem(prefixedKey)
//     var jsonValue;
//     if(typeof window !== 'undefined'){
//       jsonValue = localStorage.getItem(prefixedKey)
//     }
//     if (jsonValue !== null) return JSON.parse(jsonValue)

//     if (typeof initialValue === 'function') {
//       return initialValue()
//     } else {
//       return initialValue
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem(prefixedKey, JSON.stringify(value))
//   }, [prefixedKey, value])

//   return [value, setValue]
// }



export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(prefixedKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(prefixedKey, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
