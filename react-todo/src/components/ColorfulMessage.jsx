import React from "react";

export const ColorfulMessage = (props) => {
  const {color, children} = props;
  const ContentStyle = {
    color,
    fontSize: "18px"
  };

  return (
    <p style={ContentStyle}>{children}</p>
  )
};

