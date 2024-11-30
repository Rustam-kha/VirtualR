import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const handleNavItemClick = () => {
    setMobileDrawerOpen(false); // Close the mobile drawer when a menu item is clicked
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-lg border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="VirtualR Logo" className="w-12 h-12 mr-3" />
          <span className="text-2xl font-bold text-white tracking-wide">
            VirtualR
          </span>
        </div>

        {/* Desktop Navigation */}
        {isAuthenticated && (
          <ul className="hidden lg:flex space-x-8 text-neutral-300 font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition hover:bg-blue-600 px-3 py-1 rounded-md"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        )}

        {/* Log Out Button */}
        {isAuthenticated && (
          <div className="hidden lg:flex">
            <button
              onClick={onLogout}
              className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Log Out
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavBar}
          className="lg:hidden text-neutral-300 hover:text-white"
        >
          {mobileDrawerOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && isAuthenticated && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 p-6 flex flex-col space-y-4">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-neutral-300 hover:text-white transition hover:bg-blue-600 px-3 py-2 rounded-md"
              >
                <a
                  href={item.href}
                  onClick={handleNavItemClick} // Close drawer on menu item click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={onLogout}
            className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
