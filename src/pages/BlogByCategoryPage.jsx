import React from "react";

import { useParams } from "react-router-dom";

import Navigation from "../components/MasterLayout/Navigation";
import BlogByCategory from "../components/BlogList/BlogByCategory";

const BlogByCategoryPage = () => {
  return (
    <div>
      <Navigation>
        <BlogByCategory />
      </Navigation>
    </div>
  );
};

export default BlogByCategoryPage;
