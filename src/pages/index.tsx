import { api } from "@/utils/api";
import Head from "next/head";

export default function Home() {
	const query = api.hello.useQuery();
	return (
		<>
			<Head>
				<title>Create D App</title>
				<meta name="description" content="Generated by create D app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					gap: "16px",
					height: "100vh",
					fontFamily: "sans-serif",
				}}
			>
				<h1>Create D App</h1>
				<p>Tauri (native and mobile) + Next.js + tRPC</p>
				<p>{query.isLoading && "loading..."}</p>
				<code>{query.data}</code>
			</main>
		</>
	);
}
