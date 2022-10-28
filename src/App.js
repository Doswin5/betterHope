import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homef/Homepage";
import Campaigns from "./Pages/Campaignsf/Campaings";
import Aboutus from "./Pages/Aboutusf/Aboutus";
import Faq from "./Pages/Faqf/Faq";
import Blog from "./Pages/Blogf/Blog";
import Donate from "./Pages/Donatef/Donate";
import Donateitem from "./Pages/Donateitems/Donateitem";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Campaigns" element={<Campaigns />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Donateitem" element={<Donateitem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
