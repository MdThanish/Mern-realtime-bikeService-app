/* import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <nav>
          <div className="logo">NISH BIKE Services</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Log In</Link></li>
            <li><Link to="/Signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to NISH BIKE Service</h1>
            <p>Quality bike service and repairs for all types of bikes.</p>
            <Link to="/Login" className="cta-btn">Explore Services</Link>
          </div>
        </section>
        <section className="services">
          <div className="service-card">
            <h2>Regular Maintenance</h2>
            <p>Keep your bike in top condition with our regular maintenance services.</p>
          </div>
          <div className="service-card">
            <h2>Repairs &amp; Upgrades</h2>
            <p>Get your bike fixed or upgrade its components for better performance.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Bike Service. All rights reserved.</p>
      </footer>
    </div>
  );
};
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="homepage">
      <header className="glow">
        <nav>
          <div className="logo">NISH BIKE Services</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Login">Log In</Link></li>
            <li><Link to="/Signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero glow">
          <div className="hero-content">
            <h1>Welcome to NISH BIKE Service</h1>
            <p>Quality bike service and repairs for all types of bikes.</p>
            <Link to="/Login" className="cta-btn glow">Explore Services</Link>
          </div>
        </section>
        <section className="services glow">
          <div className="service-card">
            <h2>Routine Care: Keeping Things in Check</h2>
            <p>Ensure Peak Performance: Explore Our Comprehensive Bike Care Services</p>
          </div>
          <div className="service-card">
            <h2>Mending and Enhancements</h2>
            <p>Repair or Elevate Your Bike's Components for Optimal Performance!</p>
          </div>
        </section>
      </main>
      <footer className="glow">
        <p>&copy; {new Date().getFullYear()} Motorcycle Care. Copyright © MOHAMED THANISH</p>
      </footer>
    </div>
  );
};
