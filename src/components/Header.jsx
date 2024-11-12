
import { React } from 'react'
import hamburgerIcon from '../assets/hamburgerIcon.png'

const Header = ( {sidebarCallback} ) => {
  const styles = {
    header: {
      display: "flex",
      background: "#D9D9D9",
      padding: "0px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "600",
      height: "5%",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      zIndex: "5"
    },
    segment: {
      display: "flex",
      alignItems: "center"
    },
    nav: {
      padding: "10px",
      display: "flex",
    },
    link: {
      padding: "10px 60px 10px 0",
      fontSize: "16px",
      whiteSpace: "nowrap",
      textDecoration: "none"
    },
    hamburger: {
      padding: "0px 10px 0px 0px",
      height: '50px',
      cursor: 'pointer' // makes mouse icon pointer on hover
    },
  }

  return (
    <header style={styles.header}>

      {/* left aligned */}
      <div style={styles.segment}>
        <img src={hamburgerIcon} style={styles.hamburger} onClick={sidebarCallback} alt="hamburger"/>
        <nav style={styles.nav}>
          <a href="google.com" style={styles.link}>Link 1</a>
          <a href="google.com" style={styles.link}>Link 2</a>
          <a href="google.com" style={styles.link}>Link 3</a>
          <a href="google.com" style={styles.link}>Link 4</a>
        </nav>
      </div>

      {/* right aligned */}
      <div style={styles.segment}>
        <p style={styles.link}>Some stuff</p>
        <p style={styles.link}>And some things</p>
      </div>
    </header>
  );
}

export default Header;
