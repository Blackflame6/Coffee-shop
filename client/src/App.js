import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes></Routes>
      </div>
    </Router>
  );
};

export default App;
