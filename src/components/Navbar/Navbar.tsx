import logo from "../../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-18 flex flex-col sm:flex-row justify-between items-center gap-4 py-3 sm:py-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-32 sm:w-36 h-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 lg:gap-7 text-sm font-medium text-slate-600">
          <a className="text-sky-500 font-semibold" href="#">
            Home
          </a>
          <a className="hover:text-sky-500 transition-colors" href="#">
            Technologies
          </a>
          <a className="hover:text-sky-500 transition-colors" href="#">
            Projects
          </a>
          <a className="hover:text-sky-500 transition-colors" href="#">
            About
          </a>
          <a className="hover:text-sky-500 transition-colors" href="#">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors">
            Sign In
          </button>

          <button className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-(image:--brand-gradient) shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
