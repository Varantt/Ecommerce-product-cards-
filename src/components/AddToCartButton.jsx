import "./styles/btn.css";
import toast from "react-hot-toast";

const AddToCartButton = ({ text, addProduct, product, disabled }) => {
  return (
    <button
      class={`btn btn-outline-dark m-2 ${disabled ? 'disabled' : ''}`}
      onClick={() => {
        toast.success("Added to cart");
        addProduct(product);
      }}
    >
      <i class="fa-solid fa-cart-plus mr-1"></i>
      &nbsp;
      {disabled ? <span class="disabled">{"Out Of Stock"}</span> : text}
    </button>
  );
};

export default AddToCartButton;
