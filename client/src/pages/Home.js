// import React from 'react';
// import NavBar from './NavBar'
// import ImageCarousel from './ImageCarousel';

// const HomePage = () => {
//   return (
//     <div>
//       <NavBar />
//       <ImageCarousel />
//       <h1 className='card'>A Novel Idea</h1>
//       <p>We like big books and we cannot lie!</p>
//     </div>
//   );
// };

// export default HomePage;

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ImageCarousel from './ImageCarousel';
const { Header, Content, Footer } = Layout;
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <div
          style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>

       <ImageCarousel />
         <h1 className='card'>A Novel Idea</h1>
         <p>We like big books and we cannot lie!</p>
       </div>
        {/* <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div> */}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomePage;