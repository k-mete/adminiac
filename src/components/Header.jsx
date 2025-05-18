import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_NAVIGATION } from '../constants/navigation';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Group navigation items into categories
  const navGroups = {
    main: ['Home', 'About', 'Contact'],
    services: ['Services', 'Portfolio', 'Pricing'],
    resources: ['Blog', 'FAQ', 'Team'],
    tools: ['Dashboard']
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (group) => {
    setActiveDropdown(activeDropdown === group ? null : group);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Find navigation item by name
  const getNavItem = (name) => {
    return MAIN_NAVIGATION.find(item => item.name === name);
  };

  // Render navigation link
  const renderNavLink = (name, isMobile = false) => {
    const navItem = getNavItem(name);
    if (!navItem) return null;

    return (
      <Link
        key={navItem.name}
        to={navItem.path}
        className={`flex items-center px-3 py-2 rounded-md transition-colors ${
          isActive(navItem.path) 
            ? 'text-primary font-medium bg-primary/10' 
            : 'text-accent hover:text-primary hover:bg-primary/5'
        } ${isMobile ? 'pl-6' : ''}`}
        onClick={() => isMobile && setIsMenuOpen(false)}
      >
        {navItem.icon && (
          <span className="mr-2">
            {renderIcon(navItem.icon)}
          </span>
        )}
        {navItem.name}
      </Link>
    );
  };

  // Render icon based on name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'collection':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'document-text':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'currency-dollar':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'question-mark-circle':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'dashboard':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        );
      case 'mail':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Render dropdown menu
  const renderDropdown = (group, title) => {
    const isOpen = activeDropdown === group;

    return (
      <div className="relative group">
        <button
          className={`flex items-center px-3 py-2 rounded-md transition-colors ${
            navGroups[group].some(name => isActive(getNavItem(name)?.path))
              ? 'text-primary font-medium bg-primary/10'
              : 'text-accent hover:text-primary hover:bg-primary/5'
          }`}
          onClick={() => toggleDropdown(group)}
          onMouseEnter={() => setActiveDropdown(group)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {title}
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Desktop Dropdown */}
        <div
          className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-150 z-10 ${
            isOpen ? 'opacity-100' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
          }`}
          onMouseEnter={() => setActiveDropdown(group)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="py-1">
            {navGroups[group].map(name => (
              <Link
                key={name}
                to={getNavItem(name)?.path || '#'}
                className={`block px-4 py-2 text-sm ${
                  isActive(getNavItem(name)?.path)
                    ? 'text-primary font-medium bg-primary/10'
                    : 'text-accent hover:text-primary hover:bg-primary/5'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              AdminIAC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {renderNavLink('Home')}
            {renderDropdown('services', 'Services')}
            {renderDropdown('resources', 'Resources')}
            {renderNavLink('About')}
            {renderNavLink('Contact')}
            {renderNavLink('Dashboard')}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-accent/70 hover:text-accent focus:outline-none p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-accent/20 overflow-hidden">
            <nav className="max-h-[80vh] overflow-y-auto pb-4">
              <div className="flex flex-col space-y-1">
                {renderNavLink('Home', true)}

                {/* Mobile Services Dropdown */}
                <div className="py-1">
                  <button
                    className={`flex items-center justify-between w-full px-3 py-2 text-left ${
                      activeDropdown === 'services' ? 'text-primary bg-primary/10' : 'text-accent'
                    }`}
                    onClick={() => toggleDropdown('services')}
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === 'services' ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="mt-1 space-y-1">
                      {navGroups.services.map(name => renderNavLink(name, true))}
                    </div>
                  )}
                </div>

                {/* Mobile Resources Dropdown */}
                <div className="py-1">
                  <button
                    className={`flex items-center justify-between w-full px-3 py-2 text-left ${
                      activeDropdown === 'resources' ? 'text-primary bg-primary/10' : 'text-accent'
                    }`}
                    onClick={() => toggleDropdown('resources')}
                  >
                    <span>Resources</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === 'resources' ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === 'resources' && (
                    <div className="mt-1 space-y-1">
                      {navGroups.resources.map(name => renderNavLink(name, true))}
                    </div>
                  )}
                </div>

                {renderNavLink('About', true)}
                {renderNavLink('Contact', true)}
                {renderNavLink('Dashboard', true)}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
