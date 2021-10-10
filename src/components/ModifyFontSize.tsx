import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  increaseFontSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decreaseFontSize: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fontSize: number;
};

const ModifyFontSize: FC<Props> = (props) => {
  return (
    <div>
      <div className="font-mono mb-2">文字の大きさ</div>
      <div className="flex">
        <button onClick={props.decreaseFontSize}>
          <FontAwesomeIcon icon={faMinusSquare} size="lg" />
        </button>
        <input
          type="number"
          value={props.fontSize}
          readOnly
          className="text-xl mx-2 w-10 text-center"
        />
        <button onClick={props.increaseFontSize}>
          <FontAwesomeIcon icon={faPlusSquare} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ModifyFontSize;
