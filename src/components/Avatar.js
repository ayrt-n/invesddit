import React from 'react';
import defaultUserAvatar from '../assets/icons/invesddit-logo.svg';
import defaultCommunityAvatar from '../assets/icons/invesddit-logo.svg';
import classNames from 'classnames';

export default function Avatar({ className, src, alt }) {
  const defaultClasses = "rounded-full object-cover align-middle overflow-hidden";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <img className={mergedClasses} src={src} alt={alt} />
  );
}

export function UserAvatar({ className, src, alt, ...props }) {
  return (
    <Avatar className={className} src={src || defaultUserAvatar} alt={alt} {...props} />
  );
}

export function CommunityAvatar({ className, src, alt, ...props }) {
  return (
    <Avatar className={className} src={src || defaultCommunityAvatar} alt={alt} {...props} />
  );
}
