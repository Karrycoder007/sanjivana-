"use client";

import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Smart Watch",
    image: "/images/smartwatch.jpg",
    price: 199.99,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    image: "/images/headphones.jpg",
    price: 149.99,
  },
  {
    id: "3",
    name: "Gaming Keyboard",
    image: "/images/keyboard.jpg",
    price: 89.99,
  },
  {
    id: "4",
    name: "Mechanical Mouse",
    image: "/images/mouse.jpg",
    price: 59.99,
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shop Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-lg"
            />
            
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">${product.price.toFixed(2)}</p>
            
            <div className="flex justify-between items-center mt-4">
              <Link 
                href={`/product/${product.id}`} 
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Details
              </Link>

              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
