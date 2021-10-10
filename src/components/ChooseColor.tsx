import React, { Dispatch, FC, SetStateAction } from "react";
import { colorData } from "../data/colorData";

type Props = {
  setSelectedColor: Dispatch<SetStateAction<string>>;
  selectedColor: string;
};

const ChooseColor: FC<Props> = ({ setSelectedColor, selectedColor }) => {
  return (
    <div className="mb-5">
      <div className="font-mono text-2xl mb-2 mx-3">Color↓</div>
      <div className="grid grid-cols-3 gap-1.5">
        {Object.keys(colorData).map((colorName: string) => {
          const color = colorData[colorName as keyof typeof colorData];
          const isSelected = selectedColor === colorName;
          const borderBlack = isSelected ? "border-black" : null;

          return (
            <label
              key={colorName}
              htmlFor={colorName}
              className={`border p-2 text-center ${borderBlack}`}
              style={{
                backgroundColor: color.bgColor,
                color: color.fontColor,
              }}
            >
              <input
                type="radio"
                name="color"
                value={colorName}
                id={colorName}
                className="hidden"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSelectedColor(e.target.value)
                }
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
