import React, { useEffect, useState } from "react";
import ResultPageView from "../../Views/ResultPage";

const ResultPageContainer: React.FC = () => {
  const [birdTop, setBirdTop] = useState(140);
  const [birdLeft, setBirdLeft] = useState(0);
  const [count, setCount] = useState(0);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      console.log("Up key");
      // top pos 70px
      if (count == 0) {
        setCount(1);
        setBirdTop(70);
        console.log(count);
      } else if (count == -1) {
        setCount(count + 1);
        setBirdTop(140);
      } else if (count > 1 || count < -1) {
        setCount(0);
        setBirdTop(140);
      }
      console.log(count);
      // if (birdTop >= 70 && birdTop <= 266) {
      //   setBirdTop(birdTop - 70);
      // }
    } else if (event.key === "ArrowDown") {
      // down pos 266px
      console.log(count);

      if (count == 0) {
        setCount(-1);
        setBirdTop(266);
      } else if (count == 1) {
        setCount(0);
        setBirdTop(140);
      } else if (count > 1 || count < -1) {
        setCount(0);
        setBirdTop(140);
      }

      console.log("Down key");
      console.log(count);
    } else if (event.key === "ArrowRight") {
      // left pos is 158px
      setBirdLeft(100);
      console.log("Right key");
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
      <ResultPageView birdLeft={birdLeft} birdTop={birdTop} />
    </div>
  );
};

export default ResultPageContainer;
