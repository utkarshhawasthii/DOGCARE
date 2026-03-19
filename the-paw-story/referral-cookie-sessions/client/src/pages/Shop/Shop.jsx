import React from "react";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Dog Food Premium",
    price: "₹899",
    image: "/Product/food.png"
  },
  {
    id: 2,
    name: "Dog Leash",
    price: "₹299",
    image: "/Product/leash.png"
  },
  {
    id: 3,
    name: "Dog Shampoo",
    price: "₹349",
    image: "/Product/shampoo.png"
  },
  {
    id: 4,
    name: "Dog Toy Bone",
    price: "₹199",
    image: "/Product/bone.png"
  },
  {
    id: 5,
    name: "Dog Bed",
    price: "₹1299",
    image: "/Product/bed.png"
  },
  {
    id: 6,
    name: "Dog Bowl",
    price: "₹249",
    image: "/Product/bowl.png"
  }
];

const Shop = () => {
  return (
    <div className="shop-container">

      <h1 className="shop-title">Dog Shop</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="price">{product.price}</p>

            <button className="buy-btn">Buy Now</button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Shop;