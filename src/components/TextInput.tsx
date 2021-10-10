import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setContent: Dispatch<SetStateAction<string>>;
  content: string;
};

const TextInput: FC<Props> = ({ setContent, content }) => {
  return (
    <>
      <div className="font-mono text-2xl mb-2 mx-3">Text↓</div>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        className="border w-full h-40"
        cols={20}
        value={content}
      ></textarea>
    </>
  );
};

export default TextInput;
