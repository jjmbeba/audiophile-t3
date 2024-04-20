import ThankYouModal from "./_components/checkout/ThankYouMessage";
import Categories from "./_components/home/categories/Categories";
import CTA from "./_components/home/cta/CTA";
import Hero from "./_components/home/hero/Hero";
import ProductPreviews from "./_components/home/product-previews/ProductPreviews";

export default function Home() {
  return (
    <main className="*:px-[1.625rem] lg:*:px-[10.3125rem]">
      <Hero />
      <Categories />
      <ProductPreviews />
      <CTA />
      <ThankYouModal />
    </main>
  );
}
