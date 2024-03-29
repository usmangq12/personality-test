import FormComponent from "./Components/QuestionsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Result } from "./Components/Result";
import { useState } from "react";
import "./App.css";

function App() {
  const [isFinish, setFinishStatus] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="questions"
          element={<FormComponent setFinishStatus={setFinishStatus} />}
        />
        <Route path="/result" element={<Result isFinish={isFinish} />} />
      </Routes>
    </Router>
  );
}

export default App;
