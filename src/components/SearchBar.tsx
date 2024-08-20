
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
          <div className="text-[#6B6B6B] flex border-none bg-[#EEEEEE] items-center justify-center pl-4 rounded-l-xl border-r-0">
            {/* Add search icon SVG here */}
          </div>
          <input
            placeholder="Search for a document"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border-none bg-[#EEEEEE] focus:border-none h-full placeholder:text-[#6B6B6B] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;