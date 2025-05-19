import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing"; 
import Login from "./pages/login"; 




function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App; 