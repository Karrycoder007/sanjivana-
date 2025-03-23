import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      {/* Background Image (Optional) */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566836610733-9e85b39215e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Change this to your actual image
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Elevate Your Shopping Experience
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Discover the best products at unbeatable prices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/shop"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3 text-lg font-semibold text-gray-900 dark:text-white border border-gray-900 dark:border-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
