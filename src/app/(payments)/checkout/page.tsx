import { Metadata } from "next";
import CheckoutForm from "~/app/_components/checkout/CheckoutForm";
import GoBackButton from "~/app/_components/common/GoBackButton";

export const metadata: Metadata = {
  title: "Checkout",
};

const Checkout = () => {
  return (
    <main className="mt-8 md:mt-[3.5rem]">
      <div className="*:px-[1.625rem] lg:*:px-[10.3125rem]">
        <GoBackButton />
      </div>
      <CheckoutForm />
    </main>
  );
};

export default Checkout;
