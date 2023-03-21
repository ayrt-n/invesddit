import React from 'react';
import { useSearchParams } from 'react-router-dom';
import hotSelected from '../assets/icons/hot-selected.png';
import hotUnselected from '../assets/icons/hot-unselected.png';
import newSelected from '../assets/icons/new-selected.png';
import newUnselected from '../assets/icons/new-unselected.png';
import topSelected from '../assets/icons/top-selected.png';
import topUnselected from '../assets/icons/top-unselected.png';

function FeedController() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Change value of ?sort_by=x search param on click
  // Maintains value of other search params
  const handleClick = (value) => {
    setSearchParams(searchParams => {
      searchParams.set('sort_by', value);
      return searchParams;
    });
  };

  // Get sortBy value based on searchParams OR default to hot
  const sortBy = searchParams.get('sort_by') || 'hot';

  return (
    <div className="bg-canvas-light border-[1px] border-post-border rounded-[4px] mb-[16px] py-[10px] px-[12px] flex items-center">
      <div className="items-center flex cursor-pointer text-[14px] font-noto ">
        {/* Sory by Hot */}
        <button onClick={() => handleClick('hot')} className={`inline-flex py-[6px] px-[8px] rounded-[20px] font-bold leading-[17px] items-center justify-center w-auto mr-[8px] hover:bg-gray-200 focus:bg-gray-300 ${sortBy === 'hot' ? 'bg-gray-100 text-gray-100 hover:text-gray-200 focus:text-gray-300' : 'bg-inherit text-feed-text'}`}>
          {sortBy === 'hot' ?
            <img src={hotSelected} alt="rocketship emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" /> :
            <img src={hotUnselected} alt="rocketship emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" />
          }
          <span className={`overflow-hidden text-ellipsis mr-[3px] max-h-[54px] text-left ${sortBy === 'hot' ? 'text-primary-500' : 'text-feed-text'}`}>Hot</span>
        </button>

        {/* Sort by New */}
        <button onClick={() => handleClick('new')} className={`inline-flex py-[6px] px-[8px] rounded-[20px] font-bold leading-[17px] items-center justify-center w-auto mr-[8px] hover:bg-gray-200 focus:bg-gray-300 ${sortBy === 'new' ? 'bg-gray-100 text-gray-100 hover:text-gray-200 focus:text-gray-300' : 'bg-inherit text-feed-text'}`}>
          {sortBy === 'new' ?
            <img src={newSelected} alt="star emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" /> :
            <img src={newUnselected} alt="star emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" />
          }
          <span className={`overflow-hidden text-ellipsis mr-[3px] max-h-[54px] text-left ${sortBy === 'new' ? 'text-primary-500' : 'text-feed-text'}`}>New</span>
        </button>

        {/* Sort by Top */}
        <button onClick={() => handleClick('top')} className={`inline-flex py-[6px] px-[8px] rounded-[20px] font-bold leading-[17px] items-center justify-center w-auto mr-[8px] hover:bg-gray-200 focus:bg-gray-300 ${sortBy === 'top' ? 'bg-gray-100 text-gray-100 hover:text-gray-200 focus:text-gray-300' : 'bg-inherit text-feed-text'}`}>
          {sortBy === 'top' ?
            <img src={topSelected} alt="chart emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" /> :
            <img src={topUnselected} alt="chart emoji" className="w-[20px] h-[20px] mr-[8px] leading-[20px]" />
          }
          <span className={`overflow-hidden text-ellipsis mr-[3px] max-h-[54px] text-left ${sortBy === 'top' ? 'text-primary-500' : 'text-feed-text'}`}>Top</span>
        </button>
      </div>
    </div>
  );
}

export default FeedController;
