import React, { useState } from 'react';
import CommentMetaText from './CommentMetaText';
import CommentActions from './CommentActions';
import CollapsedCommentHeader from './CollapsedCommentHeader';
import CommentSidebar from './CommentSidebar';

function Comment({ comment }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => { setCollapsed((prev) => !prev) }
  
  const hasNestedComment = comment.comments.length > 0
  

  return (
    <div className="pt-[8px] pl-[8px] flex">
      {collapsed ? 
        <CollapsedCommentHeader comment={comment} toggleCollapse={toggleCollapse} /> :
        <CommentSidebar account={comment.account} toggleCollapse={toggleCollapse} />
      }
      <div className={`ml-[8px] max-w-[800px] ${collapsed ? 'hidden' : ''}`}>
        <CommentMetaText account={comment.account} createdAt={comment.created_at} />
        <div className="my-[2px] text-[14px] leading-[21px] break-words ">
          {comment.body}
        </div>
        <CommentActions score={comment.score} id={comment.id} />
        {hasNestedComment ?
          comment.comments.map((comment) => <Comment comment={comment} key={comment.id} />) :
          null
        }
      </div>
    </div>
  );
}

export default Comment;
