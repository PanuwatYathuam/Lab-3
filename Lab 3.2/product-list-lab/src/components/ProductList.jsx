import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="product-list-container">
      <div className="header">
        <h1>🛍️ ร้านค้าออนไลน์</h1>
        <p>Lab 3.2 - Components & Props</p>
      </div>

      {/* 🔍 Search + Sort Controls */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "5px 10px", marginRight: "10px", width: "200px" }}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: "5px 10px", marginRight: "10px" }}
        >
          <option value="none">ไม่เรียงลำดับ</option>
          <option value="name">ชื่อสินค้า</option>
          <option value="price">ราคาต่ำสุด</option>
          <option value="rating">เรตติ้งสูงสุด</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: "5px 10px" }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>ไม่พบสินค้าที่ค้นหา</p>
        )}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

export default ProductList;
