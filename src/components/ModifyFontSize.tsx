import { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setFontSize: Dispatch<SetStateAction<number>>;
  fontSize: number;
};

const ModifyFontSize: FC<Props> = ({ setFontSize, fontSize }) => {
  return (
    <div>
      <div className="font-mono mb-2">文字の大きさ</div>
      <div className="flex">
        <button
          onClick={() => setFontSize((prev) => prev - 1)}
          disabled={fontSize <= 1}
        >
          <FontAwesomeIcon icon={faMinusSquare} size="lg" />
        </button>
        <input
          type="number"
          value={fontSize}
          readOnly
          className="text-xl mx-2 w-10 text-center"
        />
        <button onClick={() => setFontSize((prev) => prev + 1)}>
          <FontAwesomeIcon icon={faPlusSquare} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ModifyFontSize;
