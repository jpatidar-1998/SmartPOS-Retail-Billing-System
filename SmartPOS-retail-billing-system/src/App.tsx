import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Billing from "./pages/Billing";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
