import React, { FC } from "react";
import { colorData } from "../data/colorData";

interface IProps {
  handleColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedColor: string;
}

const ChooseColor: FC<IProps> = (props: any) => {
  return (
    <div className="mb-5">
      <div className="font-mono text-2xl mb-2 mx-3">Color↓</div>
      <div className="grid grid-cols-3 gap-1.5">
        {Object.keys(colorData).map((colorName: string) => {
          const color = colorData[colorName as keyof typeof colorData];
          const isSelected = props.selectedColor === colorName;
          const borderBlack = isSelected ? "border-black" : null;

          return (
            <label
              key={colorName}
              htmlFor={colorName}
              className={`border p-2 text-center ${borderBlack}`}
              style={{
                backgroundColor: color.bg,
                color: color.fontColor,
              }}
            >
              <input
                type="radio"
                name="color"
                value={colorName}
                id={colorName}
                className="hidden"
                // checked={isSelected}
                onChange={props.handleColor}
                aria-label="choose-color"
              />
              {colorName}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseColor;
