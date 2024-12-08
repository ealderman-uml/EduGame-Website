import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import SampleLevel from '../assets/SampleLevel.png'

const Sidebar = ( {show} ) => {
    const width = "400"

    const baseurl = "/EduGame-Website"
    const siteurl = "https://ealderman-uml.github.io/" + baseurl + "/"

    const styles = {
        aside: {
            position: "sticky",
            overflow: "hidden",
            textAlign: "left",
            width: width + "px",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0)), url(${SampleLevel})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left",
            borderRight: "solid #b9b9b9 1px",
            transitionProperty: "margin-left",
            transitionDuration: "0.5s",
            zIndex: "1",
        },
        link: {
            padding: "10px 60px 10px 0",
            fontSize: "large",
            fontWeight: "bold",
            color: "black",
        },
        animation: show ? {
            marginLeft: "0px",
        } : {
            marginLeft: -1 * width + "px",
        },
        ul: {
            margin: "5px"
        },
        li: {
            margin: "10px 0px 0px 0px"
        },
    }

  return (
    /* spread to merge styles */
    <aside style={{...styles.aside, ...styles.animation}}>
        <div>
            <ul style={styles.ul}>
                {/* See ContentFrame component for Route handling */}
                <li style={styles.li}><Link style={styles.link} to={baseurl}>Project Background & Description</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/requirements" }>Project Requirements Document</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/team" }>Team Roster</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/resources" }>Bibliogrophay of Resources</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/prototype" }>Prototype</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/under_construction" }>Presentation</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/under_construction" }>SRS Document</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/under_construction" }>Demonstration Video</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/under_construction" }>Requirements and Use Cases</Link></li>
                <li style={styles.li}><Link style={styles.link} to={ baseurl + "/under_construction" }>Diagrams</Link></li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar