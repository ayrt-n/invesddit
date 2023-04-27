import { rest } from 'msw';
import { config } from '../services/constants';
import commentData from './data/comments.json';

const API_URL = config.urls.API_URL;

export const handlers = [
  rest.get(`${API_URL}/api/v1/posts/:post_id/comments`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(commentData)
    )
  }),

  rest.post(`${API_URL}/api/v1/posts/:post_id/comments`, async (req, res, ctx) => {
    const { body } = await req.json()
    const { postId } = req.params

    return res(
      ctx.status(200),
      ctx.json(
        {
          "id": 999999,
          "post_id": postId,
          "body": body,
          "score": 0,
          "created_at": "2023-03-21T11:40:14.012Z",
          "status": "published",
          "vote_status": null,
          "account": {
              "id": 999999,
              "username": "testUser",
              "avatar": null,
              "created_at": "2023-03-21T11:40:13.323Z"
          },
          "comments": []
        }
      )
    )
  }),

  rest.delete(`${API_URL}/api/v1/posts/:post_id`, async (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.post(`${API_URL}/api/v1/posts/:post_id/votes`, async (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.delete(`${API_URL}/api/v1/posts/:post_id/votes`, async (req, res, ctx) => {
    return res(ctx.status(204));
  }),
]
