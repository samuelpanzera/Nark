const Navbar: React.FC = () => {
  return (
    <nav className="fixed min-h-screen w-64 bg-slate-600 bg-white/30 text-white flex flex-col items-start p-4">
      <a href="./" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Home
      </a>
      <a
        href="./library"
        className="py-2 px-4 hover:bg-white/20 rounded w-full"
      >
        Library
      </a>
      <a href="./store" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Store
      </a>
      <a href="#" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Contact
      </a>
    </nav>
  );
};
export default Navbar;
