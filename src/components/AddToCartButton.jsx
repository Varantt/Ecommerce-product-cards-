import "./styles/btn.css";
import toast from "react-hot-toast";

const AddToCartButton = ({ text, addProduct, product, disabled }) => {
  return (
    <a
      class="btn btn-outline-dark m-2"
      href="#"
      onClick={() => {
        toast.success("Added to cart");
        addProduct(product);
      }}
    >
      <i class="fa-solid fa-cart-plus mr-1"></i>
      &nbsp;
      {text}
    </a>
  );
};

export default AddToCartButton;
