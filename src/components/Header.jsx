import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#ccc',
      padding: '0.5rem 1rem',
      zIndex: 999,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    left: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.1rem',
      marginRight: '1rem',
    },
    select: {
      padding: '0.3rem',
      fontSize: '1rem',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '0.5rem',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 500,
    },
    responsiveContainer: {
      width: '100%',
    },
  };

  const isMobile = window.innerWidth <= 600;
  if (isMobile) {
    styles.header.flexDirection = 'column';
    styles.nav.alignSelf = 'flex-start';
    styles.nav.marginTop = '0.5rem';
  }

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <span style={styles.logo}>🎨 MultiThemeApp</span>
        <select value={theme} onChange={(e) => changeTheme(e.target.value)} style={styles.select}>
          <option value="theme1">Theme 1 - Light</option>
          <option value="theme2">Theme 2 - Dark</option>
          <option value="theme3">Theme 3 - Colorful</option>
        </select>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
