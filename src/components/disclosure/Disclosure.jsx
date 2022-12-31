import React from "react";
import DiscContent from "./DiscContent";
import DiscHeader from "./DiscHeader";
function Disclosure({ title, isClosed, content, onClick }) {
  return (
    <div className='w-full rounded h-fit flex p-2 items-center flex-col'>
      <DiscHeader isClosed={isClosed} title={title} onClick={onClick} />
      <DiscContent isClosed={isClosed} content={content} />
    </div>
  );
}

export default Disclosure;
