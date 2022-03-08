import { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};
