import React from "react";
import TutorialPageView from "../../Views/TutorialPage";
import { useNavigate } from "react-router-dom";

const TutorialPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleContinue: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigate("/result");
  };
  return (
    <div className="cloud-background">
      <TutorialPageView continueHandler={handleContinue} />
    </div>
  );
};

export default TutorialPageContainer;
