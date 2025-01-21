// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#3f51b5] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold">
        Welcome to FBN Quest React Interview
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
