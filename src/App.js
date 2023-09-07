import "./App.css";
import Admission_form from "./components/admission_form/Admission_form";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admission" element={<Admission_form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
