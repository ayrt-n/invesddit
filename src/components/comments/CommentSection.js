import React from 'react';
import CommentController from './CommentController';
import CommentForm from './CommentForm';
import Comment from './Comment';

function CommentSection() {
  const comments = [
    {
      id: 1,
      created_at: '2023-01-27T13:32:04.743',
      score: 12,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      account: {
        username: 'finance_dude',
        created_at: '2023-01-27T13:32:04.743',
        id: 1
      },
      comments: [
        {
          id: 1,
          created_at: '2023-01-27T13:32:04.743',
          score: 12,
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          account: {
            username: 'finance_dude',
            created_at: '2023-01-27T13:32:04.743',
            id: 1
          },
          comments: [{
            id: 1,
            created_at: '2023-01-27T13:32:04.743',
            score: 12,
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            account: {
              username: 'finance_dude',
              created_at: '2023-01-27T13:32:04.743',
              id: 1
            },
            comments: []
          }]
        },
        {
          id: 1,
          created_at: '2023-01-27T13:32:04.743',
          score: 12,
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          account: {
            username: 'finance_dude',
            created_at: '2023-01-27T13:32:04.743',
            id: 1
          },
          comments: []
        }
      ]
    },
    {
      id: 1,
      created_at: '2023-01-27T13:32:04.743',
      score: 12,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      account: {
        username: 'finance_dude',
        created_at: '2023-01-27T13:32:04.743',
        id: 1
      },
      comments: []
    }
  ]

  return (
    <>
      <div className="my-[24px] mr-[40px] ml-[48px]">
        <CommentForm />
      </div>
      <div className="border-b-[1px] mx-[48px] mb-[4px] pr-[16px]">
        <CommentController />
      </div>
      <div className="pr-[16px] pb-[16px] mt-[16px] mr-[16px] ml-[10px]">
        {comments.map((comment) => {
          return (
            <div className="mt-[16px]" key={comment.id}>
              <Comment comment={comment} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommentSection;
