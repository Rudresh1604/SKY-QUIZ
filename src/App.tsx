import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./Pages/StartPage";
import TutorialPage from "./Pages/TutorialPage";

import { AnimatePresence } from "framer-motion";
import GamePage from "./Pages/GamePage";
import ResultPage from "./Pages/ResultPage";

function App() {
  return (
    <div className="App">
      <div>
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/tutorial" element={<TutorialPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
