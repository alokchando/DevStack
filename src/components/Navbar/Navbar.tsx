import logo from "../../assets/logo-text.png";
function Navbar() {
  return (
    <nav className="w-full h-18 flex bg-[#FFFFFF] text-[#475569] gap-2 justify-between px-30 py-3 items-center border-b border-gray-200">
      <div>
        <img src={logo} alt="Dev Stack" />
      </div>

      <div className="flex gap-6 justify-center items-center">
        <a className="text-[#DB2777]" href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <button>Sign In</button>
        <button className="btn btn-active btn-secondary rounded-full h-8 ">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
