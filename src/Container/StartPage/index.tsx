import React from "react";
import StartPageView from "../../Views/StartPage";
import { useNavigate } from "react-router-dom";

const StartPageContainer = () => {
  const navigate = useNavigate();
  const handleContinue: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigate("/tutorial");
  };
  return (
    <div className="cloud-background">
      <StartPageView continueHandler={handleContinue} />
    </div>
  );
};

export default StartPageContainer;
