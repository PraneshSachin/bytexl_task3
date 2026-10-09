import { useEffect } from "react";

function ProductCard({
productName,
price,
quantity,
selectedColor,
deliveryCity,
setSelectedColor,
setDeliveryCity,
}) {
useEffect(() => {
const previousTitle = document.title;

document.title = `${productName} | ${selectedColor} | Cart: ${quantity}`;

return () => {
  document.title = previousTitle;
};
}, [productName, selectedColor, quantity]);

const total = quantity * price;

return ( <div className="product-card"> <div className="product-badge">FEATURED PRODUCT</div>

```
  <div className="product-icon">🖱️</div>

  <h2>{productName}</h2>

  <p className="price">₹{price}</p>

  <p>
    <strong>Colour:</strong> {selectedColor}
  </p>

  <label htmlFor="color">Choose Colour</label>
  <select
    id="color"
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
  >
    <option value="Black">Black</option>
    <option value="Blue">Blue</option>
    <option value="White">White</option>
  </select>

  <p>
    <strong>Deliver to:</strong> {deliveryCity}
  </p>

  <label htmlFor="city">Delivery City</label>
  <input
    id="city"
    type="text"
    value={deliveryCity}
    onChange={(e) => setDeliveryCity(e.target.value)}
    placeholder="Enter delivery city"
  />

  <div className="cart-summary">
    <p>Cart Quantity: {quantity}</p>
    <h3>Total Amount: ₹{total}</h3>

    <p className={quantity === 0 ? "cart-empty" : "cart-success"}>
      {quantity === 0
        ? "Cart is empty"
        : "Product added to cart"}
    </p>
  </div>
</div>
);
}

export default ProductCard;
