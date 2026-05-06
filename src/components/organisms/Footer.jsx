import React from 'react';
import whiteLogo from '../../assets/whitelogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#050B15] pt-24 pb-12 px-6 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <img src={whiteLogo} alt="Tago Logo" className="h-12 w-auto object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Engineering Systems Built For Growth. We Design Structured, Scalable Software That Evolves With Your Business.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400 uppercase">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">What We Do</a></li>
              <li><a href="#process" className="hover:text-blue-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-blue-500 transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonies</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400 uppercase">
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
              <li><a href="#faqs" className="hover:text-blue-500 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Start A Project</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-100">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-400 uppercase tracking-wider">
              <li>
                <span className="text-slate-100">Email:</span> <a href="mailto:hello@tago.com" className="hover:text-blue-500 transition-colors">hello@tago.com</a>
              </li>
              <li>
                <span className="text-slate-100">Phone:</span> <a href="tel:+23470633335677" className="hover:text-blue-500 transition-colors">+234 706 333 35677</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            © 2026 TAGO CORE SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
