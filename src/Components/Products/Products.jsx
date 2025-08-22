import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation.",
      price: "$99",
      image:
        "https://images.unsplash.com/photo-1583225182148-1a74f4f5c02a?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track fitness, heart rate, and notifications.",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1519744346367-3e7f3a2d5a3f?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      description: "Ergonomic design with customizable RGB lights.",
      price: "$59",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9f6?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "DSLR Camera",
      description: "Capture stunning photos with high resolution.",
      price: "$499",
      image:
        "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Laptop Backpack",
      description: "Durable, water-resistant and stylish design.",
      price: "$79",
      image:
        "https://images.unsplash.com/photo-1580910051074-dbb9ef46d9a6?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass.",
      price: "$39",
      image:
        "https://images.unsplash.com/photo-1518445181300-6f6b48f8c71b?w=500&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-5">
                <span className="text-lg font-bold text-indigo-600">
                  {product.price}
                </span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
