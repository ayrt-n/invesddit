import { server, rest } from '../mocks/server';

function useLoadingHandler(url) {
  server.use(
    rest.get(url, async (req, res, ctx) => {
      return res(ctx.delay('infinite'), ctx.json({}))
    })
  );
}

export { useLoadingHandler }
