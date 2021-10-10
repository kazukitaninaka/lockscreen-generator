import { useEffect, useState } from "react";

type Size = {
  width: number;
  height: number;
};

const useImageSize = () => {
  const [size, setSize] = useState<Size>({ width: 828, height: 1792 });

  useEffect(() => {
    // identify if user is using phone and set image size
    if (window.navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)) {
      setSize({
        width: window.screen.width * 2,
        height: window.screen.height * 2,
      });
    }
  }, []);
  return size;
};

export default useImageSize;
