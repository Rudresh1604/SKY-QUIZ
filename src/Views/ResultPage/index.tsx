import React from "react";
import ResultBox from "../../Components/Custom/ResultBox";

interface ResultViewProps {
  answer?: number;
  className?: string;
  incorrect?: number;
}
const ResultPageView: React.FC<ResultViewProps> = ({
  answer,
  className,
  incorrect,
}) => {
  return (
    <>
      <div className="flex flex-col items-center background-green relative">
        <p className="absolute w-[302px]  h-[56px] top-[220px] left-[58px] text-[#FFFFFF] text-center text-[48px] font-extrabold leading-[55.8px] font-[Eraser]">
          GAME OVER
        </p>
        <ResultBox
          text="Wrong"
          answer={incorrect ? incorrect : 0}
          className="absolute left-[212px] top-[480px] bg-[#D8002F]"
        />
        <ResultBox
          text="Right"
          answer={answer ? answer : 0}
          className="left-[54px] top-[480px] bg-[#078F14]"
        />
      </div>
    </>
  );
};

export default ResultPageView;
