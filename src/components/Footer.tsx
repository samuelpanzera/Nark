import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
      <p className="text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Nark Launcher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
