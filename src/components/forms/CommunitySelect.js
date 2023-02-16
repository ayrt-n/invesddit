import React from 'react';
import Select from 'react-select';
import logo from '../../assets/icons/invesddit-logo.svg';

const formatOptionLabel = ({ value, imgSrc, label, memberCount }) => (
  <div className="p-[8px] flex items-center overflow-hidden">
    <img src={imgSrc} alt="community logo" className="my-[2px] mr-[8px] max-h-[22px] max-w-[22px] rounded-full" />
    <div className="flex grow flex-col nowrap">
      <span className="text-[14px] font-medium leading-[18px] overflow-hidden text-ellipsis">
        {label}
      </span>
    </div>
  </div>
);

function CommunitySelect({ setCommunity }) {
  const communities = [
    { value: 'GOOG', label: 'c/GOOG', imgSrc: logo, memberCount: 10 },
    { value: 'TSLA', label: 'c/TSLA', imgSrc: logo, memberCount: 10 },
    { value: 'AAPL', label: 'c/AAPL', imgSrc: logo, memberCount: 10 },
    { value: 'KO', label: 'c/KO', imgSrc: logo, memberCount: 10 },
  ];

  const handleChange = (value) => {
    setCommunity(value.value);
  }

  return (
    <Select
      placeholder="Choose a community"
      defaultValue=""
      options={communities}
      onChange={handleChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "#FFFFFF",
          border: state.isSelected ? "1px solid red" : "1px solid #EDEFF1",
          boxShadow: state.isSelected ? "0 -3px 0 -1px #FFFFFF, 0 0 2px 1px #EDEFF1" : "none",
          minHeight: "40px",
          "&:hover": {
            borderColor: "#EDEFF1"
          },
          "&:focus": {
            boxShadow: "0 -3px 0 -1px #FFFFFF, 0 0 2px 1px #EDEFF1",
          }
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          marginTop: "-4px",
          background: "#FFFFFF",
          border: "1px solid #EDEFF1",
          borderTop: "none",
          borderTopRightRadius: "0px",
          borderTopLeftRadius: "0px",
          borderBottomRightRadius: "4px",
          borderBottomLeftRadius: "4px",
          overflow: "hidden",
          boxShadow: "0 -3px 0 -1px #FFFFFF, 0 0 2px 1px #EDEFF1",
        }),
        menuList: (baseStyles, state) => ({
          ...baseStyles,
          border: "none",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          background: "#FFFFFF",
          padding: "0",
          border: "none",
          "&:hover": {
            background: "#FFFFFF"
          }
        })
      }}
      formatOptionLabel={formatOptionLabel}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default CommunitySelect;
