import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Our Store
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Welcome to our eCommerce store, your one-stop shop for high-quality
            products at the best prices. We are committed to delivering excellent
            customer service and a seamless shopping experience.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            From the latest trends to timeless classics, we carefully curate our
            collection to bring you the best. Experience hassle-free online
            shopping like never before!
            
            From the latest trends to timeless classics, we carefully curate our
            collection to bring you the best. Experience hassle-free online
            shopping like never before!
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            From the latest trends to timeless classics, we carefully curate our
            collection to bring you the best. Experience hassle-free online
            shopping like never before!
            
            From the latest trends to timeless classics, we carefully curate our
            collection to bring you the best. Experience hassle-free online
            shopping like never before!
          </p>
        </div>

        {/* Right Side: Image with Zoom Effect */}
        <div className="md:w-1/2 relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1737305457496-dc7503cdde1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D" // Replace with your actual image
            alt="About Us"
            width={300}
            height={200}
            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
