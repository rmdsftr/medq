import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing"; 
import Login from "./pages/login"; 
import Register from "./pages/register"; 





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />



      </Routes>
    </Router>
  );
}

export default App; 