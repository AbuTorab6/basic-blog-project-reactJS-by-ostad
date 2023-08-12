import React, { Fragment, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { getPostDetail } from "../../APIServices/APIService";
import Loader from "../Loader/Loader";

const BlogDetail = () => {
  var blogId = useParams().blogId;
  var [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("calling");
      var res = await getPostDetail(blogId);
      setBlogDetail(res);
    })();
  }, [blogId]);

  return (
    <Fragment>
      {blogDetail === null ? (
        <Loader />
      ) : (
        <div className="container mx-auto my-16 p-9">
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <figure>
              <img src={blogDetail.postDetails.img} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blogDetail.postDetails.title}</h2>
              <p>{blogDetail.postDetails.content}</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BlogDetail;
