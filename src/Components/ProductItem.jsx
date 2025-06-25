import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({products}) => {
  
  return (
      <Link to={`/product_details/${products.id}`}
          className="border boder-lg cursor-pointer overflow-hidden shadow-sm hover:shadow-lg
         transition-shadow duration-200 ease-in rounded-[12px]"
        >
          <img
            className="w-full h-48 object-cover"
            src={products.thumbnail}
            alt=""
          />
          <div className="p-4">
            <h1 className="font-bold text-2xl mb-2">{products.title}</h1>
            <p className="text-gray-600 truncate mb-2">
              {products.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-700">
                ${products.price}
              </span>

              <span className="mb-2">
                {products.stock > 0
                  ? `${products.stock} in stock`
                  : `oute of stock`}
              </span>
            </div>

            <div className="mt-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(products.rating))}
              </span>

              <span className="text-gray-300">{"★".repeat(Math.round(5 - products.rating))}</span>
            </div>
          </div>
        </Link>
  )
}

export default ProductItem