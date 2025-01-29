import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Info } from 'lucide-react';

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className={linkClass}>
              <Home size={20} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <Info size={20} />
              <span>About Us</span>
            </NavLink>
            <NavLink to="/team" className={linkClass}>
              <Users size={20} />
              <span>Team</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;