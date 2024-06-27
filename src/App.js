import Aboutus from "./Components/Aboutus/Aboutus";
import Connectus from "./Components/Connectus/Connectus";
import Home from "./Components/Home/Home";
import Pricing from "./Components/Pricing/Pricing";
import Signup from "./Components/Signup/Signup";
import Layout from "./Layout/Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout siteName={"Company"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/connect" element={<Connectus />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
