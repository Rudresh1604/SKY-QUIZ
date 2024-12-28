import { FC } from "react";
import ImageComponent from "../../Components/Custom/ImageComponent";
import { motion } from "framer-motion";

interface StartViewProps {
  continueHandler: React.MouseEventHandler;
}

const StartPageView: FC<StartViewProps> = ({ continueHandler }) => {
  return (
    <div className="sky-quiz-container flex flex-col justify-center">
      <motion.div
        initial={{ x: "-100%", display: "none" }}
        animate={{ display: "block", x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center sky-quiz-start"
      >
        <ImageComponent
          src="src\Resources\Images\Sky Quiz.png"
          className="w-full h-full px-3"
          alt="Blue Bird"
        />
        <div className="flex justify-center mt-2">
          <ImageComponent
            src="src\Resources\Images\blueBird.png"
            className="w-20 h-14 my-3 mb-5"
            alt="Bird Image"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ y: "100vh", opacity: 1 }} // Start from the bottom, fully visible
        animate={{ y: "-15vh" }}
        exit={{ y: "100vh", opacity: 1 }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <ImageComponent
          src="/src/Resources/Images/taptcontinue.png"
          className="px-7 tap"
          onClick={continueHandler}
        />
      </motion.div>
    </div>
  );
};

export default StartPageView;
