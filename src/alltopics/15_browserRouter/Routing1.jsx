import MyNavbar from "./MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Signup from "../../pages/Signup";
import NotFound from "../../pages/NotFound";

const Routing1 = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing1;
