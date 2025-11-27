'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-20 h-20 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt={siteConfig.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Início
            </Link>
            <Link 
              href="/imoveis" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Imóveis
            </Link>
            <Link 
              href="/sobre" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="/contacto" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contacto
            </Link>
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
              Ligar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/imoveis" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Imóveis
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contacto" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-center"
              >
                Ligar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

