import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="home-unique">
      <div className="wave-background">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,60 C150,180 350,0 500,60 L500,00 L0,0 Z" style={{ stroke: "none", fill: "#ff6600" }}></path>
        </svg>
      </div>

      <div className="glass-card">
        <h1>Welcome to Mart</h1>
        <p>Explore the best products, deals & more!</p>
        <button onClick={() => navigate('/products')}>Start Shopping</button> {}
      </div>

      <footer className="home-footer">
        <p>&copy;  2025 MyShopZone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
