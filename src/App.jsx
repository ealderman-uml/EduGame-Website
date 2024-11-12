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
    main: {
      display: "flex",
      height: "90%"
    },
  }

  return (
    <Router>
      <Header sidebarCallback={handleToggleSidebar} />
      <div style={styles.main}>
        <Sidebar show={showSidebar}/>
        <ContentFrame />
      </div>
      <Footer />
    </Router>
  )
}

export default App
