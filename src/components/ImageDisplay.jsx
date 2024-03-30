import React from "react";

const ImageDisplay = ({ selectedImage }) => {
  return (
    <div className="image-display">
      <img height={400} width={400} src={selectedImage} alt="Selected" />
    </div>
  );
};

export default ImageDisplay;
