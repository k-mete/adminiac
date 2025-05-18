import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to AdminIAC
            </h1>
            <p className="text-xl mb-8">
              A modern React template with Tailwind CSS for building beautiful and responsive web applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                className="font-semibold"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                View on GitHub
              </Button>
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-accent/10 border-accent text-accent font-semibold hover:bg-accent/20"
                >
                  Explore Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-accent max-w-2xl mx-auto">
            Everything you need to build modern React applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="React + Tailwind"
            subtitle="Modern tech stack for rapid development"
            className="h-full"
          >
            <p className="text-accent">
              Built with React and Tailwind CSS for a powerful and flexible development experience.
            </p>
          </Card>

          <Card
            title="Responsive Design"
            subtitle="Looks great on all devices"
            className="h-full"
          >
            <p className="text-accent">
              Fully responsive layout that works perfectly on desktop, tablet, and mobile devices.
            </p>
          </Card>

          <Card
            title="Component Library"
            subtitle="Reusable UI components"
            className="h-full"
          >
            <p className="text-accent">
              A collection of reusable components to help you build your application faster.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-accent mb-8 max-w-2xl mx-auto">
          Start building your next project with AdminIAC today.
        </p>
        <Link to="/dashboard">
          <Button size="lg">
            Go to Dashboard
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
