import axios from "axios";

export const fetchApi = () => {
  /* fetching data from tools*/
  return axios
    .get("https://craftly.free.beeceptor.com/tools")
    .then((res) => res);
};

export const fetchBlog = () => {
  /*fetching data from blogs */
  return axios
    .get("https://craftly.proxy.beeceptor.com/blogs")
    .then((res) => res);
};
