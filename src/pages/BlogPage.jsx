import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const BlogPage = () => {
  // Sample blog posts data
  const allPosts = [
    {
      id: 1,
      title: 'Getting Started with React and Tailwind CSS',
      excerpt: 'Learn how to set up a new project with React and Tailwind CSS, and build your first component.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'Jane Smith',
        role: 'CTO',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      category: 'Development',
      tags: ['React', 'Tailwind CSS', 'Frontend'],
      date: '2024-04-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: 'Optimizing Performance in React Applications',
      excerpt: 'Discover techniques to improve the performance of your React applications and provide a better user experience.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'John Doe',
        role: 'CEO & Founder',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      category: 'Performance',
      tags: ['React', 'Performance', 'Optimization'],
      date: '2024-04-10',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    },
    {
      id: 3,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Learn how to create responsive layouts that look great on all devices using Tailwind CSS.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'Robert Johnson',
        role: 'Lead Designer',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      category: 'Design',
      tags: ['Tailwind CSS', 'Responsive Design', 'CSS'],
      date: '2024-04-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80',
    },
    {
      id: 4,
      title: 'State Management in React: Context API vs. Redux',
      excerpt: 'Compare different state management solutions in React and learn when to use each one.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'Emily Davis',
        role: 'Full Stack Developer',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      category: 'Development',
      tags: ['React', 'State Management', 'Redux', 'Context API'],
      date: '2024-03-28',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      title: 'Deploying React Applications to Production',
      excerpt: 'Learn how to deploy your React application to various hosting platforms and optimize for production.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'Michael Wilson',
        role: 'DevOps Engineer',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      },
      category: 'DevOps',
      tags: ['Deployment', 'CI/CD', 'Hosting'],
      date: '2024-03-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    },
    {
      id: 6,
      title: 'Accessibility in React: Building Inclusive Web Applications',
      excerpt: 'Discover best practices for creating accessible React applications that everyone can use.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
      author: {
        name: 'Sarah Johnson',
        role: 'Marketing Manager',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      },
      category: 'Accessibility',
      tags: ['Accessibility', 'React', 'Inclusive Design'],
      date: '2024-03-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
  ];

  // State for filtering and pagination
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get all unique categories
  const categories = ['All', ...new Set(allPosts.map(post => post.category))];

  // Filter posts by category
  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === activeCategory);

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Stay up to date with the latest news, tutorials, and insights from our team of experts.
        </p>
      </section>

      {/* Category Filter */}
      <section>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
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

      {/* Featured Post */}
      {currentPage === 1 && activeCategory === 'All' && (
        <section>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={allPosts[0].image}
                  alt={allPosts[0].title}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="mb-2">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {allPosts[0].category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{allPosts[0].title}</h2>
                <p className="text-accent mb-6">{allPosts[0].excerpt}</p>
                <div className="flex items-center mb-6">
                  <img
                    src={allPosts[0].author.avatar}
                    alt={allPosts[0].author.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{allPosts[0].author.name}</p>
                    <p className="text-sm text-accent">
                      {formatDate(allPosts[0].date)} · {allPosts[0].readTime}
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link to={`/blog/${allPosts[0].id}`}>
                    <Button>Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentPosts.map((post) => (
            <Card key={post.id} className="h-full overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="relative h-48 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-accent mb-4">{post.excerpt}</p>
                  <div className="flex items-center mb-4 mt-auto">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-accent">
                        {formatDate(post.date)} · {post.readTime}
                      </p>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="flex justify-center">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded ${
                  currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
            <p className="text-accent">
              Get the latest articles, tutorials, and updates delivered to your inbox.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;