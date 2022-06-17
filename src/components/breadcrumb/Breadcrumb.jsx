import React from "react";
import { Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./Breadcrumb.css";

function Breadcrumbs() {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Component</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export default Breadcrumbs;
