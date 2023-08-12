import React, { Fragment } from "react";

import Navigation from "../components/MasterLayout/Navigation";
import BlogDetail from "../components/BlogDetail/BlogDetail";
const BlogDetailPage = () => {
  return (
    <Fragment>
      <Navigation>
        <BlogDetail />
      </Navigation>
    </Fragment>
  );
};

export default BlogDetailPage;
