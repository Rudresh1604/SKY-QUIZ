import { FC } from "react";

interface HeadingTextProps {
  text: string;
  className?: any;
}

const HeadingText: FC<HeadingTextProps> = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

export default HeadingText;
