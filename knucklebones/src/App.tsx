// =================================
//  IMPORTS
// =================================
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import RulesPage from "./Components/Pages/RulesPage";
import GamePage from "./Components/Pages/GamePage";

// =================================
//  COMPONENT
// =================================
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/game" element={<GamePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
