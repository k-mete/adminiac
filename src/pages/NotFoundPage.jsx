import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="space-x-4">
        <Link to="/">
          <Button>
            Go to Homepage
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;