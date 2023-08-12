import axios from "axios";

var baseURL = "https://basic-blog.teamrabbil.com/api";

var getPostCategories = async () => {
  var res = await axios.get(baseURL + "/post-categories");

  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

var getNewPost = async () => {
  var res = await axios.get(baseURL + "/post-newest");

  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

var getPostByCategory = async (id) => {
  var res = await axios.get(baseURL + "/post-list/" + id);

  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
};

var getPostDetail = async (id) => {
  var res = await axios.get(baseURL + "/post-details/" + id);

  if (res.status === 200) {
    console.log("abc", res.data);
    return res.data;
  } else {
    return {};
  }
};

export { getPostCategories, getNewPost, getPostByCategory, getPostDetail };
