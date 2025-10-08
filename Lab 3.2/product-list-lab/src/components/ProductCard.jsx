import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const { name, image, description, price, originalPrice, discount, inStock, rating } = product;

  // ฟังก์ชันเรนเดอร์ดาว
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push("⭐");
    if (hasHalf) stars.push("✨");
    while (stars.length < 5) stars.push("☆");
    return stars.join("");
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x300/cccccc/666666?text=No+Image";
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        {/* ⭐ ส่วนแสดงดาว */}
        <div style={{ marginBottom: "5px" }}>
          {renderStars(rating)} ({rating})
        </div>

        {/* 💸 แสดงราคากับส่วนลด */}
        <div className="product-price">
          ฿{price.toLocaleString()}
          {discount > 0 && (
            <>
              {" "}
              <span style={{ textDecoration: "line-through", color: "#888", fontSize: "0.9rem" }}>
                ฿{originalPrice.toLocaleString()}
              </span>
              <span style={{ color: "red", fontWeight: "bold", marginLeft: "6px" }}>
                ลด {discount}%
              </span>
            </>
          )}
        </div>

        <div className="product-actions">
          <button className="btn btn-secondary" onClick={() => onViewDetails(product)}>
            ดูรายละเอียด
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product)}
            disabled={!inStock}
          >
            {inStock ? "ใส่ตะกร้า" : "หมดสินค้า"}
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    inStock: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number
  }),
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;
