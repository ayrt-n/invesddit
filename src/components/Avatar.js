import React from 'react';
import defaultUserAvatar from '../assets/icons/invesddit-logo.svg';
import defaultCommunityAvatar from '../assets/icons/invesddit-logo.svg';

export default function Avatar({ classNames, src, alt }) {
  return (
    <img className={`rounded-full object-cover align-middle overflow-hidden ${classNames}`} src={src} alt={alt} />
  );
}

export function UserAvatar({ classNames, src, alt, ...props }) {
  return (
    <Avatar classNames={classNames} src={src || defaultUserAvatar} alt={alt} {...props} />
  );
}

export function CommunityAvatar({ classNames, src, alt, ...props }) {
  return (
    <Avatar classNames={classNames} src={src || defaultCommunityAvatar} alt={alt} {...props} />
  );
}
