import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We provide professional solutions to help you grow your business.
            Explore our services and discover how we can support you.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-indigo-600 text-5xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Build responsive and modern websites with latest technologies.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-indigo-600 text-5xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-gray-600">
              Create user-friendly mobile applications for Android and iOS.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <div className="text-indigo-600 text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Design intuitive user experiences with modern design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Let’s build something amazing together. Contact us today and bring
          your ideas to life.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
