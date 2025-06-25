import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem"; // hubi in aad import gareysay
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";

const ProductList = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setproduct(data.products); // saxid
        setloading(false);
      } catch (error) {
        setloading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // ← dependency array

  if (loading) return <ProductLoadingSkeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {product.length > 0 &&
        product.map((products) => (
          <ProductItem key={products.id} products={products} />
        ))}
    </div>
  );
};

export default ProductList;
