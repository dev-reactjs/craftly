import React from "react";
import logo from "../../images/logo.svg";
import { MainHeader, Img, Div, Button } from "./HeaderStyle.js";

function Header() {
  return (
    <>
      <MainHeader>
        <Img src={logo} alt="craft" />
        <Div>
          <Button>Login</Button>
          <Button color={"active"}>Sign Up</Button>
        </Div>
      </MainHeader>
    </>
  );
}

export default Header;
