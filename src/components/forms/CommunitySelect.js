import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import logo from '../../assets/icons/invesddit-logo.svg';
import { getCurrentAccountCommunities } from '../../services/accountService';

const formatOptionLabel = ({ value, avatar, label, memberCount }) => (
  <div className="p-[8px] flex items-center overflow-hidden">
    <img src={avatar || logo} alt="community logo" className="my-[2px] mr-[8px] max-h-[22px] max-w-[22px] rounded-full" />
    <div className="flex grow flex-col nowrap">
      <span className="text-[14px] font-medium leading-[18px] overflow-hidden text-ellipsis">
        {label}
      </span>
    </div>
  </div>
);

function CommunitySelect({ value, onChange }) {
  const [accountCommunities, setAccountCommunities] = useState([]);
  useEffect(() => {
    getCurrentAccountCommunities().then(data => {
      setAccountCommunities(
        data.data.map((community) => {
          return {
            value: community.sub_dir,
            label: `c/${community.sub_dir}`,
            avatar: community.avatar
          }
        })
      );
    })
  }, []);

  return (
    <Select
      placeholder="Choose a community"
      options={accountCommunities}
      value={value}
      onChange={(value) => onChange(value.value)}
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
      hideSelectedOptions={true}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default CommunitySelect;
