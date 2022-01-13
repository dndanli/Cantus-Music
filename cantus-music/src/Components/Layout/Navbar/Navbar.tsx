import React from "react";
import { NavItems } from "./NavbarItems";

const Navbar: React.FC = () => {
  return (
    <ul>
      {NavItems.map((value) => {
        return <li key={value.id}>{<value.icon />}</li>;
      })}
    </ul>
  );
};

export default Navbar;
