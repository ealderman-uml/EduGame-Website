import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProjectBackground from '../pages/ProjectBackground'
import ProjectDescription from '../pages/ProjectDescription'
import TeamInfo from '../pages/TeamInfo'
import Requirements from '../pages/Requirements'

const ContentFrame = () => {
  return (
    <div>
      {/* TODO: break Routes out into own component - Ed Alderman */}
        <Routes>
            <Route path="/" Component={ProjectBackground}/> {/* Note: using as landing page for now */}
            <Route path="/background" Component={ProjectBackground}/>
            <Route path="/description" Component={ProjectDescription}/>
            <Route path="/team" Component={TeamInfo}/>
        </Routes>
    </div>
  )
}

export default ContentFrame
