import React from "react";
import { FaCircle } from "react-icons/fa";

type LinkContainerProps = {
  className: string;
  linkName: string;
};
const LinkContainer: React.FC<LinkContainerProps> = ({
  className,
  linkName,
}: LinkContainerProps) => {
  return (
    <div className={className}>
      <h3>{linkName}</h3>
      <FaCircle className="link-circle-icon" />
    </div>
  );
};

export default LinkContainer;
