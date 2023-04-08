import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Checkbox, Form, Input, Alert } from 'antd';

const Login = () => {
  const [userFormData, setuserFormData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [validated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setuserFormData({
      ...userFormData,
      [name]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await login({
        variables: { ...userFormData }
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
    
  };

  



// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// }
return (
// const Login = () => (
  <Form name="basic" labelCol={{span: 8,}} wrapperCol={{span: 16,}} style={{maxWidth: 600, margin: '2% 30% 0 30%'}}
    initialValues={{
      remember: true,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    noValidate validated={validated}
    autoComplete="off"
    onSubmit={handleFormSubmit}
  >
    <h2 style={{margin: '0 0 10% 62%'}}>Login</h2>
    <Form.Item
      label="Email"
      name="email"
      onChange={handleInputChange}
      value={userFormData.email}
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      onChange={handleInputChange}
      value={userFormData.password}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
};
export default Login;