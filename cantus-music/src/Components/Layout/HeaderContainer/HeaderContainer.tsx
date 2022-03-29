import React from "react";

type HeaderProps = {
  className: string;
};

const HeaderContainer: React.FC<HeaderProps> = ({ className }: HeaderProps) => {
  return (
    <div className={className}>
      <a href="/" className="logo">
        <h2>Cantus</h2>
      </a>
    </div>
  );
};

export default HeaderContainer;
