import React from "react";
import { NavItems } from "./NavbarItems";

const Navbar: React.FC = () => {
  return (
    <ul>
      {NavItems.map((value, idx: number) => {
        return (
          //TODO: fix index key prop
          <li key={idx}>{value.text}</li>
        );
      })}
    </ul>
  );
};

export default Navbar;
