import React from "react";

interface ImageProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageProps> = ({
  onClick,
  className,
  src,
  alt,
  style,
}) => {
  return (
    <div>
      <img
        onClick={onClick}
        className={className}
        src={src}
        alt={alt}
        style={style}
      />
    </div>
  );
};

export default ImageComponent;
