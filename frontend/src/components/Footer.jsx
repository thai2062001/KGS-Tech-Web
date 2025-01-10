import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-start">
          {/* Logo and Map Section (Left Side) */}
          <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3">
            {/* Logo */}
            <a href="#" className="flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dtnuj2les/image/upload/v1736483767/logo1-removebg-preview_bhpsme.png"
                alt="Company Logo"
                className="w-30 h-28"
              />
            </a>
          </div>

          {/* Footer Links (Right Side) */}
          <div className="flex flex-wrap justify-center lg:w-2/3 w-full mt-6 lg:mt-0">
            {/* Product Section */}
            <div className="flex flex-col items-center mb-6 w-1/4">
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul>
                <li><a href="#" className="text-sm hover:underline">Features</a></li>
                <li><a href="#" className="text-sm hover:underline">Security</a></li>
                <li><a href="#" className="text-sm hover:underline">Business</a></li>
                <li><a href="#" className="text-sm hover:underline">Case studies</a></li>
                <li><a href="#" className="text-sm hover:underline">Pricing</a></li>
                <li><a href="#" className="text-sm hover:underline">Resources</a></li>
              </ul>
            </div>

            {/* Explore Section */}
            <div className="flex flex-col items-center mb-6 w-1/4">
              <h3 className="text-xl font-bold mb-4">Explore</h3>
              <ul>
                <li><a href="#" className="text-sm hover:underline">Developer</a></li>
                <li><a href="#" className="text-sm hover:underline">API</a></li>
                <li><a href="#" className="text-sm hover:underline">Partner</a></li>
                <li><a href="#" className="text-sm hover:underline">Atom</a></li>
                <li><a href="#" className="text-sm hover:underline">Electron</a></li>
                <li><a href="#" className="text-sm hover:underline">Application</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col items-center mb-6 w-1/4">
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul>
                <li><a href="#" className="text-sm hover:underline">Help</a></li>
                <li><a href="#" className="text-sm hover:underline">Community</a></li>
                <li><a href="#" className="text-sm hover:underline">Forum</a></li>
                <li><a href="#" className="text-sm hover:underline">Training</a></li>
                <li><a href="#" className="text-sm hover:underline">Status</a></li>
                <li><a href="#" className="text-sm hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="flex flex-col items-center w-1/4">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul>
                <li><a href="#" className="text-sm hover:underline">About</a></li>
                <li><a href="#" className="text-sm hover:underline">Blog</a></li>
                <li><a href="#" className="text-sm hover:underline">Careers</a></li>
                <li><a href="#" className="text-sm hover:underline">Press</a></li>
                <li><a href="#" className="text-sm hover:underline">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Line and Social Media Icons */}
        <div className="mt-8 border-t border-white text-center">
          {/* About Us and Subscribe Section */}

          {/* About Us and Subscribe Section */}
          <div className="mt-8 flex flex-wrap justify-between items-center">
            {/* About Us */}
            <div className="text-white w-full sm:w-1/2 mb-4 sm:mb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="sm:w-1/2">
                <h3 className="text-xl font-bold">About Us</h3>
                <p className="text-sm mt-2">
                  We are a company dedicated to providing innovative solutions to
                  meet the diverse needs of our clients. With a focus on technology
                  and customer satisfaction, we strive to push the boundaries of what
                  is possible and create lasting partnerships.
                </p>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="flex flex-col sm:w-1/2 sm:items-center mt-4 sm:mt-0 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between w-full">  {/* Adjusted */}
              <div className="w-full sm:w-2/3 mr-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-full bg-gray-700 text-white rounded-md "
                />
              </div>
              <div className="w-full sm:w-1/3">
                <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 w-full">
                  Subscribe
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-3 mt-4 sm:mt-0 w-full sm:w-auto"> {/* Adjusted space between icons */}
                <a href="#" className="text-white hover:bg-gray-500 p-2 rounded-full">
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:bg-gray-500 p-2 rounded-full">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:bg-gray-500 p-2 rounded-full">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-8 text-center text-sm text-white">
        <p>© 2025 KGS Tech Company. All rights reserved.</p>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
