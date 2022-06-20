import styled from "styled-components";
import { Card } from "antd";

const { Meta } = Card;

export const ToolSection = styled.div`
  margin-top: 23px;
  box-shadow: 0px 23.5px 23.5px rgba(95, 103, 117, 7%);
  min-height: 300px;
  padding: 30px 0;
  margin-bottom: 100px;
`;

export const ToolMain = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const ToolTitle = styled.h3`
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  color: #2b2a35;
  text-align: center;
  margin: 0 0 20px 0;
`;

export const ToolListSection = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const ToolList = styled.li`
  list-style: none;
`;

export const ParticularList = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
  
  flex-direction: column;
  display: flex;
  width: 214px;
  height: 211px;
  border-radius: 15px;
  border: 1.5px solid #eeeeee;
  justify-content: space-between;
  padding: 30px 30px 17.24px 30px;
  color: ${(props) => (props.active ? "#fff" : "#282B3F")};
  text-decoration: none;
  background: ${(props) => props.active && "#8878F9"};
  background: ${(props) =>
    props.active && "linear-gradient(90deg, #8878F9 0%, #6C5AFB 100%)"};
  box-shadow: ${(props) =>
    props.active && "0px 23.5px 23.5px rgba(95, 103, 117, 7%)"};
  &:hover {
    color: #fff !important;
    background: #8878f9;
    background: linear-gradient(90deg, #8878f9 0%, #6c5afb 100%);
    box-shadow: 0px 23.5px 23.5px rgba(95, 103, 117, 7%);
    .ant-card-meta-title{
      color:#fff
    }
  }
`;

export const Img = styled.img`
  width: 55px;
`;

export const Para = styled(Meta)`
  .ant-card-meta-title {
    margin: 0px;
    padding: 0px;
    min-height: 70px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    word-break: ${(props) =>
      props.break === "word_break" ? "break-all" : "none"};
    white-space: break-spaces;
  }
`;