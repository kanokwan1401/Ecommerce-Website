import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-white py-8 text-black border-t border-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 text-black">About Us</h4>
            <p className="text-sm">Learn more about our company and team.</p>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 text-black">
              Customer Service
            </h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 text-black">Information</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-4 text-black">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.5 0h-21C.673 0 0 .673 0 1.5v21C0 23.327.673 24 1.5 24h21c.827 0 1.5-.673 1.5-1.5v-21C24 .673 23.327 0 22.5 0zM9.75 19.5H6v-9h3.75v9zm-1.875-10.5c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zM19.5 19.5h-3.75v-4.5c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v4.5H9.75v-9h3.75v1.241c.729-1.14 2.214-1.241 3.75-1.241 2.484 0 3.75 1.515 3.75 3.759v5.241z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.954-2.178-1.549-3.594-1.549-2.723 0-4.931 2.208-4.931 4.932 0 .386.044.762.128 1.123-4.099-.205-7.735-2.17-10.171-5.153-.425.729-.666 1.575-.666 2.475 0 1.707.87 3.214 2.188 4.096-.807-.026-1.567-.248-2.231-.617v.062c0 2.385 1.697 4.375 3.946 4.827-.414.112-.849.171-1.296.171-.316 0-.625-.031-.927-.088.626 1.956 2.445 3.379 4.6 3.419-1.685 1.32-3.809 2.107-6.115 2.107-.397 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14.004-7.499 14.004-13.986 0-.213-.005-.425-.014-.636.961-.693 1.796-1.56 2.457-2.548z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c-5.421 0-9.838 4.417-9.838 9.838 0 4.247 2.641 7.859 6.362 9.165-.087-.734-.166-1.863.035-2.66.181-.715 1.165-4.803 1.165-4.803s-.296-.594-.296-1.474c0-1.38.799-2.41 1.793-2.41.847 0 1.255.636 1.255 1.398 0 .851-.541 2.125-.82 3.303-.234.995.497 1.805 1.473 1.805 1.768 0 3.132-1.864 3.132-4.546 0-2.379-1.717-4.039-4.17-4.039-2.845 0-4.511 2.127-4.511 4.328 0 .86.33 1.785.744 2.286.083.099.096.187.071.287-.078.334-.244 1.054-.278 1.203-.043.183-.144.222-.334.134-1.249-.578-2.029-2.392-2.029-3.853 0-3.138 2.28-6.025 6.581-6.025 3.455 0 6.145 2.462 6.145 5.757 0 3.442-2.168 6.21-5.177 6.21-1.011 0-1.963-.526-2.288-1.15l-.622 2.366c-.224.857-.835 1.928-1.247 2.588.925.286 1.902.444 2.918.444 5.42 0 9.838-4.417 9.838-9.838 0-5.421-4.418-9.838-9.838-9.838z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; 2024 E-commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
