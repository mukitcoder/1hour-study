import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Login/Register";
import AllCourses from "./components/Courses/AllCourses";




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="allCourses" element={<AllCourses />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
