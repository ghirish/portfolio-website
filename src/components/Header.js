import React, { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Moon, Sun, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navigationItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/ghirish', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ghirish-thaenraj-769b35236/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:ghirish05@gmail.com', icon: Mail, label: 'Email' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-200/20 dark:border-slate-800/20" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Status */}
          <div className="flex items-center space-x-4">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 pl-0"
            >
              GT
            </a>
            <div className="hidden sm:flex items-center">
              <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-800 dark:text-green-400 font-medium">Available for opportunities</span>
              </div>
              <div className="ml-3 flex items-center space-x-1 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3" />
                <span>Providence, RI</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
                          "focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50",
                          "focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          "data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50",
                          "dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
                        )}
                      >
                        {item.label}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Desktop only */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-9 w-9 p-0"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-9 w-9 p-0"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Navigation Links */}
                    <div className="space-y-2">
                      {navigationItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href)}
                          className="block px-4 py-2 text-lg font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                        Connect with me
                      </p>
                      <div className="flex space-x-2">
                        {socialLinks.map((social) => (
                          <Button
                            key={social.label}
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1"
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2"
                            >
                              <social.icon className="h-4 w-4" />
                              <span>{social.label}</span>
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 