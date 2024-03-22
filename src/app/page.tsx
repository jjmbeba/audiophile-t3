import Categories from "./_components/categories/Categories";
import Hero from "./_components/hero/Hero";
import ProductPreviews from "./_components/product-previews/ProductPreviews";

export default async function Home() {
  return (
    <main className="*:px-[1.625rem] lg:*:px-[10.3125rem]">
      <Hero />
      <Categories />
      <ProductPreviews />
    </main>
  );
}
