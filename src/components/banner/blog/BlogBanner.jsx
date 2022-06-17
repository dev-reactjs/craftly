import React from "react";
import {
  BannerSection,
  MainContainer,
  BlogSearch,
  BannerTitle,
  SearchContainer,
  SearchButton,
  SearchInput,
} from "./BlogBannerStyle.js";

function BlogBanner({ searchBar, search, handleSubmit }) {
  return (
    <>
      <BannerSection>
        <MainContainer>
          <BlogSearch>
            <BannerTitle>
              Top product news, content marketing tips, and insights.
            </BannerTitle>

            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search Tools"
                value={search}
                onChange={searchBar}
              />
              <SearchButton type="submit" onClick={handleSubmit}>
                Search
              </SearchButton>
            </SearchContainer>
          </BlogSearch>
        </MainContainer>
      </BannerSection>
    </>
  );
}

export default BlogBanner;
