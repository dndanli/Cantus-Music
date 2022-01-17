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
      <h4>
        <FaCircle />
      </h4>
    </div>
  );
};

export default LinkContainer;
