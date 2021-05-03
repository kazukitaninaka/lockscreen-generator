import React, { FC, useEffect, useState } from "react";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseColor from "./components/ChooseColor";
import TextInput from "./components/TextInput";
import Preview from "./components/Preview";
// data
import { colorData } from "./data/colorData";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";

// library.add(fas);
interface sizeI {
  width: number;
  height: number;
}

const App: FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const [size, setSize] = useState<sizeI>({ width: 828, height: 1792 });
  const [selectedColor, setSelectedColor] = useState<string>("basic");
  const [fontSize, setFontSize] = useState<number>(50);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    // identify if user is using phone and set screen size
    if (window.navigator.userAgent.match(/(iPhone|iPod|Android.*Mobile)/i)) {
      setSize({
        width: window.screen.width * 2,
        height: window.screen.height * 2,
      });
    }

    const canvasElem = document.createElement("canvas");
    canvasElem.width = size.width;
    canvasElem.height = size.height;
    const ctx = canvasElem.getContext("2d");

    const color = colorData[selectedColor as keyof typeof colorData];

    // draw
    if (!ctx || !canvasElem) return;

    ctx.strokeStyle = color.fontColor;
    ctx.fillStyle = color.bg;
    ctx.fillRect(0, 0, size.width, size.height);
    ctx.strokeRect(0, 0, size.width, size.height);

    ctx.font = `${fontSize}px 'Hiragino Sans'`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = color.fontColor;

    if (content) {
      let lineHeight = 1.2;
      let yPosition = size.height * 0.3;
      const lines = content.split("\n");
      lines.forEach((line) => {
        yPosition += fontSize * lineHeight;
        ctx.fillText(
          line,
          size.width / 20,
          yPosition,
          size.width - (size.width / 20) * 2
        );
      });
    }

    setImg(canvasElem.toDataURL());
  }, [selectedColor, fontSize, content]);

  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  // handle font size
  const increaseFontSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFontSize((prev) => prev + 1);
  };
  const decreaseFontSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFontSize((prev) => prev - 1);
  };

  return (
    <div className="grid gap-y-4">
      <Header />
      <div id="container" className="container mx-auto px-1 grid gap-y-4">
        <ChooseColor handleColor={handleColor} selectedColor={selectedColor} />
        <TextInput handleTextarea={handleTextarea} content={content} />
        <Preview
          increaseFontSize={increaseFontSize}
          decreaseFontSize={decreaseFontSize}
          fontSize={fontSize}
          img={img}
        />
      </div>
      <Footer />
    </div>
  );
};
export default App;
