import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImgae from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface IProductImage {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: IProductImage) => {
  const { product } = useContext(ProductContext);
  const src = img ? img : product.img ?? noImgae;
  return (
    <img
      src={src}
      alt="Product"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
