import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";

function Router() {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Router;
