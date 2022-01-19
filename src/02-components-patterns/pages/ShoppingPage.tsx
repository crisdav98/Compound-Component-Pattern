import { products } from "../../data/products";
import {
  ProductButtons,
  ProductImage,
  ProductCard,
  ProductTitle,
} from "../components";
import { useShoppingPage } from "../hooks/useShoppingPage";
import "../styles/custom-styles.css";

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingPage();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            count={shoppingCart[product.id]?.count}
          >
            {/* <ProductImage
            className="custom-image" 
            img="https://cdn.pixabay.com/photo/2018/05/09/19/05/tea-3385887__340.jpg"
          /> */}
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        {/* <ProductCard product={product2} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={"café"} className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            count={product.count}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            {/* <ProductTitle /> */}
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
