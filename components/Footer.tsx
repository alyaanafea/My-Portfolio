import React from "react";

const Footer = () => {
  return (
   <footer className="w-full bg-black text-white px-6 py-6 text-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center gap-4 text-center md:text-left">
    <p>&copy; 2025 Aliaa Nafea</p>
    
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/alyaa-nafea"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/alyaanafea"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        GitHub
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
