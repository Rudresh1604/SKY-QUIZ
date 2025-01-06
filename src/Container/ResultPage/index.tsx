import React from "react";
import ResultPageView from "../../Views/ResultPage";
import { useSelector } from "react-redux";
import { myState } from "../../redux/store";

const ResultPageContainer: React.FC = () => {
  const gamescore = useSelector((state: myState) => state.root.gamescore);
  const totalQuestion = useSelector(
    (state: myState) => state.root.totalQuestion
  );
  let incorrect = totalQuestion - gamescore;

  return (
    <div className="cloud-background-result">
      <ResultPageView answer={gamescore} incorrect={incorrect} />
    </div>
  );
};

export default ResultPageContainer;
