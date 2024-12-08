import React, { useState, useEffect } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

const baseurl = "/EduGame-Website"
// TODO: Replace with link to build
const Prototype = () => {
  const styles = {
    container: {
      backgroundColor: "#d7d7d7",
      height: "100%",
      width: "100%",
      display: "flex",
      //display: "static",
      justifyContent: "center",
      alignItems: "center",
    },
    game: {
      // game UI scale is dependent on this
      // do not change.
      //height: "90%"
      width: "100%",
    },
  }
  const { unityProvider } = useUnityContext({
    loaderUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.loader.js",
    dataUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.data.br",
    frameworkUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.framework.js.br",
    codeUrl: "/EduGame-Website/WebGL_Build/Build/WebGL_Build.wasm.br",
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