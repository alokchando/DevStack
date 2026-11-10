import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-14">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <img
              className="w-36 h-auto object-contain"
              src={logo}
              alt="Dev Stack"
            />

            <p className="text-sm leading-7 text-slate-500 max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-600">
              <a href="" className="hover:text-sky-500 transition-colors">
                GitHub
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Twitter
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-slate-900">
              PRODUCT
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="" className="hover:text-sky-500 transition-colors">
                Home
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Technologies
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Projects
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-slate-900">
              RESOURCES
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="" className="hover:text-sky-500 transition-colors">
                Documentation
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Blog
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest text-slate-900">
              COMPANY
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="" className="hover:text-sky-500 transition-colors">
                About
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Contact
              </a>
              <a href="" className="hover:text-sky-500 transition-colors">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-100 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="" className="hover:text-sky-500 transition-colors">
              Privacy
            </a>
            <a href="" className="hover:text-sky-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
