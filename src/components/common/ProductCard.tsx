import { cn } from "@/lib/utils";
import { product } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCard = ({
  product,
  variant,
}: {
  product: product;
  variant?: "sm";
}) => {
  return (
    <Link
      href={`product/${product.slug}`}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-md border border-border/60 bg-card shadow-lg",
        variant === "sm" && "text-xs",
      )}
    >
      <Image
        src={product.imgUrl}
        height={142}
        width={107}
        alt={product.title}
        className="aspect-[140/155] w-full overflow-hidden object-cover"
      />
      <div className="flex flex-col gap-0 p-1 px-2">
        <p className="truncate font-medium opacity-90">{product.title}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary">BDT{product.price}</span>
          <span className="text-sm font-medium">2.5 h</span>
        </div>

        <div className="flex flex-row items-center justify-between gap-1 pt-1">
          <span
            className={cn(
              "text-sm text-muted-foreground",
              variant === "sm" && "text-xs",
            )}
          >
            {product.condition}
          </span>
          <span
            className={cn(
              "truncate text-sm text-muted-foreground md:flex",
              variant === "sm" && "text-xs",
            )}
          >
            {product.location}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
