import React from "react";
import HeadingText from "../../Components/Base/Heading";
import ImageComponent from "../../Components/Custom/ImageComponent";

const TutorialPageView: React.FC = () => {
  return (
    <div className="tutorial-container ">
      <div className="tutorial-heading-container">
        <HeadingText text="Tutorial" className="text-center" />
      </div>
      <div className="tutorial-content">
        <div className="tutorial-content-direction">
          <ImageComponent
            src="/src/Resources/Images/upicon.png"
            className="w-20 h-20"
          />
          <div className="tutorial-up-content">
            <HeadingText
              text="Press"
              className="text-white text-center text-2xl font-normal"
            />
            <ImageComponent
              src="/src/Resources/Images/blueBird.png"
              className="w-16 h-12"
            />
            <HeadingText
              text="To fly"
              className="text-white text-center text-2xl font-normal"
            />
          </div>
          <ImageComponent
            src="/src/Resources/Images/downIcon.png"
            className="w-20 h-20"
          />
        </div>
        <div className="down-content-info">
          <div className="down-content-direction">
            <ImageComponent
              src="/src/Resources/Images/goIcon.png"
              className="h-20 w-20"
            />
            <HeadingText
              text="/"
              className="text-white font-normal text-8xl "
            />
            <ImageComponent
              src="/src/Resources/Images/enterIcon.png"
              className="w-20 h-20"
            />
          </div>
          <HeadingText
            text="To choose the correct answer"
            className="font-normal text-2xl mt-2 text-white w-full text-center"
          />
        </div>
      </div>

      <ImageComponent
        src="/src/Resources/Images/taptcontinue.png"
        className="tutorial-tap"
      />
    </div>
  );
};

export default TutorialPageView;
