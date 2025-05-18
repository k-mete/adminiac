import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const BlogPostPage = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the post data based on the ID
  // For this template, we'll use sample data
  const post = {
    id: parseInt(id),
    title: 'Getting Started with React and Tailwind CSS',
    excerpt: 'Learn how to set up a new project with React and Tailwind CSS, and build your first component.',
    content: `
      <p>React and Tailwind CSS are two powerful technologies that, when combined, can help you build beautiful and functional user interfaces quickly and efficiently.</p>
      
      <h2>Setting Up Your Project</h2>
      
      <p>To get started with React and Tailwind CSS, you'll need to set up a new project. You can use Create React App, which is a popular tool for creating React applications:</p>
      
      <pre><code>npx create-react-app my-app
cd my-app</code></pre>
      
      <p>Next, you'll need to install Tailwind CSS and its dependencies:</p>
      
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Configure your template paths in the <code>tailwind.config.js</code> file:</p>
      
      <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <p>Add the Tailwind directives to your CSS file:</p>
      
      <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
      
      <h2>Building Your First Component</h2>
      
      <p>Now that you have set up your project, let's build a simple card component using React and Tailwind CSS:</p>
      
      <pre><code>import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;</code></pre>
      
      <p>You can then use this component in your application:</p>
      
      <pre><code>import Card from './components/Card';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My App</h1>
      <Card 
        title="Welcome to My App" 
        description="This is a simple card component built with React and Tailwind CSS." 
      />
    </div>
  );
}</code></pre>
      
      <h2>Customizing Tailwind</h2>
      
      <p>Tailwind CSS is highly customizable. You can extend the default theme in the <code>tailwind.config.js</code> file to include your own colors, fonts, and more:</p>
      
      <pre><code>module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DCD9F",
        secondary: "#169976",
        accent: "#222222",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>React and Tailwind CSS are a powerful combination for building modern web applications. With React's component-based architecture and Tailwind's utility-first approach to CSS, you can create beautiful and responsive user interfaces with minimal effort.</p>
      
      <p>In future articles, we'll explore more advanced topics such as creating responsive layouts, implementing dark mode, and optimizing performance.</p>
    `,
    author: {
      name: 'Jane Smith',
      role: 'CTO',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Jane is an expert in React and modern frontend technologies with a passion for clean code.',
    },
    category: 'Development',
    tags: ['React', 'Tailwind CSS', 'Frontend'],
    date: '2024-04-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    relatedPosts: [
      {
        id: 2,
        title: 'Optimizing Performance in React Applications',
        excerpt: 'Discover techniques to improve the performance of your React applications and provide a better user experience.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
        category: 'Performance',
        date: '2024-04-10',
      },
      {
        id: 3,
        title: 'Building Responsive Layouts with Tailwind CSS',
        excerpt: 'Learn how to create responsive layouts that look great on all devices using Tailwind CSS.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80',
        category: 'Design',
        date: '2024-04-05',
      },
    ],
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section>
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 md:p-10 text-white">
              <div className="mb-2">
                <span className="inline-block bg-primary/90 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm opacity-80">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card>
          
          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link key={index} to={`/blog?tag=${tag}`}>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="mt-8">
            <Card>
              <div className="flex items-start">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{post.author.name}</h3>
                  <p className="text-primary text-sm mb-2">{post.author.role}</p>
                  <p className="text-accent">{post.author.bio}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Sidebar */}
        <div>
          {/* Related Posts */}
          <Card className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {post.relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                  <div className="flex items-start">
                    <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 mr-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                      <p className="text-xs text-accent mt-1">{formatDate(relatedPost.date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
          
          {/* Newsletter */}
          <Card>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-accent mb-4">
              Get the latest articles, tutorials, and updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Comments Section */}
      <section>
        <Card>
          <h3 className="text-xl font-semibold mb-6">Comments (3)</h3>
          
          {/* Comment Form */}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Leave a comment</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 rounded border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                placeholder="Your Comment"
                rows={4}
                className="w-full px-4 py-2 rounded border border-accent/20 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <Button>
                Post Comment
              </Button>
            </div>
          </div>
          
          {/* Comments List */}
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="border-b border-accent/10 pb-6">
              <div className="flex items-start">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Commenter"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h5 className="font-medium mr-2">Michael Brown</h5>
                    <span className="text-xs text-accent">April 16, 2024</span>
                  </div>
                  <p className="text-accent">
                    Great article! I've been using React with Tailwind for a few months now and it's been a game-changer for my productivity.
                  </p>
                  <button className="text-primary text-sm mt-2 hover:underline">Reply</button>
                </div>
              </div>
            </div>
            
            {/* Comment 2 */}
            <div className="border-b border-accent/10 pb-6">
              <div className="flex items-start">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Commenter"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h5 className="font-medium mr-2">Lisa Johnson</h5>
                    <span className="text-xs text-accent">April 15, 2024</span>
                  </div>
                  <p className="text-accent">
                    Thanks for the detailed guide! The code examples are really helpful. I was struggling with setting up Tailwind with React but this made it clear.
                  </p>
                  <button className="text-primary text-sm mt-2 hover:underline">Reply</button>
                </div>
              </div>
              
              {/* Nested Reply */}
              <div className="flex items-start mt-4 ml-14">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h5 className="font-medium mr-2">{post.author.name}</h5>
                    <span className="text-xs text-accent">April 15, 2024</span>
                  </div>
                  <p className="text-accent">
                    You're welcome, Lisa! I'm glad you found it helpful. Let me know if you have any other questions.
                  </p>
                  <button className="text-primary text-sm mt-2 hover:underline">Reply</button>
                </div>
              </div>
            </div>
            
            {/* Comment 3 */}
            <div>
              <div className="flex items-start">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Commenter"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h5 className="font-medium mr-2">David Wilson</h5>
                    <span className="text-xs text-accent">April 14, 2024</span>
                  </div>
                  <p className="text-accent">
                    I've been using Bootstrap for years, but after reading this, I'm convinced to give Tailwind a try. The customization options look amazing!
                  </p>
                  <button className="text-primary text-sm mt-2 hover:underline">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Share Section */}
      <section className="bg-primary/10 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Share this article</h3>
        <p className="text-accent mb-6">If you found this article helpful, please share it with your friends and colleagues.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-[#1877F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="bg-[#0A66C2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="#" className="bg-accent text-white p-3 rounded-full hover:opacity-90 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;