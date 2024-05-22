export type product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imgUrl: string;
  price: string;
  shopName: string;
  category: Category;
  location: string;
  condition: Condition;
};

export type Condition = "Used" | "Brand New" | string;

export type Category = {
  id: number;
  name: string;
};
