import React, { useState, useEffect } from "react";
import { fetchApi, fetchBlog } from "../Api";
import { toolsImage } from "../methods";
import { formattingTag } from "../methods";
import BlogBanner from "../components/banner/blog/BlogBanner";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BrowseTool from "../components/tool/BrowseTool";
import BlogList from "../components/blog/BlogList";

function Blog() {
  const [tools, setTools] = useState([]);
  const [blog, setBlog] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);
  const [search, setSearch] = useState("");
  const [toolId,setToolId] = useState("");

  const isBlog = blog.length > 0 ? true : false;
  const isTools = tools.length > 0 ? true : false;

  useEffect(() => {
    /* fetching data from Api*/
    fetchApi().then((res) => {
      /* inserting image into data */
      let tooldata = toolsImage(res);
      /* setting tool data in state*/
      setTools(tooldata);
    });

    /* fetching data from Api*/
    fetchBlog().then((res) => {
      let data = res?.data?.blogs;
      /* setting blog data in state*/
      setBlog(data);
      setFilterBlog(data);
    });
  }, []);

  /* shorting tools blogs  */
  const handleTools = (id) => {
    setToolId(id)
    let filter = blog.filter((res) => res.toolID === id);
    setFilterBlog(filter);
  };

  /* searching tools blogs  */
  const onSubmit = () => {
    let filter = blog.filter((res) => {
      let strings = formattingTag(res.toolID);
      search.toLowerCase();
      let captilize = search[0].toUpperCase() + search.slice(1);
      if (strings.includes(captilize)) {
        return res;
      }
    });

    setFilterBlog(filter);
  };

  return (
    <>
      <BlogBanner
        searchBar={(e) => setSearch(e.target.value)}
        search={search}
        handleSubmit={onSubmit}
      />
      <Breadcrumb />
      {isTools && (
        <BrowseTool tools={tools} onClickTools={(id) => handleTools(id)} toolId={toolId}/>
      )}
      {isBlog && <BlogList blog={filterBlog} />}
    </>
  );
}

export default Blog;
