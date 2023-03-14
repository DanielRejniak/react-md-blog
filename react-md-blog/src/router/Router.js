import { Routes, Route } from "react-router-dom";

import Blog from "../pages/Blog";

function Router() {
  return (
    <div className="Router">
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Router;
