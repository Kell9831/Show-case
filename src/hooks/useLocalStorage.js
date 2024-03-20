import * as React from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(newValue) {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }

  React.useEffect(() => {
    const readValue = window.localStorage.getItem(key);

    if (readValue) {
      setValue(JSON.parse(readValue));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [initialValue, key]);

  return [value, handleChange];
}
