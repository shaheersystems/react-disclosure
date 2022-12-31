import React from "react";

function DiscContent({ content, isClosed }) {
  return (
    <p className={` py-5 transition-all px-5 ${isClosed ? "hidden" : ""} `}>
      {content}
    </p>
  );
}

export default DiscContent;
