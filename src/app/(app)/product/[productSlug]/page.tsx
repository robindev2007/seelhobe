import { fakeAdData } from "@/lib/constance";
import Image from "next/image";
import React from "react";
import H1 from "@/components/ui/h1";

const ProductPage = ({
  params: { productSlug },
}: {
  params: { productSlug: string };
}) => {
  const product = fakeAdData[2];
  return (
    <div>
      <H1>{product.title}</H1>
      <Image
        src={product.imgUrl}
        height={200}
        width={200}
        alt={product.title}
      />
    </div>
  );
};

export default ProductPage;
