import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import './requestFooter.css';

function RequestFooter() {
  let navigate = useNavigate();
    
  function handleClick() {
      navigate("/request/payment");
  }
  return (
    <div className="request-footer">
        <button className="request-btn" onClick={handleClick}>Request Video Answer for $29</button>
    </div>
  );
}

export default RequestFooter;