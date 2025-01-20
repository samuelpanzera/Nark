const Navbar: React.FC = () => {
  return (
    <nav className="fixed min-h-screen w-64 bg-slate-600 bg-white/30 text-white flex flex-col items-start p-4">
      <a href="./" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Home
      </a>
      <a href="./about" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        About
      </a>
      <a href="#" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Services
      </a>
      <a href="#" className="py-2 px-4 hover:bg-white/20 rounded w-full">
        Contact
      </a>
    </nav>
  );
};
export default Navbar;
