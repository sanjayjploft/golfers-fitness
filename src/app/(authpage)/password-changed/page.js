"use client";

import Link from "next/link";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signup-wrapper signup-bg">
      <div className="overlay"></div>

      <div className="signup-card text-center">
        <img src="/images/successmark.svg" className="mb-3" />
        <h2 className="login-title">Password Changed!</h2>
        <p className="login-subtitle">
          Your password has been changed successfully.
        </p>

        <Link href={"/login"} className="get-started-btn  w-100 mt-4">
          Back to Login
        </Link>
      </div>
    </div>
  );
}
