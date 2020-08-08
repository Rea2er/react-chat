import React from "react";

import { Route } from "react-router-dom";
import { LoginForm } from "../../modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route path={["/", "/login"]} component={LoginForm} />
    </div>
  </section>
);

export default Auth;
