import "./App.css";
import FormComponent from "./Components/FormComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Result } from "./Components/Result";
import { useState } from "react";
function App() {
  const [isFinish, setFinishStatus] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="showForm"
          element={<FormComponent setFinishStatus={setFinishStatus} />}
        />
        <Route path="/result" element={<Result isFinish={isFinish} />} />
      </Routes>
    </Router>
  );
}

export default App;
