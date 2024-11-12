import React from 'react'

const Footer = () => {
    const styles = {
        footer: {
            height: "5%",
            background: "#d9d9d9",
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'  // 100% of parent container, required for centering
        }
    }

  return (
    <footer style={styles.footer}>
        <div style={styles.content}>
            &copy; {new Date().getFullYear()} &nbsp; <a href='https://github.com/chrislambert3/EduGame' target='_blank'>GAME_NAME_HERE</a>. All rights reserved. {/*TODO: change*/}
        </div>
    </footer>
  )
}

export default Footer