import React from "react";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/form");
  };

  return (
    <div className="right">
      <div className="form">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="content">
          <div className="text">
            <h1>Verify your Email</h1>
            <p>
              Please enter the 6 digit code we just sent to s*********a@xyz.com
            </p>
          </div>
          <form action="" method="post">
            <div className="inputs">
              <input type="number" maxLength="1" className="otp-input" />
              <input type="number" maxLength="1" className="otp-input" />
              <input type="number" maxLength="1" className="otp-input" />
              <p className="otp-separator">-</p>
              <input type="number" maxLength="1" className="otp-input" />
              <input type="number" maxLength="1" className="otp-input" />
              <input type="number" maxLength="1" className="otp-input" />
            </div>
            <div className="button">
              <button onClick={handleVerify}>Verify</button>
              <p>Wait 1:39 seconds before requesting a new code.</p>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>
          By continuing, you’re agreeing to Nobody’s
          <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a> and
          <a href="#">Cookie Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Right;
