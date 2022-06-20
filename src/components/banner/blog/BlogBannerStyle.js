import styled from "styled-components";
import { Input} from 'antd';
import card from "../../../images/banner_card_bg.svg";
import icon from "../../../images/banner_top_bg.svg";
import hand from "../../../images/banner_hand_bg.svg";


const { Search } = Input;

export const BannerSection = styled.div`
  width: 100%;
  background: rgb(106, 86, 245);
  background: linear-gradient(
    90deg,
    rgba(106, 86, 245, 1) 0%,
    rgba(118, 83, 242, 1) 50.3%,
    rgba(129, 80, 238, 1) 100%
  );
  position: relative;
  &:before {
    background: url(${card}) no-repeat;
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 279px;
    height: 382px;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  min-height: 450px;
  &:before {
    background: url(${icon}) no-repeat;
    top: 0;
    position: absolute;
    content: "";
    width: 230px;
    height: 223px;
  }
  &:after{
    background: url(${hand}) no-repeat;
    left: 35px;
    position: absolute;
    content: '';
    bottom: -25px;
    width: 166px;
    height: 210px;
`;

export const BlogSearch = styled.div`
  max-width: 724px;
  margin: 0 auto;
  padding-top: 70.5px;
`;
export const BannerTitle = styled.h2`
  font-size: 55px;
  font-weight: 600;
  line-height: 125%;
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const SearchContainer = styled.div`
  max-width: 639px;
  margin: 0 auto;
  position: relative;
`;

export const SearchInput = styled(Search)`
  height: 62px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  border: 0px;
  &:focus {
    outline: none;
  }
  .ant-input-group .ant-input{
    height:62px;
    border-radius:15px 0 0 15px;
    width:88%;
    border:0
  }
  .ant-input-group-addon{
    border-radius:15px;
  }
  .ant-input-search .ant-input:hover, .ant-input-search .ant-input:focus{
    border-color:white;
  }
  .ant-input-group .ant-input:hover{
    z-index:0;
  }
`;

export const SearchButton = styled.button`
  background: rgb(106, 86, 245);
  background: linear-gradient(-20deg, #fec724 0%, #feda34 44.45%, #fff148 100%);
  position: absolute;
  height: 100%;
  border: 0px;
  right: 0;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  width: 107px;
  border-radius: 0 15px 15px 0;
  font-size: 16px;
  color: #7451ed;
  line-height: 24px;
  &:hover {
    background: #8878f9;
    background: linear-gradient(285.83deg, #9278F9 -34.95%, #6C5AFB 92.08%);
    box-shadow:0px 34px 35px -23.4967px rgba(95, 103, 117, 0.25);
    color: #fff !important;
  }
`;
