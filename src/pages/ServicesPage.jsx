import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We build responsive, fast, and user-friendly websites using the latest technologies and best practices.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Performance optimization',
        'Cross-browser compatibility',
      ],
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'We create native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
      ],
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'We design intuitive and beautiful user interfaces that enhance user experience and engagement.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Visual design',
        'Interaction design',
      ],
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'We help businesses grow their online presence and reach their target audience through effective digital marketing strategies.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      features: [
        'Search engine optimization (SEO)',
        'Social media marketing',
        'Content marketing',
        'Email marketing',
      ],
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and requirements through in-depth discussions and research.',
    },
    {
      id: 2,
      title: 'Planning',
      description: 'We create a detailed plan outlining the scope, timeline, and deliverables for your project.',
    },
    {
      id: 3,
      title: 'Design',
      description: 'Our designers create wireframes and visual designs based on your requirements and feedback.',
    },
    {
      id: 4,
      title: 'Development',
      description: 'Our developers bring the designs to life using the latest technologies and best practices.',
    },
    {
      id: 5,
      title: 'Testing',
      description: 'We thoroughly test the product to ensure it meets quality standards and works as expected.',
    },
    {
      id: 6,
      title: 'Deployment',
      description: 'We deploy the product to production and ensure everything is working correctly.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          We offer a wide range of services to help businesses succeed in the digital world.
          Our team of experts is dedicated to delivering high-quality solutions tailored to your needs.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-accent mb-4">{service.description}</p>
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-accent mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <Card key={step.id} className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">{step.id}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-accent">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start your project?
        </h2>
        <p className="text-accent mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements and get a free quote.
        </p>
        <Link to="/contact">
          <Button size="lg">
            Contact Us
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;