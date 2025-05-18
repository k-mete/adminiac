# AdminIAC - React + Tailwind CSS Template

A modern, responsive website template built with React and Tailwind CSS. This template provides a solid foundation for building beautiful and functional web applications.

## Features

- 🚀 Built with React 19 and Tailwind CSS
- 📱 Fully responsive design
- 🧩 Reusable components
- 🛣️ React Router for navigation
- 🎨 Customizable theme
- 🧰 Utility functions and custom hooks
- 📝 Well-organized project structure

## Demo

Visit the live demo at [https://adminiac-demo.vercel.app](https://adminiac-demo.vercel.app) (placeholder URL)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/adminiac.git
   cd adminiac
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
adminiac/
├── public/                 # Public assets
├── src/                    # Source files
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable UI components
│   │   ├── Button.jsx      # Button component
│   │   ├── Card.jsx        # Card component
│   │   ├── Footer.jsx      # Footer component
│   │   └── Header.jsx      # Header component
│   ├── constants/          # Constants and configuration
│   │   └── navigation.js   # Navigation routes and menu items
│   ├── hooks/              # Custom React hooks
│   │   ├── useLocalStorage.js  # Hook for localStorage
│   │   └── useMediaQuery.js    # Hook for responsive design
│   ├── layouts/            # Layout components
│   │   └── MainLayout.jsx  # Main layout wrapper
│   ├── pages/              # Page components
│   │   ├── AboutPage.jsx   # About page
│   │   ├── ContactPage.jsx # Contact page
│   │   ├── DashboardPage.jsx # Dashboard page
│   │   ├── HomePage.jsx    # Home page
│   │   └── NotFoundPage.jsx # 404 page
│   ├── utils/              # Utility functions
│   │   └── helpers.js      # Helper functions
│   ├── App.js              # Main App component with routing
│   └── index.js            # Entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Customization

### Tailwind Theme

You can customize the theme by editing the `tailwind.config.js` file. The template comes with a default theme that you can modify to match your brand.

```js
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#6B7280",
        accent: "#F59E0B",
        // Add your custom colors here
      },
      // Add other theme customizations
    },
  },
  // ...
};
```

### Components

The template includes several reusable components that you can customize or extend:

- **Button**: A versatile button component with different variants and sizes
- **Card**: A flexible card component for displaying content
- **Header**: A responsive navigation header
- **Footer**: A comprehensive footer with multiple sections

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
