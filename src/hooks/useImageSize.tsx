import { useEffect, useState } from "react";

type ImageSize = {
  width: number;
  height: number;
};

function useCanvas(): ImageSize {
  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 828,
    height: 1792,
  });

  useEffect(() => {
    // identify if user is using phone and set image size
    if (window.navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)) {
      setImageSize({
        width: window.screen.width * 2,
        height: window.screen.height * 2,
      });
    }
  }, []);

  return imageSize;
}

export default useCanvas;
