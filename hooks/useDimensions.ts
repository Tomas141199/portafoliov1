import { useEffect, useRef } from "react";

export const useDimensions = (ref:any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window != null) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, []);

  return dimensions.current;
};
