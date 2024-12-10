import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import ProjectBackground from '../pages/ProjectBackground'
import TeamInfo from '../pages/TeamInfo'
import UnderConstruction from '../pages/UnderConstruction'
import Resources from '../pages/Resources'
import Prototype from '../pages/Prototype'
import Presentation from '../pages/Presentation'
import SRS from '../pages/SRS'
import DemonstrationVideo from '../pages/DemonstrationVideo'
import Diagrams from '../pages/Diagrams'
import Requirements from '../pages/Requirements'

const baseurl = import.meta.env.BASE_URL;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/EduGame-Website" Component={ProjectBackground}/> {/* Note: using as landing page for now */}
            <Route path={ baseurl + "/background" } Component={ProjectBackground}/>
            <Route path={ baseurl + "/requirements" } Component={Requirements}/>
            <Route path={ baseurl + "/team"} Component={TeamInfo}/>
            <Route path={ baseurl + "/resources"} Component={Resources}/>
            <Route path={ baseurl + "/prototype"} Component={Prototype}/>
            <Route path={ baseurl + "/presentation"} Component={Presentation}/>
            <Route path={ baseurl + "/SRS"} Component={SRS}/>
            <Route path={ baseurl + "/demonstration_video"} Component={DemonstrationVideo}/>
            <Route path={ baseurl + "/diagrams"} Component={Diagrams}/>
            <Route path={ baseurl + "/under_construction"} Component={UnderConstruction}/>
        </Routes>
    )
}

export default AppRoutes