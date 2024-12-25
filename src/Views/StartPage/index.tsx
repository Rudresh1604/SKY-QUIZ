import ImageComponent from "../../Components/Custom/ImageComponent";

const StartPageView = () => {
  return (
    <div className="sky-quiz-container flex flex-col cloud-background">
      <ImageComponent
        src="src\Resources\Images\Sky Quiz.png"
        className="w-full h-full"
        alt="Blue Bird"
      />
      <div className="flex justify-center mt-2">
        <ImageComponent
          src="src\Resources\Images\blueBird.png"
          className="w-20 h-14"
          alt="Bird Image"
        />
      </div>
    </div>
  );
};

export default StartPageView;
