import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Billing from "./pages/Billing";
import BillHistory from "./pages/BillHistory";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/billHistory" element={<BillHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
