import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
function DiscHeader({ isClosed, title, onClick }) {
  return (
    <div className='w-full rounded border bg-gray-50 h-12 flex items-center px-5 justify-between'>
      <h2 className='text-xl'>
        What is <b className='text-blue-900 font-mono'>{title}</b> used for?
      </h2>
      <button
        className='p-2 rounded-full hover:bg-gray-200 text-black'
        onClick={onClick}
      >
        {isClosed ? (
          <ChevronUpIcon height={20} width={20} />
        ) : (
          <ChevronDownIcon height={20} width={20} />
        )}
      </button>
    </div>
  );
}

export default DiscHeader;
