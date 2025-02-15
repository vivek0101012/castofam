import { useState, useEffect } from "react";

const images = Array.from({ length: 3 }, (_, i) => `/images/aboutus${i + 1}.jpg`);

export default function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0);
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      logo: "/images/facebook.png"
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      logo: "/images/twitter.png"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      logo: "/images/linkedin.png"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      logo: "/images/instagram.png"
    }
  ];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-center bg-gray-50">
      
      <div className="relative w-full max-w-4xl h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mt-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="max-w-4xl px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#024731] mt-6">
          About <span className="text-[#00B96C]">Castofam</span>
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Welcome to <strong>Castofam</strong>, where passion for footwear meets top-tier craftsmanship. Our journey began with a simple mission: to provide stylish, durable, and comfortable shoes for every occasion.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#024731]">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            We are committed to blending fashion with function, ensuring that every step you take is a confident one. Our shoes are designed for comfort, style, and longevity.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#024731]">What We Do</h2>
          <p className="text-gray-700 mt-2">
            From casual sneakers to formal footwear, our collection caters to every style. We carefully craft each pair with high-quality materials to provide the best fit and feel.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#00B96C]">👞 Premium Quality</h3>
            <p className="text-gray-700 mt-2">Every pair is crafted with durability and comfort in mind.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#00B96C]">🔥 Trendy Designs</h3>
            <p className="text-gray-700 mt-2">Stay ahead with our stylish and innovative footwear collections.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#00B96C]">🛒 Customer Satisfaction</h3>
            <p className="text-gray-700 mt-2">We ensure the best shopping experience with quality service.</p>
          </div>
        </div>
      </div>
    </div>
  );  
}
