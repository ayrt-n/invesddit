import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${e.target.q.value}`);
  }

  return (
    <div className="group flex items-center bg-comment-controls border-[1px] border-nav-border rounded-[1.25em] shadow-none h-[40px] hover:border-primary-400 hover:bg-canvas-light focus-within:border-primary-400 focus-within:bg-canvas-light">
      <form onSubmit={handleSubmit} className="w-full flex">
          <label htmlFor="q" className="flex">
            <div aria-hidden="true" className="flex items-center pr-[9px] pl-[15px]">
              <svg className="h-[25px] w-[25px] leading-[20px] align-middle text-feed-text relative top-[1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>magnify</title>
                <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </div>
          </label>
          <input value={search} onChange={handleChange} autoComplete="off" id="q" name="q" type="search" placeholder="Search Invesddit" className="bg-comment-controls text-[14px] leading-[14px] mr-[16px] outline-none w-full group-hover:bg-canvas-light focus:bg-canvas-light placeholder-feed-text" />
      </form>
    </div>
  );
}

export default SearchBar;
