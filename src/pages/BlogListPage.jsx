import React, { Fragment } from "react";

import Navigation from "../components/MasterLayout/Navigation";
import BlogList from "../components/BlogList/BlogList";

const BlogListPage = () => {
  return (
    <div>
      <Navigation>
        <BlogList />
      </Navigation>
    </div>
  );
};

export default BlogListPage;
