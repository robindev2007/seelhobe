"use client";
import React from "react";
import { getTopDealsProducts } from "../actions/products-action";
import ProductCard from "@/components/common/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fakeAdData } from "@/lib/constance";
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";

const Featured = () => {
  //   const products = await getTopDealsProducts();

  return (
    <div className="w-full">
      <H2>Featured</H2>
      <Carousel>
        <CarouselContent className="ml-0">
          {fakeAdData.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-[30%] pl-1 lg:basis-1/3"
            >
              <ProductCard product={product} variant={"sm"} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Featured;
