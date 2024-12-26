import React from "react";
import HeadingText from "../../Base/Heading";

interface OptionHolderProps {
  optionName: string;
  optionColor: string;
  optionContent: any;
}

const OptionHolder: React.FC<OptionHolderProps> = ({
  optionName,
  optionContent,
  optionColor,
}) => {
  return (
    <div className="w-52 h-10 flex justify-between items-center rounded-3xl bg-white">
      <div className="rounded">
        <HeadingText
          text={optionName}
          className={`rounded-full text-center ml-1 bg-[${optionColor}] w-8 h-8`}
        />
        <HeadingText
          text={optionContent}
          className="font-normal text-2xl text-center "
        />
      </div>
    </div>
  );
};

export default OptionHolder;
