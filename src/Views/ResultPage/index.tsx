import React from "react";
import CoinHolder from "../../Components/Custom/CoinHolder";
import HintComponent from "../../Components/Custom/HintComponent";
import HeadingText from "../../Components/Base/Heading";
import ImageComponent from "../../Components/Custom/ImageComponent";
import OptionHolder from "../../Components/Custom/OptionHolder";

const ResultPageView: React.FC = () => {
  return (
    <div className="mt-5">
      <div className=" flex flex-col absolute top-16 right-avatar">
        <CoinHolder coin="22" />
        <HintComponent />
      </div>
      <div className="cloud-quiz-container">
        <div className="relative bg-[#1e3848] w-72 h-56 rounded-3xl">
          <HeadingText
            text="Where is India Located ?"
            className="text-2xl text-white absolute left-2 top-24 text-center font-bold"
          />
          <ImageComponent
            src="/src/Resources/Images/cloudIcon.png"
            className="cloud-content"
          />
        </div>
      </div>
      <div className="quiz-options">
        <div className="left-bird">
          <ImageComponent
            src="/src/Resources/Images/yellowBird.png"
            className="h-8 w-8 fly-bird"
          />
        </div>
        <div className="options">
          <OptionHolder />
        </div>
      </div>
    </div>
  );
};

export default ResultPageView;
