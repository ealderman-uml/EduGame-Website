import React from 'react'
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const InlinePDFRenderer = ( {url} ) => {

    // create appropriate url prefix to prepend to the url
    const pageurl = window.location.href;
    const lastSlash = pageurl.lastIndexOf('/');
    const siteurl = pageurl.substring(0, lastSlash);

    const styles = {
        pdf: {
            width: "100%",
            height: "100%",
        }
    }

    return (
        <EmbedPDF
        mode='inline'
        style={styles.pdf}
        documentURL={siteurl + url}
        />
    )
}

export default InlinePDFRenderer