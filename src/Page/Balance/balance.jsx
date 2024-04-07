import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="/home" className="balance">
        Balance
      </Link>
      <p>Balance!</p>
    </div>
  );
}

export default About;
