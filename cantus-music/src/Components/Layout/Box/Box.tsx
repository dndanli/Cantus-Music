import React from "react";

type BoxProps = {
  boxArtWorkImg: string;
  imgAlt: string;
  boxDesc: string;
  className: string;
};

const Box: React.FC<BoxProps> = ({
  className,
  boxArtWorkImg,
  imgAlt,
  boxDesc,
}: BoxProps) => {
  return (
    <div className={className}>
      <picture>
        <img src={boxArtWorkImg} alt={imgAlt} />
      </picture>
      <div className="description">{boxDesc}</div>
    </div>
  );
};

export default Box;
