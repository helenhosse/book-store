// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';
// // import {Container, Row, Col, Form, Button} from "react-bootstrap";

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   //used react-bootstrap, feel free to change, just added the needed labels and handles
// //   return (
    
// //     <Container>
       
// //         <Row className="no-gutters">
// //           <Col lg={5} md={6} sm={12} className="p-5 m-auto">
// //           <h1 className="mt-5 mb-5 text-left rounded text-color">Login</h1>
// //             <form onSubmit={handleFormSubmit}>

// //                 <Form.Group>
// //                   <Form.Label className="mb-2">Email address</Form.Label>

// //                   <Form.Control className="mb-2" name="email" type="email" id="email" placeholder="Enter email" onChange={handleChange} />
// //                 </Form.Group>

                
// //                 <Form.Group>
// //                     <Form.Label className="mb-2">Password</Form.Label>

// //                     <Form.Control className="mb-2" name="password" type="password" id="pwd" placeholder="Password" onChange={handleChange} />
// //                 </Form.Group>

// //                 {error ? (
// //                   <Form.Group>
// //                   <Form.Text className="mb-2">The provided credentials are incorrect.</Form.Text>
// //                   </Form.Group> 
// //                 ) : null}
                
// //                 <br />
// //                 <Button variant="success btn-block button-class" type="submit">
// //                     Login
// //                 </Button>
                
// //             </form>
            
// //             <div className="mt-5 text-left">Don't have an account? <Link to={'/signup'}> Register here</Link></div>
// //           </Col>
// //       </Row>
// //     </Container>
    
// //   );
// }

// export default Login;

// import Login from 'ant-design-pro/lib/Login';
// import { Alert, Checkbox } from 'antd';

// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

// class Login extends React.Component {
//   state = {
//     notice: '',
//     type: 'tab2',
//     autoLogin: true,
//   };
//   onSubmit = (err, values) => {
//     console.log('value collected ->', {
//       ...values,
//       autoLogin: this.state.autoLogin,
//     });
//     if (this.state.type === 'tab1') {
//       this.setState(
//         {
//           notice: '',
//         },
//         () => {
//           if (!err && (values.username !== 'admin' || values.password !== '888888')) {
//             setTimeout(() => {
//               this.setState({
//                 notice: 'The combination of username and password is incorrect!',
//               });
//             }, 500);
//           }
//         }
//       );
//     }
//   };
//   onTabChange = key => {
//     this.setState({
//       type: key,
//     });
//   };
//   changeAutoLogin = e => {
//     this.setState({
//       autoLogin: e.target.checked,
//     });
//   };
//   render() {
//     return (
//       <div className="login-warp">
//         <Login
//           defaultActiveKey={this.state.type}
//           onTabChange={this.onTabChange}
//           onSubmit={this.onSubmit}
//         >
//           <Tab key="tab1" tab="Account">
//             {this.state.notice && (
//               <Alert
//                 style={{ marginBottom: 24 }}
//                 message={this.state.notice}
//                 type="error"
//                 showIcon
//                 closable
//               />
//             )}
//             <UserName name="username" />
//             <Password name="password" />
//           </Tab>
//           <Tab key="tab2" tab="Mobile">
//             <Mobile name="mobile" />
//             <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
//           </Tab>
//           <div>
//             <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
//               Keep me logged in
//             </Checkbox>
//             <a style={{ float: 'right' }} href="">
//               Forgot password
//             </a>
//           </div>
//           <Submit>Login</Submit>
//           <div>
//             Other login methods
//             <span className="icon icon-alipay" />
//             <span className="icon icon-taobao" />
//             <span className="icon icon-weibo" />
//             <a style={{ float: 'right' }} href="">
//               Register
//             </a>
//           </div>
//         </Login>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Login />, mountNode);