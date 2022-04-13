import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer/Footer";
import './styles/app.css';
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
