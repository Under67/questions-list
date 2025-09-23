import { useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void] {
  const [isToggled, setIsToggled] = useState(initialValue);

  const toggle = () => setIsToggled((prev) => !prev);

  return [isToggled, toggle];
}
