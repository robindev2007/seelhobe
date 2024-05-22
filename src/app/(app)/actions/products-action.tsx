"use server";

import { fakeAdData } from "@/lib/constance";
import { product } from "@/type/product";

export const getTopDealsProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = (await res.json()) as product[];

  return fakeAdData;
};
