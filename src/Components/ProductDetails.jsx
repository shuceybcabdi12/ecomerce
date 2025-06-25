import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [mainImage, setmainImage] = useState();

  useEffect(() => {
    const GetProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setproduct(data);
        setmainImage(data.thumbnail);
      } catch (error) {
        console.log(error);
      }
    };
    GetProduct();
  }, [id]);
  return (
    product && (
      <div className="p-4 md:p-8">
        <button
          onClick={() => navigate("/products")}
          className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg
      shadow-sm hover:bg-pink-700 transition-colors duration-200 ease-in"
        >
          ⬅️ Go Back
        </button>

        <h1 className="font-bold text-3xl mb-3">{product.title}</h1>
        <div className="md:flex">
          <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
            <img
              className="w-full h-96 object-cover rounded-lg shadow"
              src={mainImage}
              alt={product.title}
            />
            {/* gallery */}
            <div className="flex space-x-5 overflow-x-auto mt-5">
              {product.images.map((image, index) => (
                <img
                  onClick={() => setmainImage(image)}
                  key={index}
                  className="w-24 h-24 object-cover shadow rounded-lg cursor-pointer"
                  src={image}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 pl-4">
            <p>{product.description}</p>
            <div className="flex items-center justify-between pt-4">
              <span className="text-pink-600 font-bold text-2xl">
                ${product.price}
              </span>
              <span>
                {product.stock > 0
                  ? `${product.stock} In Stock`
                  : `Oute of stock`}
              </span>
            </div>
            <div className="pt-5">
              <span className="text-yellow-400">
                {"★".repeat(Math.round(product.rating))}
              </span>

              <span className="text-gray-400">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
            <div className="pt-5">
              <button
                className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg
  shadow-sm hover:bg-pink-700 transition-colors duration-200 ease-in"
              >
                AddToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
