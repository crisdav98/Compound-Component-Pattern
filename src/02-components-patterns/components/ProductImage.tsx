import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImgae from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  const src = img ? img : product.img ?? noImgae;
  return <img src={src} alt="Product" className={styles.productImg} />;
};
