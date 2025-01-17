import { ReactNode } from "react";

export interface IProduct {
  snu: string;
  category: string;
  name: string;
  manufacturer: string;
  price: number;
  id: string;
}

export interface IChildrenProps {
  children: ReactNode;
}

export interface IProductsContextData {
  registerProduct: (product: IProduct) => void;
  getProducts: () => IProduct[];
  deleteProduct: (id: string) => void;
  updateProduct: (product: IProduct) => void;
  updater: boolean;
  setUpdater: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IButtonProps {
  variant?: "text" | "outlined" | "contained" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
}
