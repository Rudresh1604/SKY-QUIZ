import ImageComponent from "../../Components/Custom/ImageComponent";

const StartPageView = () => {
  return (
    <div className="sky-quiz-container flex flex-col justify-center">
      <div className="flex flex-col justify-center sky-quiz-start">
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
      </div>
      <ImageComponent
        src="/src/Resources/Images/taptcontinue.png"
        className="px-7 tap"
      />
    </div>
  );
};

export default StartPageView;
