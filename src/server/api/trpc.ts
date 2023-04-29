import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

// eslint-disable-next-line
type CreateContextOptions = {};

const createInnerTRPCContext = async (_opts: CreateContextOptions) => {
	return {};
};

export const createTRPCContext = async (_opts: CreateNextContextOptions) => {
	return await createInnerTRPCContext({});
};

import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC
	.context<Awaited<ReturnType<typeof createTRPCContext>>>()
	.create({
		transformer: superjson,
		errorFormatter({ shape }) {
			return shape;
		},
	});

export const router = t.router;
export const publicProcedure = t.procedure;
