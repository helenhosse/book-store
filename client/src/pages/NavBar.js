// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/owlsch.png";

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="title-logo">
//         A Novel Idea
//         <img src={Logo} />
//       </h1>
//       <p>We like big books and we cannot lie!</p>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/events">Events</Link>
//         </li>
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import { CalendarOutlined, TeamOutlined, ShoppingCartOutlined, PhoneOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'About Us',
    key: 'about',
    icon: <TeamOutlined />,
  },
  {
    label: 'Events',
    key: 'app',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Shop',
    key: 'SubMenu',
    icon: <ShoppingCartOutlined />,
    children: [
      {
        type: 'group',
        label: 'Shop',
        children: [
          {
            label: (
              <a href="/shop" target="_blank" rel="noopener noreferrer">
                Go to Shop
              </a>
            )
          },
          {
            label: (
              <a href="" target="_blank" rel="noopener noreferrer">
                View Cart
              </a>
            )
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Contact Us
      </a>
    ),
    key: 'alipay',
    icon: <PhoneOutlined />
  },
];
const NavBar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;