import React from 'react'

const Footer = () => {
    const styles = {
        footer: {
            width: "100%",
            background: "#757575",
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'  // 100% of parent container, required for centering
        },
        link: {
            color: "black",
        },
    }

  return (
    <footer style={styles.footer}>
        <div style={styles.content}>
            <p>&copy; {new Date().getFullYear()} &nbsp;</p>
            <a href='https://github.com/chrislambert3/EduGame' target='_blank' style={styles.link}>GAME_NAME_HERE.</a>
            <p>&nbsp; All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer