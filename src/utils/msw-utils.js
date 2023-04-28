import { server, rest } from '../mocks/server';

function useLoadingHandler(url) {
  server.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.delay('infinite'), ctx.json({}))
    })
  );
}

function useEmptyResponse(url) {
  server.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({data: []}))
    })
  );
}

export { useLoadingHandler, useEmptyResponse }
