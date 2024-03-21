import { Metadata } from "next";
import Link from "next/link";

import { api } from "~/trpc/server";
import Hero from "./_components/home/Hero";

export default async function Home() {
  return (
    <main className="*:px-[1.625rem]">
      <Hero />
    </main>
  );
}
