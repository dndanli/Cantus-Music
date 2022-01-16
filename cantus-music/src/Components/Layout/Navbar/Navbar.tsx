import React from "react";
import { NavItems } from "./NavbarItems";
import { Link } from "react-router-dom";

type NavbarProps = {
  className: string;
};

const paths: string[] = ["/discover", "/search", "/library", "/download"];

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
  return (
    <div className={className}>
      <ul className="nav-ul">
        {NavItems.map((value, idx) => {
          return (
            <li
              className="nav-link"
              id={value.id.toLocaleString()}
              key={value.id}
            >
              <Link to={paths[idx]}>{<value.icon />}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
