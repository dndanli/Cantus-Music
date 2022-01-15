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

      <div className="listen-in-app-btn">
        <h2>Listen in app</h2>
      </div>
    </div>
  );
};

export default HeaderContainer;
