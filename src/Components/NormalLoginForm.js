import { Form, Input, Button, Checkbox } from "antd";
// import { Alert } from 'antd';
// import {  Modal } from 'antd';


// import { useState } from "react";
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Normallogin.css"

const NormalLoginForm = () => {
  // const[email,setemail]=useState("")
  // const[password,setpass]=useState("")

  const  onFinish = (values) => {
    console.log("Received values of form: ", values);
    const emailAddress = values.email;
    const password = values.password;
    const data = { email: emailAddress, password: password };
    
    

   fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(response => {

      let statusCode = response.status,
          success = response.ok;
  
      response.json().then(response => {
  
          if(!success){
              //handle errors here

              
                
              alert("Error");
              return;
              
              
          }
        
  
          // handle successful requests here
          alert("Success");

        })
      })
  
      
    
      
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input className="item" placeholder="Email Address*" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input className="item1" type="password" placeholder="Password*" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
      <Form.Item className="main-container">
        <input type="checkbox" value="lsRememberMe" id="rememberMe" />
        <label for="rememberMe">Remember me</label>

        <a className="login-form-forgot" href="">
          Forgot Password?
        </a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
