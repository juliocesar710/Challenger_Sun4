import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Q1Page from "./pages/Question_1/Q1Page";
import Q2Page from "./pages/Question_2/Q2Page";
import Q3Page from "./pages/Question_3/Q3Page";
import Q4Page from "./pages/Question_4/Q4Page";
import Q5Page from "./pages/Question_5/Q5Page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 8 }}>
        <Link to="/">Q1</Link>
        <Link to="/q2">Q2</Link>
        <Link to="/q3">Q3</Link>
        <Link to="/q4">Q4</Link>
        <Link to="/q5">Q5</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Q1Page />} />
        <Route path="/q2" element={<Q2Page />} />
        <Route path="/q3" element={<Q3Page />} />
        <Route path="/q4" element={<Q4Page />} />
        <Route path="/q5" element={<Q5Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;