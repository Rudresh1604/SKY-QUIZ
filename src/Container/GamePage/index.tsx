import React, { useEffect, useState } from "react";
import GamePageView from "../../Views/GamePage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameScore, setTotalQuestion } from "../../redux/rootSlice";

const questionsString = localStorage.getItem("questions");

const questions = JSON.parse(questionsString);

console.log(questions);

const transformQuestionFormat = (question) => {
  return {
    question: question.question,
    options: question.options.map((option, index) => ({
      name: String.fromCharCode(65 + index), // Convert index to A, B, C, etc.
      optionContent: option,
      top: [58, 138, 225, 310][index], // Specific top positions for A, B, C, D
      isCorrect: index === question.correctOptionsIndex,
      optionColor: "#FFCC3E",
    })),
  };
};

const GamePageContainer: React.FC = () => {
  const [birdTop, setBirdTop] = useState(173);
  const [birdLeft, setBirdLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerVisible, setAnswerVisible] = useState(false);
  let newBirdTop = 173;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentQuestion = transformQuestionFormat(
    questions[currentQuestionIndex]
  );
  const checkPosition = () => {
    return currentQuestion.options.find((option) => option.top === newBirdTop);
  };
  const handleKeyPress = (event: KeyboardEvent) => {
    if (isAnswerVisible) {
      return;
    }
    // A: top 58
    // B: top 138
    // C: top 225
    // D: top 310
    if (event.key === "ArrowUp") {
      setCount((prevCount) => {
        if (prevCount === 0) {
          setBirdTop(58);
          console.log("Move to A");
          newBirdTop = 58;
          return 1; // Move to A
        } else if (prevCount === -2) {
          newBirdTop = 225;
          setBirdTop(225);
          console.log("Move to C");
          return -1; // Move to C
        } else if (prevCount === -1) {
          newBirdTop = 138;
          console.log("Move to B");
          setBirdTop(138);
          return 0; // Move to B
        }
      });
    } else if (event.key === "ArrowDown") {
      setCount((prevCount) => {
        if (prevCount === 1) {
          setBirdTop(138);
          newBirdTop = 138;
          return 0; // Move to B
        } else if (prevCount === 0) {
          newBirdTop = 225;
          setBirdTop(225);
          return -1; // Move to C
        } else if (prevCount === -1) {
          newBirdTop = 310;
          setBirdTop(310);
          return -2; // Move to D
        } else {
          // newBirdTop = 58;
          // setBirdTop(58);
          // return 1; // Move to A
        }
      });
    } else if (event.key === "ArrowRight") {
      setBirdLeft(158);
      const option = checkPosition();
      console.log(option);

      if (option) {
        const isCorrect =
          currentQuestion.options.findIndex(
            (opt) => opt.optionContent === option.optionContent
          ) === questions[currentQuestionIndex].correctOptionsIndex;
        if (isCorrect) {
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
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isAnswerVisible]);

  useEffect(() => {
    if (isAnswerVisible) {
      setTimeout(() => {
        loadNextQuestion();
      }, 5000);
    }
  }, [isAnswerVisible]);

  const loadNextQuestion = () => {
    setAnswerVisible(false);
    setBirdTop(173);
    setBirdLeft(0);
    setCount(0);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      dispatch(setGameScore(score));
      dispatch(setTotalQuestion(questions.length));
      console.log("Quiz completed!");
      navigate("/result");
    }
  };

  return (
    <div className="cloud-background-result">
      <GamePageView
        options={currentQuestion.options}
        isAnswerVisible={isAnswerVisible}
        setAnswerVisible={setAnswerVisible}
        birdLeft={birdLeft}
        birdTop={birdTop}
        question={currentQuestion.question}
      />
    </div>
  );
};

export default GamePageContainer;
