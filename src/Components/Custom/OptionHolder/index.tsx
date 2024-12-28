import React from "react";
import HeadingText from "../../Base/Heading";

interface OptionHolderProps {
  optionName: string;
  optionColor: string;
  optionContent: any;
  className?: string;
}

const OptionHolder: React.FC<OptionHolderProps> = ({
  optionName,
  optionContent,
  optionColor,
  className,
}) => {
  return (
    <div
      className={`w-52 h-10 my-16 flex justify-between items-center rounded-3xl bg-white ${className}`}
    >
      <div className="rounded  flex items-center">
        <div
          className="rounded-full text-center ml-1 w-8 h-8 flex items-center justify-center"
          style={{ backgroundColor: optionColor }} // Apply background color inline
        >
          <HeadingText text={optionName} className="text-white" />{" "}
        </div>
        <HeadingText
          text={optionContent}
          className="font-normal text-2xl text-center ml-2"
        />
      </div>
    </div>
  );
};

export default OptionHolder;
