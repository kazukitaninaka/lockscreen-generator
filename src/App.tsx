import React, { FC, useEffect, useState } from "react";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseColor from "./components/ChooseColor";
import TextInput from "./components/TextInput";
import Preview from "./components/Preview";
// data
import { colorData } from "./data/colorData";
import useImageSize from "./hooks/useImageSize";

const App: FC = () => {
  const [img, setImg] = useState<string | null>(null);
  const size = useImageSize();
  const [selectedColor, setSelectedColor] = useState<string>("basic");
  const [fontSize, setFontSize] = useState<number>(50);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const canvasElm = document.createElement("canvas");
    canvasElm.width = size.width;
    canvasElm.height = size.height;
    const color = colorData[selectedColor as keyof typeof colorData];
    const ctx = canvasElm.getContext("2d");

    // draw
    if (!ctx || !canvasElm) return;

    ctx.strokeStyle = color.fontColor;
    ctx.fillStyle = color.bgColor;
    ctx.fillRect(0, 0, size.width, size.height);
    ctx.strokeRect(0, 0, size.width, size.height);

    ctx.font = `${fontSize}px 'Hiragino Sans'`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = color.fontColor;

    if (content) {
      let lineHeight = 1.2;
      let yPosition = size.height * 0.8;
      const lines = content.split("\n").reverse();
      lines.forEach((line) => {
        yPosition -= fontSize * lineHeight;
        ctx.fillText(
          line,
          size.width / 10,
          yPosition,
          size.width - (size.width / 10) * 2
        );
      });
    }

    setImg(canvasElm.toDataURL());
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
      <div id="container" className="container-sm mx-auto px-1 grid gap-y-4">
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
