import React from "react";

interface ImageProps {
  className?: any;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  src: any;
  alt?: any;
}

const ImageComponent: React.FC<ImageProps> = ({
  onClick,
  className,
  src,
  alt,
}) => {
  return (
    <div>
      <img
        onClick={onClick}
        className={className}
        src={src}
        alt={alt}
        srcSet=""
      />
    </div>
  );
};

export default ImageComponent;
