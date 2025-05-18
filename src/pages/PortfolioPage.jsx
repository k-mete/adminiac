import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  // Sample portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      category: 'Web Design',
      description: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      client: 'Fashion Retailer',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'An interactive dashboard for financial data visualization and analysis with real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      client: 'Investment Firm',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'Mobile App',
      description: 'A mobile application for patients to schedule appointments, view medical records, and communicate with healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      client: 'Medical Center',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      link: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Web Application',
      description: 'A comprehensive platform for property listings, virtual tours, and real estate transactions.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      client: 'Property Management Company',
      technologies: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Educational Learning Platform',
      category: 'Web Application',
      description: 'An interactive learning platform with courses, quizzes, and progress tracking for students and educators.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      client: 'Educational Institution',
      technologies: ['React', 'Redux', 'Express', 'MongoDB'],
      link: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Restaurant Ordering System',
      category: 'Web Application',
      description: 'A digital menu and ordering system for restaurants with kitchen management and delivery tracking.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      client: 'Restaurant Chain',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      featured: false,
    },
    {
      id: 7,
      title: 'Travel Booking Platform',
      category: 'Web Design',
      description: 'A comprehensive travel booking platform for flights, hotels, and experiences with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
      client: 'Travel Agency',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      link: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized fitness plans.',
      image: 'https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      client: 'Fitness Brand',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      link: '#',
      featured: false,
    },
  ];

  // Get all unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Explore our latest projects and see how we've helped our clients achieve their goals with innovative solutions and exceptional design.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden h-full">
              <div className="md:flex h-full">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-accent mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium">Client: {project.client}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/portfolio/${project.id}`}>
                      <Button>View Project</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-accent mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium">Client: {project.client}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link to={`/portfolio/${project.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Discovery</h3>
            <p className="text-accent">We start by understanding your business, goals, and requirements.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Planning</h3>
            <p className="text-accent">We create a detailed plan and roadmap for your project.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <p className="text-accent">Our team builds your solution using the latest technologies.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Delivery</h3>
            <p className="text-accent">We deliver a polished product and provide ongoing support.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-accent mb-6 italic">
                "The team at AdminIAC delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and commitment to quality is impressive."
              </p>
              <div className="mt-auto flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-accent">Marketing Director, Fashion Retailer</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-accent mb-6 italic">
                "Working with AdminIAC on our financial dashboard was a great experience. They understood our complex requirements and delivered a solution that has significantly improved our operations."
              </p>
              <div className="mt-auto flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Michael Thompson</p>
                  <p className="text-sm text-accent">CTO, Investment Firm</p>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-accent mb-6 italic">
                "The healthcare app developed by AdminIAC has transformed how we interact with our patients. The user experience is intuitive, and the technical implementation is flawless."
              </p>
              <div className="mt-auto flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Dr. Emily Wilson</p>
                  <p className="text-sm text-accent">Director, Medical Center</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-accent mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your business goals with our expertise in web and mobile development.
        </p>
        <Link to="/contact">
          <Button size="lg">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default PortfolioPage;