import { publicProcedure, router } from "./trpc";

export const appRouter = router({
	hello: publicProcedure.query(async () => {
		return "Hello from tRPC!";
	}),
});

export type AppRouter = typeof appRouter;
