import React from "react";
import ImageComponent from "../ImageComponent";

const HintComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-12 h-28">
      <ImageComponent
        src="/src/Resources/Images/hintIcon.png"
        className="w-12 h-12"
      />
      <ImageComponent
        src="/src/Resources/Images/powerUpIcon.png"
        className="w-12 h-12"
      />
    </div>
  );
};

export default HintComponent;
