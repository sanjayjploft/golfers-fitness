"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Card, ListGroup} from "react-bootstrap";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
  <div className="signup-wrapper started-app-bg">
      <div className="overlay"></div>

      <div className="signup-card">
        <h2 className="login-title">✨ You’re Almost Set!</h2>
        <p className="login-subtitle">
    Your plan is ready. Now let’s activate your <br /> 
<b className="text-dark">AI-powered fitness analysis.</b>
        </p>
       <div className="start_app_sec">
         <h5 className="fw-bold mb-3 mt-4">
          What you’ll unlock in the app:
        </h5>
          <Card 
          className="p-4 border-0" 
        >
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-transparent border-0 text-muted">
              ⦿ Smart posture & form analysis
            </ListGroup.Item>

            <ListGroup.Item className="bg-transparent border-0 text-muted">
              ⦿ Real-time workout feedback
            </ListGroup.Item>

            <ListGroup.Item className="bg-transparent border-0 text-muted">
              ⦿ Personalized AI recommendations
            </ListGroup.Item>

            <ListGroup.Item className="bg-transparent border-0 text-muted">
              ⦿ Progress tracking synced to your account
            </ListGroup.Item>
          </ListGroup>
        </Card>
           <p className="text-center text-muted mt-3 text-dark">
          You can always return to the web to view your dashboard,
          manage your plan, and track progress.
        </p>
  <Link href={"/dashboard"} className="get-started-btn w-100 w-100 mt-4">
        Install App & Start Analysis
          </Link>
       </div>
        
      </div>
    </div>
  );
}
