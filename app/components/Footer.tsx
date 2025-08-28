import { Image } from '@shopify/hydrogen';
import { Link, useLocation } from 'react-router';
import CardSection from './CardSection';
import { useState } from 'react';

export function Footer() {
  const [isFooterNewsletterSubmitted, setIsFooterNewsletterSubmitted] = useState(false);
  const location = useLocation(); // Get current location

  const handleFooterNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFooterNewsletterSubmitted(true);
  
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const logo = `${import.meta.env.VITE_LOGO}`;

  // List of links for Useful Links section
  const usefulLinks = [
    { to: '/contact', label: 'Contact Us' },
    { to: '/faq', label: 'FAQ' },
    { to: '/payment', label: 'Payment Terms' },
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/returns', label: 'Return Policy' },
    { to: '/shipping', label: 'Shipping Policy' },
    { to: '/terms', label: 'Terms of Service' },
  ];

  return (
    <div>
      <CardSection />
      <footer>
        <svg className='-mb-0.5' viewBox="0 0 1440 110" style={{ fill: 'var(--color-2)' }}>
          <path d="M0,22L1440,88L2880,22L4320,88L5760,44L7200,22L8640,11L10080,44L11520,77L12960,77L14400,55L15840,0L17280,33L18720,22L20160,11L21600,22L23040,22L24480,55L25920,33L27360,99L28800,33L30240,88L31680,11L33120,88L34560,22L34560,110L33120,110L31680,110L30240,110L28800,110L27360,110L25920,110L24480,110L23040,110L21600,110L20160,110L18720,110L17280,110L15840,110L14400,110L12960,110L11520,110L10080,110L8640,110L7200,110L5760,110L4320,110L2880,110L1440,110L0,110Z"></path>
        </svg>

        <div className="footer text-white">
          <div className="container mx-auto px-10 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* About Us */}
              <div>
                <div className="pb-6 flex items-center justify-center lg:block md:block">
                  <Image src={logo} alt="Store Logo" className="!h-12 !w-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed w-3/4">
                    Welcome to {import.meta.env.VITE_STORE_TITLE} – Built by Enthusiasts, for Enthusiasts.
                  </p>
                  <p className="!text-sm leading-relaxed w-3/4">
                    Whether you&apos;re tearing up the road on two wheels or cruising in your car, into tuning, chasing adrenaline, or just serious about keeping your ride in top shape — Torque Haus has your back with gear that delivers on style, performance, and reliability.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-base lg:text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>Need Assistance or Have Questions?</strong>
                  </div>
                  <div>
                    Our team is here to help! For any inquiries, simply send us an email at{' '}
                    <a
                      href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                      className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4"
                    >
                      {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                    </a>.
                  </div>
                  <div>
                    <div className="font-semibold">Customer Service Hours:</div>
                    <div>Monday to Friday — 9:00 AM to 5:00 PM </div>
                  </div>
                  <ul className="!list-disc !list-outside !pl-5 space-y-1 mt-2 text-sm sm:text-base">
                    <li className="break-words"><strong>Company:</strong> {import.meta.env.VITE_COMPANY_NAME}</li>
                    <li className="break-words"><strong>Address:</strong> {import.meta.env.VITE_COMPANY_ADDRESS}</li>
                    <li className="break-words"><strong>Mail:</strong> <a
                      href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                      className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4 break-all"
                    >
                      {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                    </a></li>
                    <li><strong>Tel:</strong> <a
                      href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`}
                      className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4"
                    >
                      {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
                    </a></li>
                  </ul>
                </div>
              </div>

              {/* Useful Links Section */}
              <div className="space-y-4 lg:space-y-3">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Useful Links</h3>
                <nav className="flex flex-col gap-3">
                  {usefulLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`group relative inline-block text-sm !text-white transition-colors w-fit ${
                        location.pathname === link.to ? 'active' : ''
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${
                          location.pathname === link.to
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Sign Up for Our Emails Section */}
              <div className="space-y-4">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-4">Sign Up for Our Emails</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium text-sm lg:text-base mb-2">Need Help or Have Questions?</h4>
                    <p className="!text-white text-sm lg:text-base">
                      Our team is here to assist you! Just send us an email at{' '}
                      <a
                        href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                        className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4"
                      >
                        {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                      </a>
                    </p>
                  </div>
                  <form onSubmit={handleFooterNewsletterSubmit} className="space-y-3">
                    <div>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-[var(--color-2)] border !border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all !rounded-full"
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-md transition-colors"
                          aria-label="Subscribe"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                      {isFooterNewsletterSubmitted && (
                        <div className="w-full mt-3 text-center sm:text-left">
                          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-success flex-shrink-0 w-4 h-4" viewBox="0 0 13 13">
                              <path d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z" fill="#428445" stroke="white" strokeWidth="0.7"></path>
                              <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white"></path>
                              <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white"></path>
                            </svg>
                            <span className="font-semibold text-sm text-white">Thanks for subscribing</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Payment Methods and Copyright */}
            <div className="mt-12 pt-8">
              <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white rounded flex items-center justify-center">
                      <Image src='./Visa_Logo.svg' width={24} height={25} className='w-12 h-6' />
                    </div>
                    <div className="bg-white rounded flex items-center justify-center">
                      <Image src='./masterCard_Logo.svg' width={24} height={25} className='w-12 h-6' />
                    </div>
                    <div className="bg-white rounded flex items-center justify-center">
                      <Image src='./apple_Logo.svg' width={24} height={25} className='w-12 h-6' />
                    </div>
                    <div className="bg-white rounded flex items-center justify-center">
                      <Image src='./American-Express_Logo.svg' width={24} height={25} className='w-12 h-6' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-white !text-sm">
                  © 2025, {import.meta.env.VITE_STORE_TITLE}®
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}