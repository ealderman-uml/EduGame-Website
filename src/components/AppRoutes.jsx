import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProjectBackground from '../pages/ProjectBackground'
import ProjectDescription from '../pages/ProjectDescription'
import TeamInfo from '../pages/TeamInfo'
import InlinePDFRenderer from './InlinePDFRenderer'

const baseurl = "https://ealderman-uml.github.io/EduGame-Website/"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={ProjectBackground}/> {/* Note: using as landing page for now */}
            <Route path="/background" Component={ProjectBackground}/>
            <Route path="/description" Component={ProjectDescription}/>
            <Route path="/team" Component={TeamInfo}/>
            <Route path="/requirements" element={<InlinePDFRenderer baseurl={baseurl} filename={"Requirements-Dn5gEdWI.pdf"}/>}/>
        </Routes>
    )
}

export default AppRoutes