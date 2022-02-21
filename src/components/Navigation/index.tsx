import React from 'react';

interface NavigationItemProps {
  name: string;
  href: string;
}

const NavigationItem = ({ name, href }: NavigationItemProps) => {
  return (
    <li className='navigation__item-wrapper'>
      <a className='navigation__item' href={href}>
        {name}
      </a>
    </li>
  );
};

interface NavigationProps {
  className?: string;
  navItems: { name: string; href: string }[];
}

const Navigation = ({ className, navItems }: NavigationProps) => {
  return (
    <ul className={`navigation ${className ? className : ''}`}>
      {navItems.map((navigation, index) => (
        <NavigationItem
          name={navigation.name}
          href={navigation.href}
          key={index}
        />
      ))}
    </ul>
  );
};
export default Navigation;
