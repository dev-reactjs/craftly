import React from "react";
import logo from "../../images/logo.svg";
import { MainHeader, Img, Div, HomeButton } from "./HeaderStyle.js";

function Headers() {
  return (
    <>
      <MainHeader>
        <Img src={logo} alt="craftly" preview={false} />
        <Div>
          <HomeButton>Login</HomeButton>
          <HomeButton color={"active"}>Sign Up</HomeButton>
        </Div>
      </MainHeader>
    </>
  );
}

export default Headers;
