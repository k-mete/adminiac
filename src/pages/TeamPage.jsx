import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'John has over 15 years of experience in software development and product management. He founded AdminIAC with a vision to simplify web development for businesses of all sizes.',
      skills: ['Leadership', 'Product Strategy', 'Business Development', 'Software Architecture'],
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Jane is an expert in React and modern frontend technologies with a passion for clean code. She leads our technical team and ensures we stay at the cutting edge of web development.',
      skills: ['React', 'JavaScript', 'System Architecture', 'Team Leadership'],
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Lead Designer',
      bio: 'Robert brings creative solutions to complex UI/UX challenges and has an eye for detail. He ensures all our templates are not only functional but also beautiful and user-friendly.',
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Design Systems'],
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        dribbble: 'https://dribbble.com',
      },
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Full Stack Developer',
      bio: 'Emily is proficient in both frontend and backend technologies and loves solving problems. She works on our most complex features and ensures they work flawlessly.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 5,
      name: 'Michael Wilson',
      role: 'DevOps Engineer',
      bio: 'Michael specializes in automating and optimizing our infrastructure. He ensures our deployment pipelines are efficient and our applications are always available.',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure'],
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      },
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      bio: 'Sarah leads our marketing efforts and helps us reach new customers. She has a background in digital marketing and a passion for creating compelling content.',
      skills: ['Digital Marketing', 'Content Strategy', 'SEO', 'Social Media'],
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  const departments = [
    {
      id: 1,
      name: 'Leadership',
      description: 'Our leadership team guides the company vision and strategy.',
      members: [1, 2],
    },
    {
      id: 2,
      name: 'Design',
      description: 'Our design team creates beautiful and intuitive user interfaces.',
      members: [3],
    },
    {
      id: 3,
      name: 'Development',
      description: 'Our development team builds robust and scalable applications.',
      members: [2, 4, 5],
    },
    {
      id: 4,
      name: 'Marketing',
      description: 'Our marketing team helps us reach new customers and grow our business.',
      members: [6],
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Meet the talented individuals who make AdminIAC possible. Our diverse team brings together expertise in design, development, and business strategy.
        </p>
      </section>

      {/* Departments Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((department) => (
            <Card key={department.id} className="h-full">
              <h3 className="text-xl font-semibold mb-2">{department.name}</h3>
              <p className="text-accent mb-4">{department.description}</p>
              <div className="flex flex-wrap gap-2">
                {department.members.map((memberId) => {
                  const member = teamMembers.find((m) => m.id === memberId);
                  return (
                    <div key={memberId} className="flex items-center">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span>{member.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="h-full">
              <div className="flex flex-col h-full">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
                
                <p className="text-accent mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-center space-x-4 pt-4 border-t border-accent/20">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {member.social.dribbble && (
                      <a
                        href={member.social.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join Our Team
        </h2>
        <p className="text-accent mb-8 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Check out our current openings or send us your resume.
        </p>
        <Link to="/contact">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            View Open Positions
          </button>
        </Link>
      </section>
    </div>
  );
};

export default TeamPage;