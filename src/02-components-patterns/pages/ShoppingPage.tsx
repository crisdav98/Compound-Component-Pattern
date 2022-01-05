import {
  ProductButtons,
  ProductImage,
  ProductCard,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug- Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductImage img="https://cdn.pixabay.com/photo/2018/05/09/19/05/tea-3385887__340.jpg" />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"café"} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
