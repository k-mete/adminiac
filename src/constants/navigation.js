/**
 * Navigation constants for the application
 * This file contains all the navigation-related constants like routes and menu items
 */

// Main navigation routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  CONTACT: '/contact',
};

// Main navigation items
export const MAIN_NAVIGATION = [
  {
    name: 'Home',
    path: ROUTES.HOME,
    icon: 'home',
  },
  {
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'dashboard',
  },
  {
    name: 'About',
    path: ROUTES.ABOUT,
    icon: 'info',
  },
  {
    name: 'Contact',
    path: ROUTES.CONTACT,
    icon: 'mail',
  },
];

// Footer navigation items
export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'Dashboard', path: ROUTES.DASHBOARD },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Contact', path: ROUTES.CONTACT },
  ],
  resources: [
    { name: 'React Documentation', url: 'https://reactjs.org' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
    { name: 'React Router', url: 'https://reactrouter.com' },
  ],
  social: [
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ],
};

// Dashboard navigation items
export const DASHBOARD_NAVIGATION = [
  {
    name: 'Overview',
    path: ROUTES.DASHBOARD,
    icon: 'dashboard',
  },
  {
    name: 'Analytics',
    path: `${ROUTES.DASHBOARD}/analytics`,
    icon: 'chart',
  },
  {
    name: 'Reports',
    path: `${ROUTES.DASHBOARD}/reports`,
    icon: 'document',
  },
  {
    name: 'Settings',
    path: `${ROUTES.DASHBOARD}/settings`,
    icon: 'settings',
  },
];