import ProductCard from "./ProductCard";
import "./styles/productCards.css";

const ProductCards = ({ products, addProduct }) => {
  console.log(products);
  return (
    <div id="products" className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          product={product}
          addProduct={addProduct}
        />
      ))}
    </div>
  );
};

export default ProductCards;
