import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing"; 
import Login from "./pages/login"; 
import Register from "./pages/register"; 
import Hospital from "./pages/hospital"; 
import Detail from "./pages/detail"; 







function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rumahSakit" element={<Hospital />} />
      <Route path="/detail" element={<Detail />} />





      </Routes>
    </Router>
  );
}

export default App; 