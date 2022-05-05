import {
  SideNavigation,
  SideNavigationItem
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Menu() {
    const navigate = useNavigate();
    const [action, setAction] = useState("/");

   const onSelectionChange = (event: any) => {
    setAction("/");
    navigate("/");
  }


    return (
      <SideNavigation onSelectionChange={onSelectionChange}>
        <SideNavigationItem text="Home" icon="home" />
        <SideNavigationItem text="Login" icon="customer" />
        <SideNavigationItem text="Privacy Policy" icon="private" />
        <SideNavigationItem text="App Support" icon="headset" />
      </SideNavigation>
    );

}

export default Menu;
