import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
