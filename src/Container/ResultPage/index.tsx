import React, { useEffect, useState } from "react";
import ResultPageView from "../../Views/ResultPage";

const ResultPageContainer: React.FC = () => {
  const [birdTop, setBirdTop] = useState(173);
  const [birdLeft, setBirdLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  let newBirdTop = 173;
  const [isAnswerVisible, setAnswerVisible] = useState(false);
  const options = [
    {
      name: "A",
      top: 70,
      optionColor: "#FFCC3E",
      optionContent: "Delhi",
      isCorrect: true,
      background: "red",
    },
    {
      name: "B",
      top: 173,
      optionColor: "#FFCC3E",
      optionContent: "Mumbai",

      isCorrect: false,
      background: "green",
    },
    {
      name: "C",
      top: 266,
      optionColor: "#FFCC3E",
      optionContent: "China",
      isCorrect: false,
      background: "red",
    },
  ];

  const checkPosition = () => {
    for (const option of options) {
      if (option.top == newBirdTop) {
        console.log(option);
        return option;
      }
    }
    return null;
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (isAnswerVisible) {
      return;
    }
    if (event.key === "ArrowUp") {
      setCount((prevCount) => {
        if (prevCount === 0) {
          setBirdTop(70);
          newBirdTop = 70;
          return 1;
        } else if (prevCount === -1) {
          newBirdTop = 173;
          setBirdTop(173);
          return 0;
        } else {
          newBirdTop = 173;
          setBirdTop(173);
          return 0;
        }
      });
    } else if (event.key === "ArrowDown") {
      setCount((prevCount) => {
        if (prevCount === 0) {
          setBirdTop(266);
          newBirdTop = 266;
          return -1;
        } else if (prevCount === 1) {
          newBirdTop = 173;
          setBirdTop(173);
          return 0;
        } else {
          newBirdTop = 173;
          setBirdTop(173);
          return 0;
        }
      });
    } else if (event.key === "ArrowRight") {
      setBirdLeft(158);
      const option = checkPosition();

      if (option) {
        if (option.isCorrect == true) {
          setScore((prevScore) => {
            const newScore = prevScore + 1;
            console.log("Updated Score:", newScore);
            return newScore;
          });
        }
        setTimeout(() => {
          setAnswerVisible(true);
        }, 500);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    // left pos is 158px
    // top pos 70px
    // down pos 266px
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="cloud-background-result">
      <ResultPageView
        options={options}
        isAnswerVisible={isAnswerVisible}
        setAnswerVisible={setAnswerVisible}
        birdLeft={birdLeft}
        birdTop={birdTop}
      />
    </div>
  );
};

export default ResultPageContainer;
