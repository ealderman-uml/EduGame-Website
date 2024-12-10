import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ContentFrame from './components/ContentFrame'

function App() {
  const [showSidebar,setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const styles = {
    container: {
      display: "flex",
      flexFlow: "column",
      height: "100%",
      backgroundColor: "#d7d7d7",
    },
    header: {
      position: "fixed",
      width: "100%",
      height: "50px",
      zIndex: "1",
    },
    headerSpacer: {
      position: "static",
      padding: "25px",
    },
    main: {
      display: "flex",
      flexGrow: "1",
    },
    footer: {
      height: "50px",
    },
  }

  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.header}>
          <Header sidebarCallback={handleToggleSidebar} />
        </div>
        <div style={styles.headerSpacer}></div>
      <div style={styles.main}>
        <Sidebar show={showSidebar}/>
        <ContentFrame />
      </div>
        <div style={styles.footer}>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
