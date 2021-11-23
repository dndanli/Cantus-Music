import React from "react";
import { Boxes } from "../Box/BoxData";

type BoxProps = {
  className: string;
};

const Slider: React.FC<BoxProps> = ({ className }: BoxProps) => {
  return (
    <div className={className}>
      {Boxes.map((box, index) => {
        return <div key={index}>{box}</div>;
      })}
    </div>
  );
};

export default Slider;
