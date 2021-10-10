import React, { Dispatch, FC, SetStateAction } from "react";
import ModifyFontSize from "./ModifyFontSize";

type Props = {
  setFontSize: Dispatch<SetStateAction<number>>;
  fontSize: number;
  img: string | null;
};
const Preview: FC<Props> = ({ setFontSize, fontSize, img }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-24">
        <div className="mx-3">
          <div className="font-mono mb-2 text-2xl">Preview↓</div>
          <div className="font-mono">(長押しで保存)</div>
        </div>
        <ModifyFontSize setFontSize={setFontSize} fontSize={fontSize} />
      </div>
      {img && <img alt="icon" src={img} />}
    </div>
  );
};

export default Preview;
