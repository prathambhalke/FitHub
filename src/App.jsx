import { Route, Routes } from "react-router-dom";
import { Footer, Home, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
