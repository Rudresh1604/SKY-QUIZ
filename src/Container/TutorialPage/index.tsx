import React from "react";
import TutorialPageView from "../../Views/TutorialPage";
import { useNavigate } from "react-router-dom";

const TutorialPageContainer: React.FC = () => {
  const navigate = useNavigate();
  localStorage.setItem(
    "questions",
    JSON.stringify([
      {
        correctOptionsIndex: 0,
        options: [
          "Brendan Eich",
          "Tim Berners-Lee",
          "Linus Torvalds",
          "Guido van Rossum",
        ],
        question: "Who created JavaScript in 1995?",
      },
      {
        correctOptionsIndex: 2,
        options: [
          "Ada Lovelace",
          "Charles Babbage",
          "Alan Turing",
          "Grace Hopper",
        ],
        question:
          "Who is considered the father of theoretical computer science and artificial intelligence?",
      },
      {
        correctOptionsIndex: 3,
        options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"],
        question:
          "Who founded SpaceX and is known for his work in the field of space exploration and electric vehicles?",
      },
      {
        correctOptionsIndex: 1,
        options: [
          "Dennis Ritchie",
          "Guido van Rossum",
          "James Gosling",
          "Bjarne Stroustrup",
        ],
        question: "Who created the Python programming language?",
      },
      {
        correctOptionsIndex: 0,
        options: [
          "Linus Torvalds",
          "Richard Stallman",
          "Ken Thompson",
          "Brian Kernighan",
        ],
        question: "Who developed the Linux operating system?",
      },
    ])
  );

  const handleContinue: React.MouseEventHandler = (event) => {
    event.preventDefault();
    navigate("/game");
  };
  return (
    <div className="cloud-background">
      <TutorialPageView continueHandler={handleContinue} />
    </div>
  );
};

export default TutorialPageContainer;
