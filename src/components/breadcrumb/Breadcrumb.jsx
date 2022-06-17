import React from "react";
import { Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./Breadcrumb.css";

function Breadcrumbs() {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          Blog
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export default Breadcrumbs;
