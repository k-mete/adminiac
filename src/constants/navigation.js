/**
 * Navigation constants for the application
 * This file contains all the navigation-related constants like routes and menu items
 */

// Main navigation routes
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  ABOUT: '/about',
  SERVICES: '/services',
  TEAM: '/team',
  PORTFOLIO: '/portfolio',
  BLOG: '/blog',
  FAQ: '/faq',
  PRICING: '/pricing',
  CONTACT: '/contact',
  // CRUD routes
  USERS: '/dashboard/users',
  USERS_CREATE: '/dashboard/users/create',
  USERS_EDIT: '/dashboard/users/edit',
  PRODUCTS: '/dashboard/products',
  PRODUCTS_CREATE: '/dashboard/products/create',
  PRODUCTS_EDIT: '/dashboard/products/edit',
};

// Main navigation items
export const MAIN_NAVIGATION = [
  {
    name: 'Home',
    path: ROUTES.HOME,
    icon: 'home',
  },
  {
    name: 'Services',
    path: ROUTES.SERVICES,
    icon: 'briefcase',
  },
  {
    name: 'Portfolio',
    path: ROUTES.PORTFOLIO,
    icon: 'collection',
  },
  {
    name: 'About',
    path: ROUTES.ABOUT,
    icon: 'info',
  },
  {
    name: 'Team',
    path: ROUTES.TEAM,
    icon: 'users',
  },
  {
    name: 'Blog',
    path: ROUTES.BLOG,
    icon: 'document-text',
  },
  {
    name: 'Pricing',
    path: ROUTES.PRICING,
    icon: 'currency-dollar',
  },
  {
    name: 'FAQ',
    path: ROUTES.FAQ,
    icon: 'question-mark-circle',
  },
  {
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: 'dashboard',
  },
  {
    name: 'Contact',
    path: ROUTES.CONTACT,
    icon: 'mail',
  },
];

// Footer navigation items
export const FOOTER_LINKS = {
  company: [
    { name: 'Home', path: ROUTES.HOME },
    { name: 'About', path: ROUTES.ABOUT },
    { name: 'Team', path: ROUTES.TEAM },
    { name: 'Contact', path: ROUTES.CONTACT },
  ],
  services: [
    { name: 'Services', path: ROUTES.SERVICES },
    { name: 'Portfolio', path: ROUTES.PORTFOLIO },
    { name: 'Pricing', path: ROUTES.PRICING },
    { name: 'Dashboard', path: ROUTES.DASHBOARD },
  ],
  resources: [
    { name: 'Blog', path: ROUTES.BLOG },
    { name: 'FAQ', path: ROUTES.FAQ },
    { name: 'React Documentation', url: 'https://reactjs.org' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
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
    name: 'Users',
    path: ROUTES.USERS,
    icon: 'users',
  },
  {
    name: 'Products',
    path: ROUTES.PRODUCTS,
    icon: 'collection',
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
