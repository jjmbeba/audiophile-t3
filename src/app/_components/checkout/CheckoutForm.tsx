"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import validator from "validator";
import { z } from "zod";

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

import { useState } from "react";
import { Input } from "~/components/ui/input";
import { RouterOutputs, api } from "~/trpc/react";
import CartSummary from "./CartSummary";

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
  country: z.string().min(1, {
    message: "Country is required",
  }),
  city: z.string().min(1, {
    message: "City is required",
  }),
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

  type Country = RouterOutputs["country"]["getAvailableCountries"][number];

  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    undefined,
  );
  const { isLoading: isFetchCountriesLoading, data: countries } =
    api.country.getAvailableCountries.useQuery();

  const country = useWatch({
    control: form.control,
    name: "country",
  });

  return (
    <div className="">
      <div className="mx-[1.625rem] mt-[1.9375rem] px-3 py-6 lg:mx-[10.3125rem]">
        <h4>CHECKOUT</h4>
        <p className="mt-10 font-bold text-primary">BILLING DETAILS</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-[8.0625rem] space-y-8"
        >
          <div className="mx-[1.625rem] rounded-[0.5rem] bg-white px-3 py-6 lg:mx-[10.3125rem]">
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
                    onValueChange={(countryID) => {
                      const country = countries?.find(
                        (country) => country.id.toString() === countryID,
                      );
                      setSelectedCountry(country);
                      field.onChange(countryID);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger isFetching={isFetchCountriesLoading}>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries?.map((country) => (
                        <SelectItem
                          key={country.id}
                          value={country.id.toString()}
                        >
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger disabled={!selectedCountry}>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedCountry?.cities.map(({ id, name }) => (
                        <SelectItem value={id.toString()}>{name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <CartSummary />
          <div className="mx-[1.625rem] lg:mx-[10.3125rem] ">
            <Button className="w-full" type="submit">
              CONTINUE & PAY
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
