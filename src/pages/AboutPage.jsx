import React from 'react';
import Card from '../components/Card';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'John has over 15 years of experience in software development and product management.',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Jane is an expert in React and modern frontend technologies with a passion for clean code.',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Lead Designer',
      bio: 'Robert brings creative solutions to complex UI/UX challenges and has an eye for detail.',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Full Stack Developer',
      bio: 'Emily is proficient in both frontend and backend technologies and loves solving problems.',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <div className="space-y-12">
      {/* About Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <Card className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
            At AdminIAC, our mission is to provide developers with high-quality, 
            customizable templates that accelerate the development process. We believe 
            that beautiful design and clean code should be accessible to everyone.
          </p>
          
          <h2>Our Story</h2>
          <p>
            AdminIAC was founded in 2023 by a group of passionate developers who were 
            tired of starting each project from scratch. We wanted to create a solid 
            foundation that could be easily customized to fit any project's needs.
          </p>
          
          <p>
            Today, our templates are used by thousands of developers worldwide to build 
            everything from simple landing pages to complex administrative dashboards.
          </p>
          
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We never compromise on code quality or design aesthetics.</li>
            <li><strong>Simplicity:</strong> We believe in keeping things simple and intuitive.</li>
            <li><strong>Innovation:</strong> We continuously explore new technologies and best practices.</li>
            <li><strong>Community:</strong> We value feedback and contributions from our user community.</li>
          </ul>
        </Card>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="h-full">
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Our Journey</h2>
        <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
            <h3 className="text-lg font-semibold">2023</h3>
            <p className="text-gray-600">Founded AdminIAC with a vision to simplify web development</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
            <h3 className="text-lg font-semibold">2024</h3>
            <p className="text-gray-600">Released our first set of templates and reached 1,000 users</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
            <h3 className="text-lg font-semibold">2025</h3>
            <p className="text-gray-600">Expanded our team and launched premium templates</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-primary bg-white"></div>
            <h3 className="text-lg font-semibold">Today</h3>
            <p className="text-gray-600">Continuing to innovate and serve the developer community</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;