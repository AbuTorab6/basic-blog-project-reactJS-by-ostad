import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getNewPost } from "../../APIServices/APIService";
import Loader from "../Loader/Loader";

const BlogList = () => {
  var [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      var res = await getNewPost();
      console.log(res);
      setPost(res);
    })();
  }, []);

  return (
    <Fragment>
      {post === null ? (
        <Loader />
      ) : (
        <div>
          <div className="container mx-auto my-16 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {post.map((item, index) => {
                return (
                  <Link
                    key={item.id}
                    to={"post-details/" + item.id}
                    className="card w-100 glass"
                  >
                    <figure>
                      <img src={item.img} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p>{item.short}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BlogList;
