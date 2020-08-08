import React from "react";

import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { Button, Block } from "../../../components";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const RegisterForm = () => {
  const success = false;
  return (
    <>
      <div className="auth__top">
        <h2>Sign Up</h2>
        <p>Welcome to join us</p>
      </div>
      <Block>
        {success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              hasFeedback
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              hasFeedback
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                size="large"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: "Confirm your Password!" }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large">
                Log in
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/login">
              Have an account
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <InfoCircleTwoTone />
            <h2>Success</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        )}
      </Block>
    </>
  );
};

export default RegisterForm;
