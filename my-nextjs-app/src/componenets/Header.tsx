// src/components/Header/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from '@/types/componentTypes';
//import { signOutAction } from '@/actions/SignOut';
//import LogoutButton from '../LogoutButton/LogoutButton';

const Header: React.FC<HeaderProps> = ({ name, customerId, onNavToggle, onHamToggle, isNavOpen }) => {
  const [isHamOpen, setIsHamOpen] = useState(false);

  const toggleHam = () => {
    setIsHamOpen(!isHamOpen);
    if (onHamToggle) onHamToggle();
  };

  const closeMenu = () => {
    setIsHamOpen(false);
  };

  console.log(closeMenu); //Surpress warning

  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/signout', {
        method: 'POST',
      });
  
      if (response.ok) {
        console.log('Signed out successfully');
        window.location.href = '/'; // Redirect to home or login page
      } else {
        console.error('Failed to sign out');
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.leftSection}>
        </div>
        <div className={styles.rightSection}>
          <button 
            className={`${styles.userMenuButton} ${isHamOpen ? styles.open : ''}`} 
            onClick={toggleHam}
          >
            O
          </button>
        </div>
      </div>
      <div className={`${styles.hamburgerMenu} ${isHamOpen ? styles.menuOpen : ''}`}>
        <div className={styles.menuHeader}>
          <div className={styles.userName}>{name}</div>
        </div>
        <ul className={styles.hamMenuItems}>
          <li>
            <a href="#profile" onClick={() => setIsHamOpen(false)}>
              <img src={'/user-alt-3.svg'} alt="Profile" className={styles.icon} /> Profile
            </a>
          </li>
          <li>
            <a href="#settings" onClick={() => setIsHamOpen(false)}>
              <img src={'/cog.svg'} alt="Settings" className={styles.icon} /> Settings
            </a>
          </li>
          <li>
            <a href="#stakeholders" onClick={() => setIsHamOpen(false)}>
              <img src={'/users-2.svg'} alt="Stakeholders" className={styles.icon} /> Stakeholders
            </a>
          </li>
          <li>
            <form
              onSubmit={async (event) => {
                event.preventDefault(); // Prevent the default form submission
                await handleSignOut(); // Call your sign-out function
              }}
            >
              <button
                type="submit"
                className="h-8 px-3 text-sm bg-indigo-600 rounded"
              >
                Sign out
              </button>
            </form>
          </li>
          <li>
          <a href="#dismiss" onClick={() => setIsHamOpen(false)}>
              <img src={'/X_close.svg'} alt="Dismiss" className={styles.icon} /> Dismiss
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;