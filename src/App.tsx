import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ResultPage from "./Pages/ResultPage";
import StartPage from "./Pages/StartPage";
import TutorialPage from "./Pages/TutorialPage";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div>
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/tutorial" element={<TutorialPage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
