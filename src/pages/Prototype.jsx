import React, { useState, useEffect } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

const Prototype = () => {
  const styles = {
    container: {
      backgroundColor: "#888888",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    game: {
      // game UI scale is dependent on this
      // do not change.
      width: "100%",
    },
  }
  const { unityProvider } = useUnityContext({
    loaderUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.loader.js",
    dataUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.data",
    frameworkUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.framework.js",
    codeUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.wasm",
  });

  useEffect(
    function() {
      const updateDevicePixelRatio = () => {
        setDevicePixelRatio(window.devicePixelRatio);
      };

      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );

      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );


  return (
    <div style={styles.container}>
      <Unity unityProvider={unityProvider} style={styles.game}/>
    </div>
  )
}

export default Prototype