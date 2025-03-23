"use client";

import Image from "next/image";
import Head from "next/head";

const images = [
  "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586779161164-d89795b07b71?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1622448559300-6df8495a1574?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1573499036770-97f5805ab571?w=600&auto=format&fit=crop&q=60",
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Sanjivana Organic Honey</title>
        <meta
          name="description"
          content="Discover the purity of Sanjivana Organic Honey, sourced from nature’s best environments with sustainable practices."
        />
      </Head>

      {/* ✅ Hero Section with Fixed Background */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center px-6 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517179578644-19704116e263?w=1600&auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Pure & Organic Honey 🍯</h1>
          <p className="text-lg">
            Experience the finest organic honey, ethically sourced and packed with natural goodness.
          </p>
        </div>
      </section>

      {/* ✅ Static Image Grid */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Why Our Organic Honey is the Best 🍯
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={src}
                alt={`Organic Honey ${index + 1}`}
                width={200}
                height={250}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* ✅ Text Section */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pure, Natural & Sustainable 🌿
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our honey is harvested from the finest organic farms, ensuring it is free from chemicals
            and rich in natural nutrients. With a focus on sustainability, we provide you with the
            purest honey straight from nature’s heart.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
