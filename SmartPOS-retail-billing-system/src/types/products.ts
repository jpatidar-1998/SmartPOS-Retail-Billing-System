export type ProductForm = {
  name: string,
  price: number,
  stock: number;
};

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export type CartItem = Product & {
  quantity: number;
};