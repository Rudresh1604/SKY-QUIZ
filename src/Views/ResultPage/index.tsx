import React from "react";
import CoinHolder from "../../Components/Custom/CoinHolder";
import HintComponent from "../../Components/Custom/HintComponent";
import HeadingText from "../../Components/Base/Heading";
import ImageComponent from "../../Components/Custom/ImageComponent";
import OptionHolder from "../../Components/Custom/OptionHolder";
import { motion } from "framer-motion";

interface ResultPageViewProps {
  handleKeyPress?: (event: KeyboardEvent) => void;
  birdTop: number;
  birdLeft: number;
  options?: any;
  isAnswerVisible?: boolean;
  setAnswerVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResultPageView: React.FC<ResultPageViewProps> = ({
  birdLeft,
  birdTop,
  options,
  isAnswerVisible,
  setAnswerVisible,
}) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col absolute top-16 right-avatar">
        <CoinHolder coin="22" /> <HintComponent />
      </div>
      <div className="cloud-quiz-container">
        {/* Cloud Icon (Stationary and Above the Background) */}
        <ImageComponent
          src="/src/Resources/Images/cloudIcon.png"
          className="cloud-content z-10"
        />

        <motion.div
          className="absolute bg-[#1e3848] w-72 h-56 rounded-3xl z-0"
          initial={{ scale: 0.1, x: "20%", y: "50%", opacity: 0 }}
          animate={
            isAnswerVisible
              ? { scale: 0.2, x: "20%", y: "50%", opacity: 0 }
              : { scale: 1, x: 0, y: "0%", opacity: 1 }
          }
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
          style={{
            top: -1,
            left: 70,
          }}
          // onAnimationComplete={() => {
          //   if (isAnswerVisible) {
          //     setAnswerVisible(false);
          //   }
          // }}
        > 
          <HeadingText
            text="Where is India Located?"
            className="text-2xl text-white absolute left-2 top-24 text-center font-bold"
          />
        </motion.div>
      </div>
      ;
      <div className="quiz-options">
        <div className="left-bird">
          <ImageComponent
            src="/src/Resources/Images/yellowBird.png"
            className={`h-8 w-8 absolute`}
            style={{
              top: `${birdTop}px`,
              left: `${birdLeft}px`,
              transition: "top 0.5s, left 0.5s",
            }}
          />
        </div>
        <motion.div
          initial={{ x: "100%", y: 0, opacity: 0 }}
          animate={
            isAnswerVisible
              ? { x: "-100%", y: 0, opacity: 0 }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 3, ease: "easeInOut" }}
          className="options"
        >
          {options?.map((option) => (
            <OptionHolder
              optionColor={option.optionColor}
              optionName="A"
              className={
                isAnswerVisible
                  ? option.isCorrect
                    ? "bg-green-400"
                    : "bg-red-600"
                  : ""
              }
              optionContent={option.optionContent}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResultPageView;
