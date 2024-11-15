
import { React } from 'react'
import hamburgerIcon from '../assets/hamburgerIcon.png'

const Header = ( {sidebarCallback} ) => {
  const styles = {
    header: {
      display: "flex",
      background: "#757575",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "600",
      width: "100%",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      zIndex: "1"
    },
    segment: {
      display: "flex",
      alignItems: "center"
    },
    nav: {
      display: "flex",
    },
    link: {
      padding: "0px 60px 0px 0",
      fontSize: "16px",
      whiteSpace: "nowrap",
      textDecoration: "none"
    },
    hamburger: {
      padding: "0px 10px 0px 10px",
      height: '30px',
      cursor: 'pointer' // makes mouse icon pointer on hover
    },
  }

  return (
    <header style={styles.header}>

      {/* left aligned */}
      <div style={styles.segment}>
          <img src={hamburgerIcon} style={styles.hamburger} onClick={sidebarCallback} alt="hamburger"/>
        <nav style={styles.nav}>
          {/*
          <a href="google.com" style={styles.link}>Link 1</a>
          <a href="google.com" style={styles.link}>Link 2</a>
          <a href="google.com" style={styles.link}>Link 3</a>
          <a href="google.com" style={styles.link}>Link 4</a>
          */}
        </nav>
      </div>

      {/* right aligned */}
      <div style={styles.segment}>
        <p style={styles.link}>Mini-Golf Mania</p>
      </div>
    </header>
  );
}

export default Header;
