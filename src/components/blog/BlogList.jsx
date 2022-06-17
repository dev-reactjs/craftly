import React from "react";
import { formattingTag, formattingDate } from "../../methods";
import blogplaceholder from "../../images/blog_list_placeholder.png";
import {
  MainBlog,
  ListBlog,
  BlogLists,
  Img,
  BlogContent,
  Span,
  BlogTitle,
  InnerSection,
  AuthorSection,
} from "./BlogListStyle.js";

function BlogList({ blog }) {
  return (
    <>
      <MainBlog>
        <ListBlog>
          {blog?.map((res, i) => {
            return (
              <BlogLists key={i}>
                <Img src={blogplaceholder} />
                <BlogContent>
                  <Span>{formattingTag(res?.toolID)}</Span>
                  <BlogTitle>
                    <InnerSection>{res?.title}</InnerSection>
                  </BlogTitle>
                  <AuthorSection>
                    <span>{res?.author}</span>
                    <span>{formattingDate(res?.date)} </span>
                  </AuthorSection>
                </BlogContent>
              </BlogLists>
            );
          })}
        </ListBlog>
      </MainBlog>
    </>
  );
}

export default BlogList;
