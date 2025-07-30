import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useContext(ThemeContext);

  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products?limit=6");
      setProducts(res.data.products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        paddingTop: "100px",
        padding: "1rem",
        backgroundColor: theme.background,
        color: theme.color,
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Home Page</h1>
        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Welcome to the multi-theme app. Switch themes from the dropdown above!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: theme.cardBg,
                color: theme.color,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8, flexGrow: 1 }}>
                {item.description.slice(0, 100)}...
              </p>
              <div style={{ marginTop: "auto" }}>
                <p style={{ marginTop: "1rem" }}>
                  <strong>₹{item.price}</strong> &nbsp;
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      fontSize: "0.8rem",
                    }}
                  >
                    ₹
                    {(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
                  </span>
                </p>
                <button
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: theme.buttonBg,
                    color: theme.buttonColor,
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%",
                    fontSize: "1rem",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
