import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import DropdownMenu from '../dropdown/DropdownMenu';
import DropdownItem from '../dropdown/DropdownItem';
import ConfirmationButton from '../ConfirmationButton';

function CommentDropdown({ deleteComment, editComment }) {
  const dropdownButton = <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
                           <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                         </svg>

  return (
    <Dropdown dropdownPrompt={dropdownButton}>
      <DropdownMenu>
        {editComment &&
          <DropdownItem>
            <button onClick={editComment} className="flex items-center">
              <span className="mr-[6px]">
                <svg className="h-[20px] w-[20px] leading-[20px] align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>pencil-outline</title>
                  <path fill="currentColor" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
                </svg>
              </span>
              <span>
                Edit Comment
              </span>
            </button>
          </DropdownItem>
        }

        {deleteComment &&
          <DropdownItem>
            <ConfirmationButton
              onClick={deleteComment}
              modalHeader="Delete comment?"
              modalMessage="Are you sure you want to delete your comment? You can't undo this."
              modalActionText="Delete comment"
              className="flex items-center"
            >
              <span className="mr-[6px]">
                <svg className="h-[20px] w-[20px] leading-[20px] align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>trash-can-outline</title>
                  <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                </svg>
              </span>
              <span>
                Delete
              </span>
            </ConfirmationButton>
          </DropdownItem>
        }
      </DropdownMenu>
    </Dropdown>
  );
}

export default CommentDropdown;
