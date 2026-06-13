import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Billing from "./pages/Billing";
import BillHistory from "./pages/BillHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/billHistory" element={<BillHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
