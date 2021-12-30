import { Dispatch, FC, SetStateAction } from "react";
import ModifyFontSize from "./ModifyFontSize";
import lockscreen from "../images/lockscreen.png";

type Props = {
  setFontSize: Dispatch<SetStateAction<number>>;
  fontSize: number;
  img: string | null;
};
const Preview: FC<Props> = ({ setFontSize, fontSize, img }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-24">
        <div className="mx-3">
          <div className="font-mono mb-2 text-2xl">Preview↓</div>
          <div className="font-mono">(長押しで保存)</div>
        </div>
        <ModifyFontSize setFontSize={setFontSize} fontSize={fontSize} />
      </div>
      <div className="relative">
        {img && <img alt="icon" src={img} className="z-10" />}
        <div className="absolute top-0 left-0 z-0">
          <img src={lockscreen} alt="lockscreen" />
        </div>
      </div>
    </>
  );
};

export default Preview;
