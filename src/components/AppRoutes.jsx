import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProjectBackground from '../pages/ProjectBackground'
import TeamInfo from '../pages/TeamInfo'
import InlinePDFRenderer from './InlinePDFRenderer'
import UnderConstruction from '../pages/UnderConstruction'
import Resources from '../pages/Resources'
import Prototype from '../pages/Prototype'

// Documents to be displayed by InlinePDFRenderer must be imported below.
// Ignore the linter warning about these imports being unused.
// If they are not imported, they will not be present in the build.
//import RequirementDoc from '../documents/Requirements.pdf'  // Don't remove, needs to be imported to be present at build


/* TODO: break these out into a global variable */
const baseurl = "/EduGame-Website"
const siteurl = "https://ealderman-uml.github.io/" + baseurl + "/"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/EduGame-Website" Component={ProjectBackground}/> {/* Note: using as landing page for now */}
            <Route path={ baseurl + "/background" } Component={ProjectBackground}/>
            <Route path={ baseurl + "/requirements" } element={<InlinePDFRenderer baseurl={siteurl} filename={"Requirements-Dn5gEdWI.pdf"}/>}/>
            <Route path={ baseurl + "/team"} Component={TeamInfo}/>
            <Route path={ baseurl + "/resources"} Component={Resources}/>
            <Route path={ baseurl + "/prototype"} Component={Prototype}/>
            <Route path={ baseurl + "/under_construction"} Component={UnderConstruction}/>
            {/* TODO: Create page for Presentation */}
            {/* TODO: Create page for SRS Document */}
            {/* TODO: Create page for Demonstration Video */}
            {/* TODO: Create page for Requirements and Use Cases */}
            {/* TODO: Create page for Diagrams */}
            <Route path={ baseurl + "/unityLoader"} element={"../assets/WebGL_Build/Build/WebGL Build.loader.js"}/>
        </Routes>
    )
}

export default AppRoutes