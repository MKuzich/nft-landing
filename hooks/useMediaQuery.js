import { useState, useEffect, useCallback } from "react";

export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};
