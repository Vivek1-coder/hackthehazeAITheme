import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-colors duration-300">
      &copy; {new Date().getFullYear()} NeuroNxt. All rights reserved.
    </footer>
  );
};

export default Footer;
