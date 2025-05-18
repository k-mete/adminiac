import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  // Sample FAQ data
  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      faqs: [
        {
          id: 1,
          question: 'What is AdminIAC?',
          answer: 'AdminIAC is a modern, responsive website template built with React and Tailwind CSS. It provides a solid foundation for building beautiful and functional web applications with pre-built components and pages.',
        },
        {
          id: 2,
          question: 'Is AdminIAC free to use?',
          answer: 'Yes, AdminIAC is free to use for both personal and commercial projects. You can modify and customize it to fit your needs without any restrictions.',
        },
        {
          id: 3,
          question: 'Do I need to credit AdminIAC in my projects?',
          answer: 'While not required, we appreciate attribution. A simple link back to our website in your project\'s footer or documentation would be great!',
        },
      ],
    },
    {
      id: 'technical',
      name: 'Technical Questions',
      faqs: [
        {
          id: 4,
          question: 'What technologies does AdminIAC use?',
          answer: 'AdminIAC is built with React 19, Tailwind CSS 3, and React Router 6. It also uses various modern JavaScript features and best practices.',
        },
        {
          id: 5,
          question: 'Can I use AdminIAC with other frameworks like Next.js or Gatsby?',
          answer: 'Yes, you can adapt AdminIAC to work with other React-based frameworks. The components and styling are framework-agnostic and can be used in any React project.',
        },
        {
          id: 6,
          question: 'Is AdminIAC responsive?',
          answer: 'Yes, AdminIAC is fully responsive and works well on all devices, from mobile phones to large desktop screens. It uses Tailwind CSS\'s responsive utilities to ensure a great experience on all screen sizes.',
        },
        {
          id: 7,
          question: 'Can I customize the theme colors?',
          answer: 'Absolutely! You can easily customize the theme colors by editing the tailwind.config.js file. The template uses a well-organized color system that makes it easy to change the look and feel of your site.',
        },
      ],
    },
    {
      id: 'support',
      name: 'Support & Updates',
      faqs: [
        {
          id: 8,
          question: 'How do I get support if I have questions?',
          answer: 'You can reach out to us through our contact form or email us directly at support@adminiac.com. We typically respond within 24-48 hours.',
        },
        {
          id: 9,
          question: 'Will AdminIAC receive updates in the future?',
          answer: 'Yes, we plan to regularly update AdminIAC with new features, components, and improvements. We\'re committed to keeping it up-to-date with the latest web development trends and best practices.',
        },
        {
          id: 10,
          question: 'How can I report a bug or suggest a feature?',
          answer: 'You can report bugs or suggest features through our GitHub repository by opening an issue. We appreciate your feedback and contributions!',
        },
      ],
    },
    {
      id: 'licensing',
      name: 'Licensing & Usage',
      faqs: [
        {
          id: 11,
          question: 'What license does AdminIAC use?',
          answer: 'AdminIAC is released under the MIT License, which is a permissive license that allows you to use, modify, and distribute the template in both personal and commercial projects.',
        },
        {
          id: 12,
          question: 'Can I use AdminIAC for client projects?',
          answer: 'Yes, you can use AdminIAC for client projects without any restrictions. You don\'t need to purchase additional licenses or pay royalties.',
        },
        {
          id: 13,
          question: 'Can I sell a product built with AdminIAC?',
          answer: 'Yes, you can sell products or services built with AdminIAC. The MIT License allows for commercial use without restrictions.',
        },
      ],
    },
  ];

  // State for active category and expanded FAQs
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFaqs, setExpandedFaqs] = useState({});

  // Toggle FAQ expansion
  const toggleFaq = (faqId) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  // Get active category data
  const activeCategoryData = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Find answers to common questions about AdminIAC. If you can't find what you're looking for, feel free to contact us.
        </p>
      </section>

      {/* FAQ Content */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <nav className="space-y-1">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-2 rounded transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-primary/10 text-accent'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* FAQ List */}
        <div className="lg:col-span-3">
          <Card>
            <h2 className="text-2xl font-bold mb-6">{activeCategoryData.name}</h2>
            <div className="space-y-4">
              {activeCategoryData.faqs.map((faq) => (
                <div key={faq.id} className="border-b border-accent/10 pb-4 last:border-b-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-primary transition-transform ${
                        expandedFaqs[faq.id] ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedFaqs[faq.id] && (
                    <div className="mt-2 text-accent">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h2>
          <p className="text-accent max-w-2xl mx-auto">
            Search our knowledge base or contact our support team for assistance.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for answers..."
              className="flex-grow px-4 py-3 rounded-l border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-r font-medium hover:bg-primary/90 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-accent mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer to your question, please don't hesitate to reach out to our support team.
        </p>
        <Link to="/contact">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </Link>
      </section>
    </div>
  );
};

export default FAQPage;