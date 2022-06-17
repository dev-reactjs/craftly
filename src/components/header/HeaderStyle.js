import styled from "styled-components";

export const MainHeader = styled.header`
  height: 100px;
  background-color: #ffffff;
  padding: 0px 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const Img = styled.img`
  height: 50px;
  margin: 28px 0px;
`;

export const Div = styled.div`
  padding: 30px 0px;
  height: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "active"
      ? props.theme.dark.primary
      : props.theme.dark.text};
  border: none;
  color: ${(props) =>
    props.color === "active"
      ? props.theme.light.primary
      : props.theme.light.text};
  padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px;
  border: 1px solid #9979fd;
`;
