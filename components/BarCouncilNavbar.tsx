'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedLogo from "./AnimatedLogo";
import AnimatedBarText from "./AnimatedBarText";

// Navigation structure with shorter titles and dropdowns
const navigationItems = [
  {
    title: "About us",
    href: "/about-us",
    dropdown: [
      { title: "About us", href: "/about-us" },
      { title: "About the Bar", href: "/about-bar" },
      { title: "The Bar Association Team", href: "/team" },
    ]
  },
  {
    title: "Find a Lawyer",
    href: "/find-lawyer",
    dropdown: [
      { title: "Lawyer directory", href: "/find-lawyer" },
      { title: "Contact Submission Form", href: "/contact-submission-form" },
    ]
  },
  {
    title: "Becoming a Lawyer",
    href: "/becoming-lawyer",
    dropdown: [
      { title: "How to become a Lawyer", href: "/becoming-lawyer" },
      { title: "Important/Law Books", href: "/law-books" },
    ]
  },
  {
    title: "Circular",
    href: "/circular",
    dropdown: [
      { title: "Latest circulars", href: "/latest-circulars" },
      { title: "Administrative circulars", href: "/administrative-circulars" },
      { title: "Practice circulars", href: "/practice-circulars" },
      { title: "Archive", href: "/circular-archive" },
    ]
  },
  {
    title: "Policy",
    href: "/policy",
    dropdown: [
      { title: "Policy", href: "/policy" },
      { title: "Search Judgement", href: "https://caselaw.shc.gov.pk/caselaw/search-all/search" },
    ]
  },
  {
    title: "Media",
    href: "/media",
    dropdown: [
      { title: "Press releases", href: "/media/press-release" },
      { title: "Media contacts", href: "/media-contacts" },
      { title: "Campaigns", href: "/campaigns" },
      { title: "Publications", href: "/publications" },
    ]
  },
];

export default function BarCouncilNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { language, toggleLanguage, t } = useLanguage();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log("Searching for:", searchQuery);

      // Search and scroll to text on current page
      searchAndScrollToText(searchQuery.trim());
      setIsSearchActive(false);
    }
  };

  const searchAndScrollToText = (searchText: string) => {
    // Remove any existing highlights
    removeHighlights();

    // Define smart search patterns and their target selectors
    const smartSearchMap = {
      // Services related
      'service': ['[data-section="services"]', '.services', '[id*="service"]', 'button[href*="service"]'],
      'services': ['[data-section="services"]', '.services', '[id*="service"]', 'button[href*="service"]'],
      'legal': ['[data-section="services"]', '.services', '[id*="legal"]', 'button[href*="legal"]'],
      'law': ['[data-section="services"]', '.services', '[id*="law"]', 'button[href*="law"]'],
      'lawyer': ['[data-section="find-lawyer"]', '.lawyers', '[id*="lawyer"]', 'button[href*="lawyer"]', 'a[href*="lawyer"]'],
      'lawyers': ['[data-section="find-lawyer"]', '.lawyers', '[id*="lawyer"]', 'button[href*="lawyer"]', 'a[href*="lawyer"]'],

      // Contact related
      'contact': ['[data-section="contact"]', '.contact', '[id*="contact"]', 'button[href*="contact"]', 'a[href*="contact"]'],
      'phone': ['[data-section="contact"]', '.contact', '[href^="tel:"]'],
      'email': ['[data-section="contact"]', '.contact', '[href^="mailto:"]'],
      'address': ['[data-section="contact"]', '.contact', '.address'],

      // About related
      'about': ['[data-section="about"]', '.about', '[id*="about"]', 'button[href*="about"]', 'a[href*="about"]'],
      'team': ['[data-section="team"]', '.team', '[id*="team"]', 'button[href*="team"]', 'a[href*="team"]'],

      // Registration/Join related
      'join': ['[data-section="join"]', '.join', '[id*="join"]', 'button[href*="join"]', 'a[href*="join"]'],
      'register': ['[data-section="register"]', '.register', '[id*="register"]', 'button[href*="register"]', 'a[href*="register"]'],
      'member': ['[data-section="member"]', '.member', '[id*="member"]', 'button[href*="member"]', 'a[href*="member"]'],

      // Training/Education related
      'training': ['[data-section="training"]', '.training', '[id*="training"]', 'button[href*="training"]', 'a[href*="training"]'],
      'education': ['[data-section="education"]', '.education', '[id*="education"]', 'button[href*="education"]', 'a[href*="education"]'],
      'course': ['[data-section="course"]', '.course', '[id*="course"]', 'button[href*="course"]', 'a[href*="course"]'],

      // Circular related
      'circular': ['[data-section="circular"]', '.circular', '[id*="circular"]', 'button[href*="circular"]', 'a[href*="circular"]'],
      'notice': ['[data-section="circular"]', '.circular', '[id*="notice"]', 'button[href*="notice"]', 'a[href*="notice"]'],

      // Policy related
      'policy': ['[data-section="policy"]', '.policy', '[id*="policy"]', 'button[href*="policy"]', 'a[href*="policy"]'],

      // Media related
      'media': ['[data-section="media"]', '.media', '[id*="media"]', 'button[href*="media"]', 'a[href*="media"]'],
      'news': ['[data-section="media"]', '.media', '[id*="news"]', 'button[href*="news"]', 'a[href*="news"]'],

      // Support related
      'support': ['[data-section="support"]', '.support', '[id*="support"]', 'button[href*="support"]', 'a[href*="support"]'],
      'help': ['[data-section="support"]', '.support', '[id*="help"]', 'button[href*="help"]', 'a[href*="help"]']
    };

    const searchLower = searchText.toLowerCase();
    let targetElement: Element | null = null;

    // First, try to find exact matches in smart search map
    if (smartSearchMap[searchLower as keyof typeof smartSearchMap]) {
      const selectors = smartSearchMap[searchLower as keyof typeof smartSearchMap];

      for (const selector of selectors) {
        targetElement = document.querySelector(selector);
        if (targetElement) break;
      }
    }

    // If no exact match, try partial matches
    if (!targetElement) {
      for (const [key, selectors] of Object.entries(smartSearchMap)) {
        if (key.includes(searchLower) || searchLower.includes(key)) {
          for (const selector of selectors) {
            targetElement = document.querySelector(selector);
            if (targetElement) break;
          }
          if (targetElement) break;
        }
      }
    }

    // If still no match, try to find actionable elements (buttons, links) containing the search text
    if (!targetElement) {
      const actionableSelectors = [
        `button:contains("${searchText}")`,
        `a:contains("${searchText}")`,
        `[role="button"]:contains("${searchText}")`,
        `.btn:contains("${searchText}")`,
        `.button:contains("${searchText}")`
      ];

      // Since CSS :contains() doesn't work in querySelector, we'll search manually
      const buttons = document.querySelectorAll('button, a, [role="button"], .btn, .button');
      for (const button of buttons) {
        if (button.textContent?.toLowerCase().includes(searchLower)) {
          targetElement = button;
          break;
        }
      }
    }

    // If still no match, look for headings or sections containing the text
    if (!targetElement) {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .heading, .title, [data-section]');
      for (const heading of headings) {
        if (heading.textContent?.toLowerCase().includes(searchLower)) {
          targetElement = heading;
          break;
        }
      }
    }

    // Finally, if nothing specific found, do a general text search but prioritize actionable elements
    if (!targetElement) {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            const parent = node.parentNode as Element;
            if (parent?.tagName === 'SCRIPT' || parent?.tagName === 'STYLE') {
              return NodeFilter.FILTER_REJECT;
            }
            // Prioritize actionable elements
            if (parent?.closest('button, a, [role="button"], .btn, .button')) {
              return NodeFilter.FILTER_ACCEPT;
            }
            // Accept headings and important sections
            if (parent?.closest('h1, h2, h3, h4, h5, h6, .heading, .title, [data-section]')) {
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_REJECT;
          }
        }
      );

      let node;
      while (node = walker.nextNode()) {
        const text = node.textContent || '';
        if (text.toLowerCase().includes(searchLower)) {
          targetElement = (node.parentNode as Element)?.closest('button, a, [role="button"], .btn, .button, h1, h2, h3, h4, h5, h6, .heading, .title, [data-section]') || node.parentNode as Element;
          break;
        }
      }
    }

    // Scroll to the target element
    if (targetElement) {
      // Remove any existing search highlights
      removeHighlights();

      // Add highlight to the target element
      targetElement.classList.add('search-target');

      // Add custom styles for highlighting
      const style = document.createElement('style');
      style.id = 'search-highlight-style';
      style.textContent = `
        .search-target {
          outline: 3px solid #14b8a6 !important;
          outline-offset: 2px !important;
          background-color: rgba(20, 184, 166, 0.1) !important;
          border-radius: 6px !important;
          transition: all 0.3s ease !important;
        }
      `;

      // Remove existing style if any
      const existingStyle = document.getElementById('search-highlight-style');
      if (existingStyle) existingStyle.remove();

      document.head.appendChild(style);

      // Scroll to the element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Add a subtle animation
      if (targetElement instanceof HTMLElement) {
        targetElement.style.transform = 'scale(1.02)';
        setTimeout(() => {
          if (targetElement instanceof HTMLElement) {
            targetElement.style.transform = 'scale(1)';
          }
        }, 500);
      }

      // Auto-remove highlight after 3 seconds
      setTimeout(() => {
        if (targetElement) {
          targetElement.classList.remove('search-target');
          const style = document.getElementById('search-highlight-style');
          if (style) style.remove();
        }
      }, 3000);

    } else {
      // If no match found, show a helpful message
      alert(`"${searchText}" not found. Try searching for: services, lawyers, contact, about, join, training, etc.`);
    }
  };

  const removeHighlights = () => {
    // Remove old yellow text highlights
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(highlight.textContent || ''), highlight);
        parent.normalize(); // Merge adjacent text nodes
      }
    });

    // Remove target highlights
    const targets = document.querySelectorAll('.search-target');
    targets.forEach(target => {
      target.classList.remove('search-target');
    });

    // Remove highlight styles
    const style = document.getElementById('search-highlight-style');
    if (style) style.remove();
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    };

    if (isSearchActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchActive]);


  // Clean up highlights when component unmounts
  useEffect(() => {
    return () => {
      removeHighlights();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-6 text-sm">
            <Link href="https://app.sindhbarcouncil.org/advocates_portal/login.php" className="text-gray-600 hover:text-teal-600 transition-colors">
              MyBar
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
            <Link href="/e-cards" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center font-bold animate-blink-slow">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
              Generate E-Cards
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Admin
            </Link>
            <div className="relative" ref={searchRef}>
              <button
                onClick={handleSearchClick}
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
              >
                <MagnifyingGlassIcon className="w-4 h-4 mr-1" />
                Search
              </button>

              {isSearchActive && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <form onSubmit={handleSearchSubmit} className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1 relative">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search: services, lawyers, contact..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          autoFocus
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Search
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        removeHighlights();
                        setSearchQuery("");
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      Clear highlights
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-3 group overflow-hidden">
              <AnimatedLogo />
              <AnimatedBarText />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center">
              <div className="flex space-x-2">
                {navigationItems.map((item, index) => (
                  <div key={index} className="relative group">
                    <button
                      className="flex items-center px-4 py-2 text-base font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors whitespace-nowrap rounded-full"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.title}</span>
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === index && (
                      <div
                        className="absolute top-full left-0 z-50 mt-0 w-64 bg-[#2563eb] shadow-lg rounded-lg overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-[#1d4ed8] transition-colors"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === index && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile utility links */}
              <div className="border-t border-gray-200 pt-3 mt-3 space-y-1">
                <Link
                  href="https://app.sindhbarcouncil.org/advocates_portal/login.php"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MyBar
                </Link>
                <Link
                  href="/contact-us"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}