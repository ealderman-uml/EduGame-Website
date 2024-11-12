import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'

const Sidebar = ( {show} ) => {
    const width = "400"
    const styles = {
        aside: {
            position: "sticky",
            overflow: "hidden",
            textAlign: "left",
            width: width + "px",
            height: "100%",
            backgroundColor: "#e9e9e9",
            borderRight: "solid #b9b9b9 1px",
            transitionProperty: "margin-left",
            transitionDuration: "0.5s",
        },
        link: {
            padding: "10px 60px 10px 0",
            fontSize: "16px",
            whiteSpace: "nowrap",
            textDecoration: "none"
        },
        animation: show ? {
            marginLeft: "0px",
        } : {
            marginLeft: -1 * width + "px",
        }
    }

  return (
    <aside style={{...styles.aside, ...styles.animation}}>
        <div>
            <ul>
                {/* See ContentFrame component for Route handling */}
                <li><Link style={styles.link} to="/">Brief Project Background</Link></li>
                <li><Link style={styles.link} to="/description">Brief Project Description</Link></li>
                <li><Link style={styles.link} to="/team">Team Roster</Link></li>
                <li>Original Project Description(link(s))</li>
                <li>SRS (link)</li>
                <li>Prototype(s) (link(s))</li>
                <li>Bibliogrophay of Resources Used (link(s))</li>
                <li>Agenda & Minutes of Meetings (secured)</li>
                <li>Milestones with Internal & Required Deadlines (secured)</li>
                <li>Intermediate Drafts of Deliverables (secured)</li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar