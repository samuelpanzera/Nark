import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Nark Launcher. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
