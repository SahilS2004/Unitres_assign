import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  id: number;
  title: string;
  path: string;
}

interface LeftNavProps {
  menuItems: MenuItem[];
}

const LeftNav: React.FC<LeftNavProps> = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNav;

