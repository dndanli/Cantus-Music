import React from "react";
import { NavItems } from "./NavbarItems";

type NavbarProps = {
  className: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={className}>
      <ul className="nav-ul">
        {NavItems.map((value) => {
          return (
            <li className="nav-link" key={value.id}>
              {<value.icon />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
