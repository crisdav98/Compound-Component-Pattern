import { products } from "../../data/products";
import {
  ProductButtons,
  ProductImage,
  ProductCard,
  ProductTitle,
} from "../components";
// import { useShoppingPage } from "../hooks/useShoppingPage";
import "../styles/custom-styles.css";

const product = products[0];

const ShoppingPage = () => {
  // const { onProductCountChange, shoppingCart } = useShoppingPage();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReach }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            {count >= 2 ? (
              <button onClick={() => increaseBy(-2)}>-2</button>
            ) : (
              <></>
            )}
            {/* OCULTAR SI SE LLEGA A MÁXIMO */}
            {!isMaxCountReach && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
