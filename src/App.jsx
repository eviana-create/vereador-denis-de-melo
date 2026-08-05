import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/galeria" element={<Galeria />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;