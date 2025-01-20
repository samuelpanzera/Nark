import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-grow bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default MainLayout;
