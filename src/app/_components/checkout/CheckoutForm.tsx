"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import axios from "axios";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { Input } from "~/components/ui/input";

type Country = {
  name: {
    official: string;
    common: string;
  };
};

const checkoutSchema = z.object({
  name: z.string().min(2, {
    message: "Name should be at least 2 characters",
  }),
  email: z.string().email(),
  phone: z.string().refine(validator.isMobilePhone),
  address: z.string().min(1, {
    message: "Address is required",
  }),
  zipCode: z.string().min(2, {
    message: "Zip code is required",
  }),
  country: z.string(),
  city: z.string(),
  paymentMethod: z.string(),
});
const CheckoutForm = () => {
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      country: "",
      city: "",
      paymentMethod: "",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    console.log(values);
  }

  const { data: countries, isLoading: fetchCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async ():Promise<Country[]> => {
      return axios
        .get<Country[]>("https://restcountries.com/v3.1/all")
        .then((res) => {
            return res.data
        });
    },
  });

  if (countries) {
    console.log(countries[0]);
  }

  return (
    <div className=" *:mx-[1.625rem] *:rounded-[0.5rem] *:bg-white *:px-3 *:py-6 lg:*:mx-[10.3125rem]">
      <div className="mt-[1.9375rem]">
        <h4>CHECKOUT</h4>
        <p className="mt-10 font-bold text-primary">BILLING DETAILS</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Moi avenue, Nairobi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="0712345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="00100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries?.map(({ name }: Country) => (
                      <SelectItem key={name.official} value={name.official}>
                        {name.official}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            CONTINUE & PAY
          </Button>
        </form>
      </Form>
      {/* <CartSummary /> */}
    </div>
  );
};

export default CheckoutForm;
