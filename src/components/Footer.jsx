import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          {/* Section 1: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p className="text-sm">
              We are committed to providing the best products and services to our customers.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer
