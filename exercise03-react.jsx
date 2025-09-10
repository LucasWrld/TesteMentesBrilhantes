/**
 * Estado não sincroniza com prop externa
 */
import { useEffect, useState } from "react";

export function MyComponent({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
