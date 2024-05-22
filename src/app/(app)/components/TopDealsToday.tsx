import React from "react";
import { getTopDealsProducts } from "../actions/products-action";
import ProductCard from "@/components/common/ProductCard";

const TopDealsToday = async () => {
  const products = await getTopDealsProducts();
  return (
    <div>
      <h2 className="my-1 text-xl font-semibold text-opacity-90">
        Best products
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopDealsToday;
