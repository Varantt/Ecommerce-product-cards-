import React, { useState } from "react";
import "./styles/productCard.css";
import AddToCartButton from "./AddToCartButton";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const Product = ({
  id,
  title,
  image,
  description,
  price,
  rating,
  addProduct,
  product,
}) => {
  const [selectedVariants, setSelectedVariants] = useState({
    color: "",
    size: "",
  });

  // hypothetical availability check
  const [isAvailable, setIsAvailable] = useState(rating.rate > 3  && rating.count > 250 );

  const handleVariantSelection = (variantType, value) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [variantType]: value,
    }));
  };

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <div className="product-card__image">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__variants">
          {/* Color Variant */}
          <div className="product-variant">
            <FormControl sx={{ minWidth: 80, margin: 0 }}>
              <InputLabel>Color</InputLabel>
              <Select
                value={selectedVariants.color}
                label="Color"
                onChange={(e) =>
                  handleVariantSelection("color", e.target.value)
                }
              >
                {["Red", "Blue", "Green"].map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Size Variant */}
          <div className="product-variant">
            <FormControl sx={{ minWidth: 80, margin: 0 }}>
              <InputLabel>Size</InputLabel>
              <Select
                sx={{ minHeight: "1rem" }}
                value={selectedVariants.size}
                label="Size"
                onChange={(e) => handleVariantSelection("size", e.target.value)}
              >
                {["S", "M", "L", "XL"].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <p className="product-card__description">{description}</p>

        <div className="product-card__price-container">
          <div className="product-card__price">${price}</div>

          <div className="product-card__add-to-cart">
            <AddToCartButton
              text={"Add To Cart"}
              addProduct={addProduct}
              product={product}
              disabled = {!isAvailable}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Product;
