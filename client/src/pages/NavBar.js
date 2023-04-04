import { CalendarOutlined, TeamOutlined, ShoppingCartOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Menu, Image,} from 'antd';
import { useState } from 'react';
import Logo from "../images/owlsch.png"

const items = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
       📖 A Novel Idea
      </a>
      
    ),
    key: 'home',
  },
  {
    label: (
      <a href="/about" hover="none" rel="noopener noreferrer">
        About Us
      </a>
    ),
    key: 'about',
    icon: <TeamOutlined />,
  },
  {
    label: (
      <a href="/events" rel="noopener noreferrer">
        Events
      </a>
    ),
    key: 'events',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Shop',
    key: 'shop',
    icon: <ShoppingCartOutlined />,
    children: [
      {
        type: 'group',
        label: 'Shop',
        children: [
          {
            label: (
              <a href="/shop" rel="noopener noreferrer">
                Go to Shop
              </a>
            )
          },
          {
            label: (
              <a /*href=""*/ rel="noopener noreferrer">
                View Cart
              </a>
            ),
            key: 'cart',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="/contact" rel="noopener noreferrer">
        Contact Us
      </a>
    ),
    key: 'contact',
    icon: <PhoneOutlined />
  },
  {
    icon: <a href="/" rel="noopener noreferrer">
      <Image
    width={80}
    src={Logo}
  />
  </a>
  },
  {
    label: (<Input placeholder="Search for a book" />)
  },
  {
    label: (
      <a href="/login" target="_blank" rel="noopener noreferrer">
        Login
      </a>
    ),
    key: 'login'
  },
  {
    label: (
      <a href="/signup" target="_blank" rel="noopener noreferrer">
        Signup
      </a>
    ),
    key: 'signup',
  }
  
]
;
{/* <Input placeholder="Basic usage" /> */}
const onSearch = (value) => console.log(value);
const NavBar = () => {
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu style={{ width: '100%', justifyContent: 'center' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;