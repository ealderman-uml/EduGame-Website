import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProjectBackground from '../pages/ProjectBackground'
import TeamInfo from '../pages/TeamInfo'
import InlinePDFRenderer from './InlinePDFRenderer'
import RequirementDoc from '../documents/Requirements.pdf'  // Don't remove, needs to be imported to be present at build
import UnderConstruction from '../pages/UnderConstruction'
import Resources from '../pages/Resources'


/* TODO: break these out into a global variable */
const baseurl = "/EduGame-Website"
const siteurl = "https://ealderman-uml.github.io/" + baseurl + "/"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/EduGame-Website" Component={ProjectBackground}/> {/* Note: using as landing page for now */}
            <Route path="/background" Component={ProjectBackground}/>
            <Route path="/team" Component={TeamInfo}/>
            <Route path="/requirements" element={<InlinePDFRenderer baseurl={siteurl} filename={"Requirements-Dn5gEdWI.pdf"}/>}/>
            <Route path="/resources" Component={Resources}/>
            <Route path="/under_construction" Component={UnderConstruction}/>
        </Routes>
    )
}

export default AppRoutes