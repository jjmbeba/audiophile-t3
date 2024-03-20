import { Metadata } from "next";
import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // const posts = await api.post.getAll();

  return <main>Home page</main>;
}
