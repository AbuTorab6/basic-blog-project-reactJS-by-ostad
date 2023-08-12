import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogListPage from "../pages/BlogListPage";
import BlogByCategoryPage from "../pages/BlogByCategoryPage";
import BlogDetailPage from "../pages/BlogDetailPage";

const MyRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route
            path="/byCategory/:categoryId"
            element={<BlogByCategoryPage />}
          />
          <Route path="/post-details/:blogId" element={<BlogDetailPage />} />
          <Route
            path="/byCategory/:categoryId/post-details/:blogId"
            element={<BlogDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MyRouter;
