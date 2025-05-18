import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  // State for billing period (monthly/yearly)
  const [isYearly, setIsYearly] = useState(false);

  // Pricing plans data
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 19,
      yearlyPrice: 190, // 2 months free
      features: [
        { text: 'Up to 5 projects', included: true },
        { text: 'Up to 10 users', included: true },
        { text: '5GB storage', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Email support', included: true },
        { text: 'API access', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Ideal for growing teams and businesses',
      monthlyPrice: 49,
      yearlyPrice: 490, // 2 months free
      features: [
        { text: 'Up to 20 projects', included: true },
        { text: 'Up to 50 users', included: true },
        { text: '20GB storage', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Email support', included: true },
        { text: 'API access', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: false },
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Advanced features for large organizations',
      monthlyPrice: 99,
      yearlyPrice: 990, // 2 months free
      features: [
        { text: 'Unlimited projects', included: true },
        { text: 'Unlimited users', included: true },
        { text: '100GB storage', included: true },
        { text: 'Custom analytics', included: true },
        { text: 'Email support', included: true },
        { text: 'API access', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be reflected in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans. We do not accept cryptocurrency at this time.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card is required to start your trial.',
    },
    {
      question: 'What happens when my trial ends?',
      answer: 'When your trial ends, your account will be automatically downgraded to our free plan with limited features. You can upgrade to a paid plan at any time.',
    },
    {
      question: 'Do you offer discounts for non-profits or educational institutions?',
      answer: 'Yes, we offer special discounts for non-profit organizations, educational institutions, and open-source projects. Please contact our sales team for more information.',
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service within the first 30 days, you can request a full refund, no questions asked.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-accent max-w-3xl mx-auto mb-8">
          Choose the plan that's right for you and start building amazing websites with AdminIAC.
          All plans include a 14-day free trial.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className={`mr-3 ${!isYearly ? 'font-semibold text-text' : 'text-accent'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-primary/20"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`ml-3 ${isYearly ? 'font-semibold text-text' : 'text-accent'}`}>
            Yearly <span className="text-primary font-medium">(Save 20%)</span>
          </span>
        </div>
      </section>

      {/* Pricing Plans */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`h-full ${plan.popular ? 'border-2 border-primary relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-accent mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-accent ml-2 mb-1">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-primary text-sm mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {feature.included ? (
                          <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className={`ml-2 ${feature.included ? 'text-text' : 'text-accent/60'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link to="/contact">
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="bg-primary/10 rounded-lg p-8 md:p-12">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Need a custom solution?</h2>
            <p className="text-accent">
              We offer custom plans for large organizations with specific requirements.
              Contact our sales team to discuss your needs.
            </p>
          </div>
          <div>
            <Link to="/contact">
              <Button size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-accent/20">
                <th className="py-4 px-6 text-left">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="py-4 px-6 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">Projects</td>
                <td className="py-4 px-6 text-center">Up to 5</td>
                <td className="py-4 px-6 text-center">Up to 20</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">Users</td>
                <td className="py-4 px-6 text-center">Up to 10</td>
                <td className="py-4 px-6 text-center">Up to 50</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">Storage</td>
                <td className="py-4 px-6 text-center">5GB</td>
                <td className="py-4 px-6 text-center">20GB</td>
                <td className="py-4 px-6 text-center">100GB</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">Analytics</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center">Advanced</td>
                <td className="py-4 px-6 text-center">Custom</td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">API Access</td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-accent/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr className="border-b border-accent/10">
                <td className="py-4 px-6 font-medium">Custom Branding</td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-accent/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Priority Support</td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-accent/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-accent/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </td>
                <td className="py-4 px-6 text-center">
                  <svg className="h-5 w-5 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-accent">{faq.answer}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq">
            <Button variant="outline">
              View All FAQs
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto opacity-90">
          Start your 14-day free trial today. No credit card required.
        </p>
        <Link to="/contact">
          <button className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors">
            Start Free Trial
          </button>
        </Link>
      </section>
    </div>
  );
};

export default PricingPage;