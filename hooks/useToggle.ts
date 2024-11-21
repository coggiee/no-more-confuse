import { useState } from "react";

export const useToggle = () => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  return {enabled, handleToggle};
};
