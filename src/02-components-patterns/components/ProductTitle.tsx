import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface IProductTitle {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: IProductTitle) => {
  const { product } = useContext(ProductContext);
  const finalTitle = title ? title : product.title;
  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {finalTitle}
    </span>
  );
};
