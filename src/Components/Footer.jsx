import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold mb-4">LOGO</h1>
          <p>Welcome to our platform, we are here to serve you 24/7.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nagala soo xariir</h2>
          <p>Tell: +252 61 232323</p>
          <p>Bakaaraha, Muqdisho, Somalia</p>
          <p>Email: info@example.com</p>
        </div>

        {/* Policy */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Policy</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund</a></li>
            <li><a href="#" className="hover:underline">Payment</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Account */}
      
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center border-t border-white pt-4 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
