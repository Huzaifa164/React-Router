import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }
    const goBack = () => {
        navigate(-1);
    }
  return (
    <>
      <h1>This is Contact Page.</h1>
      <button onClick={goHome}>Go to Home</button>
      <button onClick={goBack}>Go Back</button>
    </>
  );
};

export default Contact;
