import React, { FC } from "react";
import ModifyFontSize from "./ModifyFontSize";

type Props = {
  increaseFontSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decreaseFontSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize: number;
  img: string | null;
};
const Preview: FC<Props> = (props) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-24">
        <div className="mx-3">
          <div className="font-mono mb-2 text-2xl">Preview↓</div>
          <div className="font-mono">(長押しで保存)</div>
        </div>
        <ModifyFontSize
          increaseFontSize={props.increaseFontSize}
          decreaseFontSize={props.decreaseFontSize}
          fontSize={props.fontSize}
        />
      </div>
      {props.img ? <img alt="icon" src={props.img} /> : null}
    </div>
  );
};

export default Preview;
