import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import defaultAvatar from '../../assets/icons/invesddit-logo.svg';
import { getCurrentAccountCommunities } from '../../services/accountService';
import { getCommunities } from '../../services/communityService';

// Custom placeholder
const CommunityPlaceholder = (props) => {
  return (
    <components.Placeholder {...props}>
        <div className="flex items-center h-full">
          <span className="rounded-full border-[1px] border-feed-text border-dashed w-[22px] h-[22px] leading-[22px]" />
          <div className="flex-1 pl-[8px] text-[14px] text-[#1c1c1c] font-medium leading-[18px] w-full align-middle">
            Choose a community
          </div>
        </div>
    </components.Placeholder>
  );
}

// Custom no options message
const NoCommunitiesMessage = (props) => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>No communities found</span>
    </components.NoOptionsMessage>
  );
}

// Custom option label for select
// If option is selected, only shows the label with avatar
// If option is in the menu it includes member count
const formatOptionLabel = ({ avatar, label, memberCount }, { context }) => {
  if (context === 'menu') {
    return (
      <div className="p-[8px] flex items-center overflow-hidden">
        <img src={avatar || defaultAvatar} alt="community logo" className="my-[2px] mr-[8px] max-h-[22px] max-w-[22px] rounded-full" />
        <div className="flex grow flex-col nowrap">
          <span className="text-[14px] font-medium leading-[18px] overflow-hidden text-ellipsis">
            {label}
          </span>
          <span className="text-meta-text text-[12px] leading-[16px] overflow-hidden text-ellipsis">
            {memberCount} members
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center overflow-hidden">
      <img src={avatar || defaultAvatar} alt="community logo" className="my-[2px] mr-[8px] max-h-[22px] max-w-[22px] rounded-full" />
      <div className="flex grow flex-col nowrap">
        <span className="text-[14px] font-medium leading-[18px] overflow-hidden text-ellipsis">
          {label}
        </span>
      </div>
    </div>
  );
};

// Community Select Component
function CommunitySelect({ value, onChange }) {
  const [accountCommunities, setAccountCommunities] = useState([]);
  useEffect(() => {
    getCurrentAccountCommunities().then(data => {
      setAccountCommunities(
        data.data.map((community) => {
          return {
            value: community.sub_dir,
            label: `c/${community.sub_dir}`,
            avatar: community.avatar,
            memberCount: community.memberships_count
          }
        })
      );
    })
  }, []);

  const searchCommunities = (value) => {
    return getCommunities(value).then(data => {
      const yourCommunities = { label: 'Your Communities', options: [] };
      const otherCommunities = { label: 'Other', options: [] };

      data.data.forEach((community) => {
        if (accountCommunities.find(c => c.value === community.sub_dir)) {
          yourCommunities.options.push({
            value: community.sub_dir,
            label: `c/${community.sub_dir}`,
            avatar: community.avatar,
            memberCount: community.memberships_count
          })
        } else {
          otherCommunities.options.push({
            value: community.sub_dir,
            label: `c/${community.sub_dir}`,
            avatar: community.avatar,
            memberCount: community.memberships_count
          })
        }});

      return [yourCommunities, otherCommunities];
    })
    .catch(err => {
      console.error(err);
    })
  };

  return (
    <AsyncSelect
      defaultOptions={[{label: 'Your Communities', options: accountCommunities}]}
      loadOptions={searchCommunities}
      value={value}
      onChange={(value) => onChange(value.value)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "#FFFFFF",
          border: "1px solid #EDEFF1",
          boxShadow: state.isFocused ? "0 0 2px 1px #EDEFF1" : "none",
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
          marginTop: "0",
          background: "#FFFFFF",
          border: "1px solid #EDEFF1",
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
        }),
        noOptionsMessage: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: "14px",
          fontWeight: "500",
          color: "#878A8C",
        }),
        groupHeading: (baseStyles, state) => ({
          ...baseStyles,
          padding: "8px 16px 3px",
          fontSize: "10px",
          fontWeight: "700",
          color: "#878A8C",
          textTransform: "uppercase",
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          display: state.selectProps.menuIsOpen ? 'none' : 'block',
        })
      }}
      formatOptionLabel={formatOptionLabel}
      hideSelectedOptions={true}
      components={{
        Placeholder: CommunityPlaceholder,
        NoOptionsMessage: NoCommunitiesMessage,
        IndicatorSeparator: () => null,
      }}
    />
  );
}

export default CommunitySelect;
