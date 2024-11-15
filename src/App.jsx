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
    },
    main: {
      display: "flex",
      flexGrow: "1",
    },
    header: {
      height: "50px",
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
