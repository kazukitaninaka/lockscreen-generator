import React, { FC } from "react";

interface IProps {
  handleTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  content: string;
}

const TextInput: FC<IProps> = (props) => {
  return (
    <div>
      <div className="font-mono text-2xl mb-2 mx-3">Text↓</div>
      <textarea
        onChange={props.handleTextarea}
        className="border w-full h-40"
        cols={20}
        value={props.content}
      ></textarea>
    </div>
  );
};

export default TextInput;
