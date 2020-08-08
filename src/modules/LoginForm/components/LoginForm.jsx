import React from "react";

import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Block } from "../../../components";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const LoginForm = () => {
  return (
    <>
      <div className="auth__top">
        <h2>Log In</h2>
        <p>Nice to meet you</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            hasFeedback
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large">
              Log in
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/register">
            Create an account
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
