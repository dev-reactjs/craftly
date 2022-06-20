import styled from "styled-components";
import { Card } from "antd";

const { Meta } = Card;

export const MainBlog = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const ListBlog = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BlogLists = styled(Card)`
  max-width: 379px;
  border-radius: 15px;
  border: 0;
  margin-bottom: 25px;
  .ant-card-body {
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 0;
  vertical-align: top;
`;

export const BlogContent = styled.div`
  padding-top: 16px;
`;

export const Span = styled.span`
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.17);
  padding: 4px 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

export const BlogTitle = styled.h4`
  margin-top: 16px;
  font-size: 24px;
  line-height: 36px;
  max-width: 379px;
  font-weight: 600;
  color: #2b2a35;
  min-height: 108px;
  margin-bottom: 16px;
  &:hover {
    color: #9979fd;
  }
`;

export const InnerSection = styled.a`
  color: #2b2a35;
  text-decoration: none;
`;

export const AuthorSection = styled.div`
  min-height: 36px;
  display: flex;
  line-height: 36px;
  color: #2b2a35;
  justify-content: space-between;
  font-size: 16px;
`;
