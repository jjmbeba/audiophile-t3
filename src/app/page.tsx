import Categories from "./_components/categories/Categories";
import Hero from "./_components/hero/Hero";

export default async function Home() {
  return (
    <main className="*:px-[1.625rem] lg:*:px-[10.3125rem]">
      <Hero />
      <Categories />
    </main>
  );
}
