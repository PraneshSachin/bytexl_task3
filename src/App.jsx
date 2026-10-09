import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
const [quantity, setQuantity] = useState(0);
const [selectedColor, setSelectedColor] = useState("Black");
const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
const [showProduct, setShowProduct] = useState(true);

const productName = "Wireless Mouse";
const price = 499;

return ( <div className="app-container"> <Header />

  <div className="controls">
    <button onClick={() => setQuantity((q) => q + 1)}>
      Add to Cart
    </button>

    <button
      onClick={() => setQuantity((q) => Math.max(0, q - 1))}
      disabled={quantity === 0}
    >
      Remove One
    </button>

    <button onClick={() => setQuantity(0)}>
      Reset Cart
    </button>

    <button onClick={() => setShowProduct((prev) => !prev)}>
      {showProduct ? "Hide Product" : "Show Product"}
    </button>
  </div>

  {showProduct && (
    <ProductCard
      productName={productName}
      price={price}
      quantity={quantity}
      selectedColor={selectedColor}
      deliveryCity={deliveryCity}
      setSelectedColor={setSelectedColor}
      setDeliveryCity={setDeliveryCity}
    />
  )}

  <Footer />
</div>
);
}

export default App;
