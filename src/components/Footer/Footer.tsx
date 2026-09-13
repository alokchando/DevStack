import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffff] flex px-60 ">
  <div className="flex flex-col  gap-10">

    <div className="flex gap-120">
      

      <div className="text-[#475569] flex flex-col gap-2.5">
        <img className="w-32 h-auto" src={logo} alt="" />
        <p className="font-light">
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>

        <div className=" font-semibold flex gap-2.5">
          <a className=" " href="">GitHub</a>
          <a  className="" href="">Twitter</a>
          <a className="" href="">LinkedIn</a>
        </div>
      </div>

      <div className="text-[#64748B] flex gap-30">
        
        <div className="flex flex-col gap-2">
          <p className="font-bold">PRODUCT</p>
          <a href="">Home</a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">RESOURCES</p>
          <a href="">Documentation</a>
          <a href="">Blog</a>
          <a href="">GitHub</a>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">COMPANY</p>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Careers</a>
        </div>

      </div>
    </div>

    <div className="text-[#94A3B8] h-20">
      <div className="flex justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;
