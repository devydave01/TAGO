import React from 'react';
import NavLink from '../atoms/NavLink';

const NavMenu = () => {
  const links = [
    { label: 'About us', href: '#' },
    { label: 'What we do', href: '#' },
    { label: 'Our Process', href: '#' },
    { label: 'Testimonies', href: '#' },
    { label: 'FAQs', href: '#' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink key={link.label} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;
