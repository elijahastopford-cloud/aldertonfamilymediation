import React, { useState, useRef, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const serviceLinks = [
    {
      title: 'MIAM Assessment',
      description: 'Mediation Information & Assessment Meeting required before court',
      href: 'https://www.aldertonfamilymediation.co.uk/services/miam-assessment/',
    },
    {
      title: 'Child Arrangements',
      description: 'Supportive parenting plans and child-centred arrangements',
      href: 'https://www.aldertonfamilymediation.co.uk/services/child-arrangements/',
    },
    {
      title: 'Financial Mediation',
      description: 'Equitable resolution of property, pensions and assets',
      href: 'https://www.aldertonfamilymediation.co.uk/services/financial-mediation/',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F9FAF9]/95 backdrop-blur-md border-b border-[#E3EAE6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element Brand Wordmark */}
          <a
            href="https://www.aldertonfamilymediation.co.uk/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63] rounded py-1"
            aria-label="Alderton Family Mediation Home"
          >
            <BrandLogo />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-[#2C414A]"
          >
            <a
              href="https://www.aldertonfamilymediation.co.uk/"
              className="hover:text-[#183944] py-1 border-b-2 border-transparent hover:border-[#183944] transition-colors"
            >
              Home
            </a>

            {/* Accessible Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setServicesOpen(true);
                  }
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                className="inline-flex items-center gap-1.5 hover:text-[#183944] py-1 border-b-2 border-transparent hover:border-[#183944] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63] rounded cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#5F7A84] transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {servicesOpen && (
                <div
                  id="services-menu"
                  role="menu"
                  aria-label="Mediation services"
                  className="absolute left-0 mt-3 w-80 bg-white border border-[#DCE4E0] rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  {serviceLinks.map((service, index) => (
                    <a
                      key={index}
                      role="menuitem"
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="group flex flex-col px-4 py-3 hover:bg-[#F2F6F4] transition-colors border-b border-[#F0F4F2] last:border-b-0"
                    >
                      <div className="flex items-center justify-between text-[#142B34] font-medium group-hover:text-[#1B5E63]">
                        <span>{service.title}</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 text-[#8EA2AB] group-hover:text-[#1B5E63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-xs text-[#5C747F] mt-0.5 leading-relaxed">
                        {service.description}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://www.aldertonfamilymediation.co.uk/about/"
              className="hover:text-[#183944] py-1 border-b-2 border-transparent hover:border-[#183944] transition-colors"
            >
              About Us
            </a>

            <a
              href="https://www.aldertonfamilymediation.co.uk/contact/"
              className="hover:text-[#183944] py-1 border-b-2 border-transparent hover:border-[#183944] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: Direct Telephone & Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:03300100199"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#183944] hover:text-[#1B5E63] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63] rounded px-2 py-1"
              title="Call Alderton Family Mediation"
            >
              <Phone className="w-4 h-4 text-[#1B5E63]" aria-hidden="true" />
              <span className="tabular-nums">03300 100 199</span>
            </a>

            <a
              href="https://www.aldertonfamilymediation.co.uk/contact/"
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#183944] hover:bg-[#122A32] active:bg-[#0E2026] rounded transition-colors whitespace-nowrap shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#183944]"
            >
              Book Confidential Assessment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:03300100199"
              className="p-2 text-[#183944] hover:bg-[#EAF1EE] rounded-md transition-colors"
              aria-label="Call 03300 100 199"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183944] hover:bg-[#EAF1EE] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E63]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Compact Mobile Menu Overlay / Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E3EAE6] bg-[#F9FAF9] px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1 text-base font-medium text-[#1A2E38]">
            <a
              href="https://www.aldertonfamilymediation.co.uk/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-[#EEF4F1] transition-colors"
            >
              Home
            </a>

            {/* Mobile Services Accordion */}
            <div className="px-3 py-2">
              <span className="text-xs uppercase tracking-wider text-[#5D7681] font-semibold block mb-2">
                Services
              </span>
              <div className="space-y-1 pl-2 border-l-2 border-[#D3DFDA]">
                {serviceLinks.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-[#233C46] hover:text-[#1B5E63] transition-colors"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://www.aldertonfamilymediation.co.uk/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-[#EEF4F1] transition-colors"
            >
              About Us
            </a>

            <a
              href="https://www.aldertonfamilymediation.co.uk/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md hover:bg-[#EEF4F1] transition-colors"
            >
              Contact Us
            </a>

            <div className="pt-4 border-t border-[#E3EAE6] space-y-3">
              <a
                href="tel:03300100199"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#183944] bg-[#EEF4F1] rounded-md"
              >
                <Phone className="w-4 h-4 text-[#1B5E63]" aria-hidden="true" />
                <span>Call 03300 100 199</span>
              </a>

              <a
                href="https://www.aldertonfamilymediation.co.uk/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#183944] rounded-md shadow-sm"
              >
                Book Confidential Assessment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
