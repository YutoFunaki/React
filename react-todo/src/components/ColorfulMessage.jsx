import React from "react";

const ColorfulMessage = (props) => {
  const {color, children} = props;
  const ContentStyle = {
    color,
    fontSize: "18px"
  };

  return (
    <p style={ContentStyle}>{children}</p>
  )
};

export default ColorfulMessage;