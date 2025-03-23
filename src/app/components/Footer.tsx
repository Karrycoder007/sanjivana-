const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">My E-Commerce</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop shop for the best tech products at unbeatable prices.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-400">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Location: Goa, India</p>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} My E-Commerce. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  